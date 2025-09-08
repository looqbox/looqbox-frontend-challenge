import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider, createRouter } from "@tanstack/react-router";

import { ThemeProviderLayout } from "./design-system/layouts/theme-provider.layout";
import { routeTree } from "./route-tree.gen";
import { ThemeProvider } from "./core/contexts/ThemeContext";

// Create a new router instance
const router = createRouter({ routeTree });

// Register the router instance for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

const queryClient = new QueryClient();
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>
          <ThemeProviderLayout>
            <RouterProvider router={router} />
          </ThemeProviderLayout>
        </ThemeProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
