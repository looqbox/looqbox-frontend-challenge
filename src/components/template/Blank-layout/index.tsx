import { ILayoutProps } from '../../../types';

const BlankLayout = ({ children }: ILayoutProps) => {
	return (
		<div style={{paddingBottom: 64}}>
			{children}
		</div>
	);
};

export default BlankLayout;