import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import { ConfigProvider } from "antd";
import { store } from "./store";
import App from "./App";

function AppWrapper({ children }: { children: React.ReactNode }) {
  return (
    <ConfigProvider>
      <Provider store={store}>{children}</Provider>
    </ConfigProvider>
  );
}

describe("App", () => {
  it("renderiza a rota Home na raiz", () => {
    render(<App />, { wrapper: AppWrapper });
    expect(screen.getByText("Pokedex")).toBeInTheDocument();
  });
});
