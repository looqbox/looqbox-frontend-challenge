import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";

import { ThemeProvider } from "@/providers/themeProvider";
import { routes } from "@/routes";
import store from "@/store";
import { GlobalStyle } from "@/styles/global";

export const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <GlobalStyle />
        <RouterProvider router={routes} />
      </ThemeProvider>
    </Provider>
  );
};
