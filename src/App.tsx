import { QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { ThemeProvider } from "@/providers/themeProvider";
import { routes } from "@/routes";
import { queryClient } from "@/services/api";
import store from "@/store";
import { GlobalStyle } from "@/styles/global";

export const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <GlobalStyle />
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools initialIsOpen={false} />
          <RouterProvider router={routes} />
        </QueryClientProvider>
      </ThemeProvider>
    </Provider>
  );
};
