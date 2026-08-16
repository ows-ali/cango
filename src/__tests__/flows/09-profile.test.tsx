import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { renderWithProviders, screen, waitFor, fireEvent } from "@/__tests__/utils";
import { signOut } from "next-auth/react";
import ProfilePage from "@/app/(main)/profile/page";

describe("09 — Profile Flow", () => {
  beforeEach(() => {
    delete process.env.NEXT_PUBLIC_COFFEE_URL;
  });

  afterEach(() => {
    delete process.env.NEXT_PUBLIC_COFFEE_URL;
  });

  it("hides the Ko-fi tip jar card when NEXT_PUBLIC_COFFEE_URL is unset", () => {
    renderWithProviders(<ProfilePage />);
    expect(screen.queryByText("Enjoying CanGo?")).not.toBeInTheDocument();
    expect(screen.queryByText("Buy me a coffee")).not.toBeInTheDocument();
  });

  it("shows the Ko-fi card with the correct link when NEXT_PUBLIC_COFFEE_URL is set", () => {
    process.env.NEXT_PUBLIC_COFFEE_URL = "https://ko-fi.com/cango";

    renderWithProviders(<ProfilePage />);

    expect(screen.getByText("Enjoying CanGo?")).toBeInTheDocument();
    const link = screen.getByRole("link", { name: /buy me a coffee/i });
    expect(link).toHaveAttribute("href", "https://ko-fi.com/cango");
    expect(link).toHaveAttribute("target", "_blank");
  });

  it("enables Save Changes when the CEFR level changes", async () => {
    renderWithProviders(<ProfilePage />);

    await waitFor(() => {
      expect(screen.getByText("Your CEFR Level")).toBeInTheDocument();
    }, { timeout: 5000 });

    const saveButton = screen.getByRole("button", { name: /save changes/i });
    expect(saveButton).toBeDisabled();

    fireEvent.click(screen.getByRole("button", { name: /^b2$/i }));

    expect(screen.getByRole("button", { name: /save changes/i })).toBeEnabled();
  });

  it("opens the logout dialog and signs out on confirm", async () => {
    renderWithProviders(<ProfilePage />);

    fireEvent.click(screen.getByRole("button", { name: /logout/i }));

    await waitFor(() => {
      expect(screen.getByText("Are you sure you want to log out?")).toBeInTheDocument();
    }, { timeout: 5000 });

    const buttons = screen.getAllByRole("button", { name: /logout/i });
    fireEvent.click(buttons[buttons.length - 1]);

    expect(vi.mocked(signOut)).toHaveBeenCalledWith({ callbackUrl: "/" });
  });
});