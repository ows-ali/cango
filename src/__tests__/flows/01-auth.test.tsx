import { describe, it, expect, vi, beforeEach } from "vitest";
import { renderWithProviders, screen, waitFor } from "@/__tests__/utils";
import { useSession, signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import AuthPage from "@/app/auth/page";

describe("01 — Auth Flow", () => {
  const mockPush = vi.fn();

  beforeEach(() => {
    mockPush.mockReset();
    vi.mocked(useRouter).mockReturnValue({
      push: mockPush,
      back: vi.fn(),
      forward: vi.fn(),
      refresh: vi.fn(),
      replace: vi.fn(),
      prefetch: vi.fn(),
    } as any);
    vi.mocked(useSession).mockReturnValue({
      data: null,
      status: "unauthenticated",
      update: vi.fn(),
    } as any);
    vi.mocked(signIn).mockReset();
    vi.mocked(signIn).mockResolvedValue({ error: undefined, ok: true, url: null } as any);
  });

  it("renders sign-up form by default", () => {
    renderWithProviders(<AuthPage />);
    expect(screen.getByText("Create your account")).toBeInTheDocument();
    expect(screen.getByText("Create Account")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("name@example.com")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Create a password")).toBeInTheDocument();
  });

  it("switches to login mode when clicking Log In", async () => {
    renderWithProviders(<AuthPage />);
    screen.getByText("Log In").click();

    await waitFor(() => {
      expect(screen.getByText("Welcome back")).toBeInTheDocument();
    });
    expect(screen.getByText("Log In")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Enter your password")).toBeInTheDocument();
  });

  it("calls signIn with mode=signup on signup form submit", async () => {
    renderWithProviders(<AuthPage />);

    const { fireEvent } = await import("@testing-library/react");
    fireEvent.change(screen.getByPlaceholderText("name@example.com"), {
      target: { value: "new@user.com" },
    });
    fireEvent.change(screen.getByPlaceholderText("Create a password"), {
      target: { value: "password123" },
    });
    fireEvent.change(screen.getByPlaceholderText("Enter your access code"), {
      target: { value: "test-code" },
    });
    screen.getByText("Create Account").click();

    await waitFor(() => {
      expect(vi.mocked(signIn)).toHaveBeenCalledWith("credentials", {
        email: "new@user.com",
        password: "password123",
        mode: "signup",
        code: "test-code",
        redirect: false,
      });
    });
  });

  it("calls signIn with mode=login and navigates to /home on login", async () => {
    renderWithProviders(<AuthPage />);

    screen.getByText("Log In").click();
    await waitFor(() => expect(screen.getByText("Welcome back")).toBeInTheDocument());

    const { fireEvent } = await import("@testing-library/react");
    fireEvent.change(screen.getByPlaceholderText("name@example.com"), {
      target: { value: "test@example.com" },
    });
    fireEvent.change(screen.getByPlaceholderText("Enter your password"), {
      target: { value: "mypassword" },
    });
    screen.getByText("Log In").click();

    await waitFor(() => {
      expect(vi.mocked(signIn)).toHaveBeenCalledWith("credentials", {
        email: "test@example.com",
        password: "mypassword",
        mode: "login",
        redirect: false,
      });
    });

    expect(mockPush).toHaveBeenCalledWith("/home");
  });

  it("shows error for duplicate email on signup", async () => {
    vi.mocked(signIn).mockResolvedValue({
      error: "Email already in use",
      ok: false,
      url: null,
    } as any);

    renderWithProviders(<AuthPage />);

    const { fireEvent } = await import("@testing-library/react");
    fireEvent.change(screen.getByPlaceholderText("name@example.com"), {
      target: { value: "existing@test.com" },
    });
    fireEvent.change(screen.getByPlaceholderText("Create a password"), {
      target: { value: "password123" },
    });
    fireEvent.change(screen.getByPlaceholderText("Enter your access code"), {
      target: { value: "test-code" },
    });
    screen.getByText("Create Account").click();

    await waitFor(() => {
      expect(screen.getByText("Email already in use")).toBeInTheDocument();
    });
  });

  it("blocks signup with an invalid access code", async () => {
    renderWithProviders(<AuthPage />);

    const { fireEvent } = await import("@testing-library/react");
    fireEvent.change(screen.getByPlaceholderText("name@example.com"), {
      target: { value: "new@user.com" },
    });
    fireEvent.change(screen.getByPlaceholderText("Create a password"), {
      target: { value: "password123" },
    });
    fireEvent.change(screen.getByPlaceholderText("Enter your access code"), {
      target: { value: "wrong-code" },
    });
    screen.getByText("Create Account").click();

    await waitFor(() => {
      expect(screen.getByText("Invalid access code")).toBeInTheDocument();
    });
    expect(vi.mocked(signIn)).not.toHaveBeenCalled();
  });

  it("blocks signup when the access code field is empty", async () => {
    renderWithProviders(<AuthPage />);

    const { fireEvent } = await import("@testing-library/react");
    fireEvent.change(screen.getByPlaceholderText("name@example.com"), {
      target: { value: "new@user.com" },
    });
    fireEvent.change(screen.getByPlaceholderText("Create a password"), {
      target: { value: "password123" },
    });
    fireEvent.change(screen.getByPlaceholderText("Enter your access code"), {
      target: { value: "   " },
    });
    screen.getByText("Create Account").click();

    await waitFor(() => {
      expect(screen.getByText("Enter your access code — it's free during beta.")).toBeInTheDocument();
    });
    expect(vi.mocked(signIn)).not.toHaveBeenCalled();
  });

  it("captures email via the no-code request flow", async () => {
    renderWithProviders(<AuthPage />);

    screen.getByText("Don't have a code yet?").click();
    await waitFor(() => {
      expect(screen.getByText("Drop your email and we'll get you an access code.")).toBeInTheDocument();
    });

    const { fireEvent } = await import("@testing-library/react");
    fireEvent.change(screen.getByPlaceholderText("you@example.com"), {
      target: { value: "lead@test.com" },
    });
    screen.getByText("Request access code").click();

    await waitFor(() => {
      expect(screen.getByText(/Email isn't configured yet/)).toBeInTheDocument();
      expect(screen.getByText("cango-testcode")).toBeInTheDocument();
    });
  });

  it("shows error for invalid credentials on login", async () => {
    vi.mocked(signIn).mockResolvedValue({
      error: "Invalid email or password",
      ok: false,
      url: null,
    } as any);

    renderWithProviders(<AuthPage />);

    screen.getByText("Log In").click();
    await waitFor(() => expect(screen.getByText("Welcome back")).toBeInTheDocument());

    const { fireEvent } = await import("@testing-library/react");
    fireEvent.change(screen.getByPlaceholderText("name@example.com"), {
      target: { value: "wrong@test.com" },
    });
    fireEvent.change(screen.getByPlaceholderText("Enter your password"), {
      target: { value: "wrongpass" },
    });
    screen.getByText("Log In").click();

    await waitFor(() => {
      expect(screen.getByText("Invalid email or password")).toBeInTheDocument();
    });
  });
});
