import { describe, it, expect, vi, afterEach } from "vitest";

const { mockSend } = vi.hoisted(() => ({ mockSend: vi.fn() }));

vi.mock("resend", () => ({
  Resend: class {
    emails = { send: mockSend };
  },
}));

async function loadEmail() {
  vi.resetModules();
  return await import("@/lib/email");
}

afterEach(() => {
  vi.unstubAllEnvs();
  mockSend.mockReset();
});

describe("11 — Email Helper", () => {
  it("returns false without sending when RESEND_API_KEY is missing", async () => {
    vi.stubEnv("RESEND_API_KEY", "");
    const { sendBetaCodeEmail } = await loadEmail();

    expect(await sendBetaCodeEmail({ to: "a@b.com", code: "cango-x" })).toBe(false);
    expect(mockSend).not.toHaveBeenCalled();
  });

  it("sends an email containing the code when a key is set", async () => {
    vi.stubEnv("RESEND_API_KEY", "test-key");
    mockSend.mockResolvedValue({ data: { id: "1" }, error: null, headers: {} });
    const { sendBetaCodeEmail } = await loadEmail();

    const ok = await sendBetaCodeEmail({
      to: "a@b.com",
      code: "cango-x7k2m9",
      authUrl: "https://de.cango.app/auth",
    });
    expect(ok).toBe(true);
    expect(mockSend).toHaveBeenCalledTimes(1);

    const args = mockSend.mock.calls[0][0];
    expect(args.to).toBe("a@b.com");
    expect(args.subject).toContain("CanGo");
    expect(args.html).toContain("cango-x7k2m9");
    expect(args.html).toContain('href="https://de.cango.app/auth"');
  });

  it("returns false when Resend reports an error", async () => {
    vi.stubEnv("RESEND_API_KEY", "test-key");
    mockSend.mockResolvedValue({ data: null, error: { message: "quota exceeded" }, headers: {} });
    const { sendBetaCodeEmail } = await loadEmail();

    expect(await sendBetaCodeEmail({ to: "a@b.com", code: "cango-x" })).toBe(false);
  });
});