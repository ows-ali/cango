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
    screen.getByText("Create Account").click();

    await waitFor(() => {
      expect(vi.mocked(signIn)).toHaveBeenCalledWith("credentials", {
        email: "new@user.com",
        password: "password123",
        mode: "signup",
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
    screen.getByText("Create Account").click();

    await waitFor(() => {
      expect(screen.getByText("Email already in use")).toBeInTheDocument();
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
