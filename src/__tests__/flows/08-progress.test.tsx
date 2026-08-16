import { describe, it, expect } from "vitest";
import { renderWithProviders, screen, waitFor } from "@/__tests__/utils";
import { server } from "@/__tests__/setup";
import { http, HttpResponse } from "msw";
import { MOCK_USER_STATS } from "@/__tests__/fixtures";
import ProgressPage from "@/app/(main)/progress/page";

describe("08 — Progress Dashboard", () => {
  it("renders the stat cards", async () => {
    renderWithProviders(<ProgressPage />);

    await waitFor(() => {
      expect(screen.getByText("Total XP")).toBeInTheDocument();
      expect(screen.getByText("Current streak")).toBeInTheDocument();
      expect(screen.getByText("Longest streak")).toBeInTheDocument();
      expect(screen.getByText("Today's XP")).toBeInTheDocument();
    }, { timeout: 5000 });

    expect(screen.getByText("150")).toBeInTheDocument();
    expect(screen.getByText("3")).toBeInTheDocument();
    expect(screen.getByText("5")).toBeInTheDocument();
  });

  it("renders today's goal with XP progress", async () => {
    renderWithProviders(<ProgressPage />);

    await waitFor(() => {
      expect(screen.getByText("Today's goal")).toBeInTheDocument();
    }, { timeout: 5000 });

    expect(screen.getByText("20 / 50 XP")).toBeInTheDocument();
  });

  it("renders weekly activity and completed lessons count", async () => {
    renderWithProviders(<ProgressPage />);

    await waitFor(() => {
      expect(screen.getByText("Last 7 days")).toBeInTheDocument();
    }, { timeout: 5000 });

    expect(screen.getByText("2 lessons completed in total.")).toBeInTheDocument();
  });

  it("renders per-scenario progress rows", async () => {
    renderWithProviders(<ProgressPage />);

    await waitFor(() => {
      expect(screen.getByText("Transportation")).toBeInTheDocument();
    }, { timeout: 5000 });

    expect(screen.getByText("2/4 · 50%")).toBeInTheDocument();
    expect(screen.getByText("Doctor Visit")).toBeInTheDocument();
    expect(screen.getByText("0/2 · 0%")).toBeInTheDocument();
  });

  it("shows an error state when stats fail to load", async () => {
    server.use(
      http.get("*/api/user/stats", () => {
        return HttpResponse.json({ error: "boom" }, { status: 500 });
      })
    );

    renderWithProviders(<ProgressPage />);

    await waitFor(() => {
      expect(screen.getByText("Couldn't load your progress. Please try again.")).toBeInTheDocument();
    }, { timeout: 5000 });
  });

  it("shows a congratulations message when today's goal is reached", async () => {
    server.use(
      http.get("*/api/user/stats", () => {
        return HttpResponse.json({
          ...MOCK_USER_STATS,
          todayXp: 60,
        });
      })
    );

    renderWithProviders(<ProgressPage />);

    await waitFor(() => {
      expect(screen.getByText(/Goal reached — nice work!/)).toBeInTheDocument();
    }, { timeout: 5000 });
  });
});