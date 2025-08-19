import { ConfigProvider, theme as antdTheme } from "antd";
import "antd/dist/reset.css";
import { Provider } from "react-redux";

import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../shared/styles/GlobalStyles";
import { theme } from "../shared/styles/theme";
import { store } from "../store";

export function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <ConfigProvider
          theme={{
            algorithm: antdTheme.darkAlgorithm,
            token: {
              colorPrimary: theme.colors.primary,
              colorBgBase: theme.colors.bg,
              colorText: theme.colors.text,
              borderRadius: 16,
              fontFamily:
                "Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif",
            },
            components: {
              Card: { paddingLG: 20 },
              Input: { controlHeight: 44, borderRadius: 999 },
              Button: { borderRadius: 999 },
            },
          }}
        >
          <GlobalStyles />
          {children}
        </ConfigProvider>
      </ThemeProvider>
    </Provider>
  );
}
