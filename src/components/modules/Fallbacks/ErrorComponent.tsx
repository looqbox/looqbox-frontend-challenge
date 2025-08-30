import { FC } from 'react';

export interface ErrorComponentProps {
	message?: string;
}

export const ErrorComponent: FC<ErrorComponentProps> = ({ message }) => {
	return <p className='text-destructive'>Error: {message}</p>;
};

ErrorComponent.displayName = 'ErrorComponent';

export default ErrorComponent;
