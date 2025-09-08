import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { createRootRoute, HeadContent, Outlet } from "@tanstack/react-router";
import { PageLayout } from "@/design-system/layouts/page.layout";
import { PageHeaderLayout } from "@/design-system/layouts/header.layout";

const RootLayout = () => (
  <PageLayout>
    <HeadContent />
    <PageHeaderLayout />
    <Outlet />

    <TanStackRouterDevtools />
  </PageLayout>
);

export const Route = createRootRoute({ component: RootLayout });
