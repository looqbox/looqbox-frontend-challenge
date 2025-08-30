import { FC } from 'react';

export interface NotFoundComponentProps {
	message?: string;
}

export const NotFoundComponent: FC<NotFoundComponentProps> = ({ message }) => {
	return (
		<div className='flex flex-col gap-10 justify-center items-center p-4'>
			<div className='flex flex-col gap-2'>
				<div className='text-center text-9xl px-10 font-semibold text-foreground'>404</div>
				<div className='text-center text-4xl px-10 font-semibold text-foreground'>NOT FOUND</div>
			</div>
			<img src={'/images/notFound.svg'} alt={message} width={500} height={500} />
			<div className='text-center text-2xl px-10 font-semibold text-foreground'>{message}</div>
		</div>
	);
};

NotFoundComponent.displayName = 'NotFoundComponent';

export default NotFoundComponent;
