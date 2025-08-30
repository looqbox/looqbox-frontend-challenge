import { Header, SidebarNavigation } from '@/components/modules';

import { Sidebar, Toaster } from '@/components/ui';
import { createFileRoute, Outlet } from '@tanstack/react-router';
import { Suspense } from 'react';

export const Route = createFileRoute('/_authenticated')({
	component: AuthLayout,
});

export default function AuthLayout() {
	return (
		<Suspense>
			<Sidebar.Provider>
				<SidebarNavigation />
				<Sidebar.Inset className='!m-0'>
					<Toaster />
					<Header />
					<div className='flex-1 bg-border p-2 rounded-none md:p-8'>
						<Outlet />
					</div>
				</Sidebar.Inset>
			</Sidebar.Provider>
		</Suspense>
	);
}
