import { Suspense } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

// import { StorageService } from '../services';
// import { INavigationItem } from '../types';

import BlankLayout from '../components/template/Blank-layout';

import { DefaultRoute, AppRoutes } from './routes';

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

	const notFound = (
		<BlankLayout>
			<h2>NÃO ENCONTRADO</h2>
		</BlankLayout>
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
					element={notFound}
				/>
			</Routes>
		</BrowserRouter>
	);
};

export default Router;
