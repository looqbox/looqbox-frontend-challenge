import { lazy } from 'react';
import { INavigationItem } from '../../types';
import BlankLayout from '../../components/template/Blank-layout';

// ** Default Route
const DefaultRoute = '/home';

const Routes: INavigationItem[] = [
	{
		path: '/home',
		component: lazy(() => import('../../pages/home')),
		layout: BlankLayout
	},
	{
		path: '/pokemon/:name',
		component: lazy(() => import('../../pages/pokemon-details')),
		layout: BlankLayout
	}
];

const AppRoutes = [ 
	...Routes
];

export { DefaultRoute, AppRoutes };
