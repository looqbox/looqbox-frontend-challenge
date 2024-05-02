import { Suspense } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import { DefaultRoute, AppRoutes } from './routes';
import NotFoundLayout from '../components/template/not-found';

const Router = () => {
	const FinalRoute = (props: { route: any }) => {
		const route = props.route;

		return <route.component {...props}/>;
	};

	const ResolveRoutes = () => (
		AppRoutes.map(route => (
			<Route
				key={route.path}
				path={route.path}
				element={
					<route.layout>
						<Suspense fallback={null}>
							<FinalRoute route={route} />
						</Suspense>
					</route.layout>
				}
			/>
		))
	);

	return (
		<BrowserRouter>
			<Routes>
				<Route
					path='/'
					element={
						<Navigate to={DefaultRoute} replace /> 
					}
				/>
				{ResolveRoutes()}
				<Route 
					path='*' 
					element={<NotFoundLayout/>}
				/>
			</Routes>
		</BrowserRouter>
	);
};

export default Router;
