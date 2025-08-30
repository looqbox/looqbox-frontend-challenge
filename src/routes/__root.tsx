import { ErrorComponent, NotFoundComponent } from '@/components/modules';
import { Outlet, createRootRoute } from '@tanstack/react-router';
import { Suspense } from 'react';

const NotFoundWrapper = () => <NotFoundComponent />;

export const Route = createRootRoute({
	component: Root,
	errorComponent: ErrorComponent,
	notFoundComponent: NotFoundWrapper,
});

export default function Root() {
	return (
		<Suspense>
			<Outlet />
			{/* <TanStackRouterDevtools /> */}
		</Suspense>
	);
}
