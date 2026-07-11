import { TanStackDevtools } from "@tanstack/react-devtools";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import { PokemonsListProvider } from "@/contexts/PokemonsList";

export const Route = createRootRoute({
	component: () => (
		<>
			<PokemonsListProvider>
				<Outlet />
			</PokemonsListProvider>

			<TanStackDevtools
				config={{
					position: "bottom-right",
				}}
				plugins={[
					{
						name: "Tanstack Router",
						render: <TanStackRouterDevtoolsPanel />,
					},
				]}
			/>
		</>
	),
});
