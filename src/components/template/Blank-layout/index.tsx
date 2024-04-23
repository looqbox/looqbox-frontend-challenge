import { ILayoutProps } from '../../../types';

const BlankLayout = ({ children }: ILayoutProps) => {
	return (
		<div>
			{children}
		</div>
	);
};

export default BlankLayout;