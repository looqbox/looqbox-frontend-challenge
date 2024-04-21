import { ILayoutProps } from '../../../types';

const BlankLayout = ({ children }: ILayoutProps) => {
	return (
		<div style={{paddingTop: 40, paddingBottom: 64}}>
			{children}
		</div>
	);
};

export default BlankLayout;