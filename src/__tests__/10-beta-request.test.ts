import { describe, it, expect, vi, beforeEach } from "vitest";

interface Call {
  method: string;
  table?: string;
  args?: unknown[];
}

const mocks = vi.hoisted(() => {
  const from = vi.fn();
  return {
    supabase: { from },
    sendBetaCodeEmail: vi.fn(),
    hasEmailConfig: vi.fn(),
  };
});

vi.mock("@/lib/db-supabase", () => ({ supabase: mocks.supabase }));
vi.mock("@/lib/email", () => ({
  sendBetaCodeEmail: mocks.sendBetaCodeEmail,
  hasEmailConfig: mocks.hasEmailConfig,
}));

import { POST } from "@/app/api/beta/request/route";

let router: (calls: Call[]) => unknown;

function makeBuilder(table: string) {
  const builder: any = {
    _calls: [{ method: "from", table }] as Call[],
    select(...args: unknown[]) {
      this._calls.push({ method: "select", args });
      return this;
    },
    eq(...args: unknown[]) {
      this._calls.push({ method: "eq", args });
      return this;
    },
    gte(...args: unknown[]) {
      this._calls.push({ method: "gte", args });
      return this;
    },
    lte(...args: unknown[]) {
      this._calls.push({ method: "lte", args });
      return this;
    },
    order(...args: unknown[]) {
      this._calls.push({ method: "order", args });
      return this;
    },
    insert(...args: unknown[]) {
      this._calls.push({ method: "insert", args });
      return this;
    },
    update(...args: unknown[]) {
      this._calls.push({ method: "update", args });
      return this;
    },
    maybeSingle() {
      this._calls.push({ method: "maybeSingle" });
      return this;
    },
    delete() {
      this._calls.push({ method: "delete" });
      return this;
    },
    then(resolve: (v: unknown) => unknown, reject: (e: unknown) => unknown) {
      return Promise.resolve(router(this._calls)).then(resolve, reject);
    },
  };
  return builder;
}

function post(
  email: string,
  ip?: string,
  extraHeaders?: Record<string, string>,
  body?: Record<string, unknown>
) {
  const headers: Record<string, string> = { "Content-Type": "application/json" };
  if (ip) headers["x-forwarded-for"] = ip;
  return POST(
    new Request("http://localhost/api/beta/request", {
      method: "POST",
      headers: { ...headers, ...extraHeaders },
      body: JSON.stringify({ email, ...body }),
    })
  );
}

function hasMethod(calls: Call[], method: string, table?: string): boolean {
  return calls.some((c) => c.method === method && (!table || c.table === table));
}

function defaultRouter(calls: Call[]): unknown {
  const table = calls[0]?.table;
  if (table === "beta_codes") return { data: null, error: null };
  if (hasMethod(calls, "maybeSingle")) return { data: null, error: null };
  if (hasMethod(calls, "insert")) return { data: null, error: null };
  if (hasMethod(calls, "update")) return { data: null, error: null };
  if (calls.some((c) => c.method === "eq" && c.args?.[0] === "ip")) return { count: 0 };
  if (hasMethod(calls, "gte")) return { count: 0 };
  return { data: null, error: null };
}

describe("10 — Beta Request Route", () => {
  beforeEach(() => {
    router = defaultRouter;
    mocks.sendBetaCodeEmail.mockReset();
    mocks.sendBetaCodeEmail.mockResolvedValue(true);
    mocks.hasEmailConfig.mockReset();
    mocks.hasEmailConfig.mockReturnValue(true);
    mocks.supabase.from.mockReset();
    mocks.supabase.from.mockImplementation((table: string) => makeBuilder(table));
  });

  it("rejects an invalid email", async () => {
    const res = await post("not-an-email");
    expect(res.status).toBe(400);
    expect(mocks.supabase.from).not.toHaveBeenCalled();
  });

  it("sends a code and stamps code_sent_at for a new email", async () => {
    const res = await post(
      "new@test.com",
      "1.2.3.4",
      { "x-forwarded-host": "old.cango.app", "x-forwarded-proto": "https" },
      { origin: "https://de.cango.app" }
    );
    expect(res.status).toBe(200);
    const body = await res.json();
    expect(body.message).toContain("Check your inbox");

    expect(mocks.sendBetaCodeEmail).toHaveBeenCalledTimes(1);
    const sendArgs = mocks.sendBetaCodeEmail.mock.calls[0][0];
    expect(sendArgs.to).toBe("new@test.com");
    expect(sendArgs.code).toMatch(/^cango-[a-z0-9]{8}$/);
    expect(sendArgs.authUrl).toBe("https://de.cango.app/auth");

    const builders = mocks.supabase.from.mock.results.map((r) => r.value);
    const updated = builders.some(
      (b) => hasMethod(b._calls, "update") && b._calls[0].table === "beta_requests"
    );
    expect(updated).toBe(true);
  });

  it("prefers the client-provided origin over forwarded headers", async () => {
    const res = await post(
      "origin@test.com",
      "1.2.3.4",
      { "x-forwarded-host": "old.cango.app", "x-forwarded-proto": "https" },
      { origin: "http://localhost:3000" }
    );
    expect(res.status).toBe(200);
    const sendArgs = mocks.sendBetaCodeEmail.mock.calls[0][0];
    expect(sendArgs.authUrl).toBe("http://localhost:3000/auth");
  });

  it("strips paths/query from a valid origin", async () => {
    const res = await post(
      "clean@test.com",
      "1.2.3.4",
      undefined,
      { origin: "https://de.cango.app/evil?x=1" }
    );
    expect(res.status).toBe(200);
    const sendArgs = mocks.sendBetaCodeEmail.mock.calls[0][0];
    expect(sendArgs.authUrl).toBe("https://de.cango.app/auth");
  });

  it("falls back to server headers when the origin is missing or unsafe", async () => {
    const res = await post(
      "fallback@test.com",
      "1.2.3.4",
      { "x-forwarded-host": "old.cango.app", "x-forwarded-proto": "https" },
      { origin: "javascript:alert(1)" }
    );
    expect(res.status).toBe(200);
    const sendArgs = mocks.sendBetaCodeEmail.mock.calls[0][0];
    expect(sendArgs.authUrl).toBe("https://old.cango.app/auth");
  });

  it("falls back to the default origin when nothing is available", async () => {
    const res = await post("plain@test.com");
    expect(res.status).toBe(200);
    const sendArgs = mocks.sendBetaCodeEmail.mock.calls[0][0];
    expect(sendArgs.authUrl).toBe("https://cango.app/auth");
  });

  it("does not send again for a duplicate email", async () => {
    router = (calls) => {
      if (hasMethod(calls, "maybeSingle")) {
        return { data: { id: "r1", code_sent_at: "2026-08-16T00:00:00.000Z" }, error: null };
      }
      return defaultRouter(calls);
    };

    const res = await post("existing@test.com", "1.2.3.4");
    expect(res.status).toBe(200);
    const body = await res.json();
    expect(body.message).toContain("We already have your email");
    expect(mocks.sendBetaCodeEmail).not.toHaveBeenCalled();
  });

  it("blocks a new request when the per-IP daily cap is reached", async () => {
    router = (calls) => {
      if (calls.some((c) => c.method === "eq" && c.args?.[0] === "ip")) return { count: 3 };
      if (hasMethod(calls, "gte")) return { count: 0 };
      return defaultRouter(calls);
    };

    const res = await post("other@test.com", "1.2.3.4");
    expect(res.status).toBe(429);
    const body = await res.json();
    expect(body.error).toContain("Too many requests");
    expect(mocks.sendBetaCodeEmail).not.toHaveBeenCalled();
  });

  it("blocks a new request when the global daily limit is reached", async () => {
    router = (calls) => {
      if (calls.some((c) => c.method === "eq" && c.args?.[0] === "ip")) return { count: 0 };
      if (hasMethod(calls, "gte")) return { count: 90 };
      return defaultRouter(calls);
    };

    const res = await post("other2@test.com", "1.2.3.4");
    expect(res.status).toBe(429);
    const body = await res.json();
    expect(body.error).toContain("We've hit today's request limit");
    expect(mocks.sendBetaCodeEmail).not.toHaveBeenCalled();
  });

  it("shows the code on-screen and keeps the lead without stamping when the email fails", async () => {
    mocks.sendBetaCodeEmail.mockResolvedValue(false);

    const res = await post("failing@test.com", "1.2.3.4");
    expect(res.status).toBe(200);
    const body = await res.json();
    expect(body.code).toMatch(/^cango-[a-z0-9]{8}$/);
    expect(body.message).toContain("Email sending failed");

    const builders = mocks.supabase.from.mock.results.map((r) => r.value);
    const updated = builders.some(
      (b) => hasMethod(b._calls, "update") && b._calls[0].table === "beta_requests"
    );
    expect(updated).toBe(false);
  });

  it("shows the code on-screen when email is not configured", async () => {
    mocks.hasEmailConfig.mockReturnValue(false);
    mocks.sendBetaCodeEmail.mockResolvedValue(false);

    const res = await post("nocfg@test.com", "1.2.3.4");
    expect(res.status).toBe(200);
    const body = await res.json();
    expect(body.code).toMatch(/^cango-[a-z0-9]{8}$/);
    expect(body.message).toContain("Email isn't configured");

    const builders = mocks.supabase.from.mock.results.map((r) => r.value);
    const updated = builders.some(
      (b) => hasMethod(b._calls, "update") && b._calls[0].table === "beta_requests"
    );
    expect(updated).toBe(false);
  });
});