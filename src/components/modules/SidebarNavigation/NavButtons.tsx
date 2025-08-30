import { Sidebar } from '@/components/ui';
import { Link } from '@tanstack/react-router';
import { type LucideIcon } from 'lucide-react';
import { FC, HTMLAttributes } from 'react';

export interface NabButtonsProps extends HTMLAttributes<HTMLDivElement> {
	items: {
		title: string;
		url: string;
		icon: LucideIcon;
		onClick?: () => void;
	}[];
}

const NabButtons: FC<NabButtonsProps> = ({ items, ...rest }) => {
	const isExternal = (url: string) => /^https?:\/\//.test(url);

	return (
		<Sidebar.Group {...rest}>
			<Sidebar.GroupContent>
				<Sidebar.Menu>
					{items.map((item) => (
						<Sidebar.MenuItem key={item.title}>
							<Sidebar.MenuButton asChild size='sm' onClick={item.onClick}>
								<Link to={item.url} {...(isExternal(item.url) && { target: '_blank', rel: 'noopener noreferrer' })}>
									<item.icon />
									<span>{item.title}</span>
								</Link>
							</Sidebar.MenuButton>
						</Sidebar.MenuItem>
					))}
				</Sidebar.Menu>
			</Sidebar.GroupContent>
		</Sidebar.Group>
	);
};

NabButtons.displayName = 'NabButtons';

export default NabButtons;
