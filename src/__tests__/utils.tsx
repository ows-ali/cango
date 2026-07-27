import { render, RenderOptions } from "@testing-library/react";
import { ReactElement } from "react";
import { SessionProvider } from "next-auth/react";
import { StatsProvider } from "@/lib/stats-context";

function AllProviders({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <StatsProvider>{children}</StatsProvider>
    </SessionProvider>
  );
}

export function renderWithProviders(
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) {
  return render(ui, { wrapper: AllProviders, ...options });
}

export { render };
export * from "@testing-library/react";
