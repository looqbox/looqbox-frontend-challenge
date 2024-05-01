import { ILayoutProps } from '../../../types';
import { Github, Linkedin } from '../../../util/icons';

const BlankLayout = ({ children }: ILayoutProps) => {
	return (
		<div>
			{children}
			<div className="social-media-container">
				<aside>
					<a href="https://www.linkedin.com/in/ricardomfranca/" target="_blank">
						<Linkedin/>
					</a>
					<a href="https://github.com/RicardoMFranca" target="_blank">
						<Github/>
					</a>
				</aside>
			</div>
		</div>
	);
};

export default BlankLayout;