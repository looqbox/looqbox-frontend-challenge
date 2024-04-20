import { ILayoutProps } from '../../../types';

const BlankLayout = ({ children }: ILayoutProps) => {
	return (
		<div className='min-h-screen h-full bg-body-background'>
			{children}
		</div>
	);
};

export default BlankLayout;