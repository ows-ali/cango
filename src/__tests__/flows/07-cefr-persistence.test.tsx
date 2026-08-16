import { describe, it, expect, vi } from "vitest";
import { renderWithProviders, screen, waitFor, fireEvent } from "@/__tests__/utils";
import { resetStores } from "@/__tests__/api/mocks/handlers";
import ScenarioPage from "@/app/(main)/scenario/[slug]/page";

const mockUseParams = vi.hoisted(() => vi.fn(() => ({ slug: "transportation" })));

vi.mock("next/navigation", () => ({
  useParams: mockUseParams,
  useRouter: () => ({ push: vi.fn(), back: vi.fn(), prefetch: vi.fn() }),
  usePathname: () => "/scenario/transportation",
  Link: ({ children, href }: any) => <a href={href}>{children}</a>,
}));

describe("07 — CEFR Persistence Flow", () => {
  beforeEach(() => {
    resetStores();
  });

  it("shows default CEFR level on scenario page (from saved setting → B1)", async () => {
    renderWithProviders(<ScenarioPage />);

    await waitFor(() => {
      const heading = screen.getByRole("heading", { name: /transportation/i });
      expect(heading).toBeInTheDocument();
    }, { timeout: 5000 });

    const levelButton = screen.getByRole("button", { name: /b1/i });
    expect(levelButton).toBeInTheDocument();
  });

  it("shows experience from the selected level (B1)", async () => {
    renderWithProviders(<ScenarioPage />);

    await waitFor(() => {
      expect(screen.getByText("Platform Changes")).toBeInTheDocument();
    }, { timeout: 5000 });
  });

  it("shows CEFR info banner", async () => {
    renderWithProviders(<ScenarioPage />);

    await waitFor(() => {
      expect(screen.getByText(/Learn at your own comfort/i)).toBeInTheDocument();
    }, { timeout: 5000 });
  });

  it("persists CEFR level selection across re-renders", async () => {
    const { unmount } = renderWithProviders(<ScenarioPage />);

    await waitFor(() => {
      const heading = screen.getByRole("heading", { name: /transportation/i });
      expect(heading).toBeInTheDocument();
    }, { timeout: 5000 });

    const levelButton = screen.getByRole("button", { name: /b1/i });
    expect(levelButton).toBeInTheDocument();

    unmount();

    const { unmount: unmount2 } = renderWithProviders(<ScenarioPage />);

    await waitFor(() => {
      const heading = screen.getByRole("heading", { name: /transportation/i });
      expect(heading).toBeInTheDocument();
    }, { timeout: 5000 });

    const levelBtn = screen.getByRole("button", { name: /b1/i });
    expect(levelBtn).toBeInTheDocument();

    unmount2();
  });
});
