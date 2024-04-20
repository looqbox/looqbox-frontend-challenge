import { ReactNode } from 'react';

export interface ILayoutProps {
	children: ReactNode,
	routerProps?: any,
	currentActiveItem?: string
}

export interface INavigationItem {
	path: string,
	kind?: 'main',
	title?: string,
	component: React.LazyExoticComponent<any>,
	layout: ({ children }: ILayoutProps)=> JSX.Element
}

export interface IAPIOptions {
	successMessage?: string;
	errorMessage?: string;
	label: string;
	showSuccessFeedback?: boolean;
	showErrorFeedback?: boolean;
	autoClose?: number | false;
	endpointIdentificator?: string | number;
}

export type TAxiosResponse<T> = {
	message?: string;
} & T;