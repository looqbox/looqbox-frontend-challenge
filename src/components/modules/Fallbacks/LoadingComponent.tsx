import { FC } from 'react';

export interface LoadingComponentProps {
	message?: string;
}

export const LoadingComponent: FC<LoadingComponentProps> = ({ message }) => {
	return <p>{message}</p>;
};

LoadingComponent.displayName = 'LoadingComponent';

export default LoadingComponent;
