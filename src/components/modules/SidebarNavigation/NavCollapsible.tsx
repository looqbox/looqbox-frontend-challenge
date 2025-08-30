import { Collapsible, Sidebar } from '@/components/ui';
import { Link } from '@tanstack/react-router';
import { ChevronRight, type LucideIcon } from 'lucide-react';
import { FC, HTMLAttributes, useState } from 'react';

export interface NavCollapsibleProps extends HTMLAttributes<HTMLDivElement> {
	title?: string;
	items: {
		title: string;
		url: string;
		icon: LucideIcon;
		iconRotate?: number;
		isActive?: boolean;
		items?: {
			title: string;
			url: string;
			icon?: LucideIcon;
			iconRotate?: number;
		}[];
	}[];
}

const NavCollapsible: FC<NavCollapsibleProps> = ({ title, items, ...rest }) => {
	const [openStates, setOpenStates] = useState<boolean[]>(() => items.map(() => true));

	const toggle = (i: number) => setOpenStates((s) => s.map((open, idx) => (idx === i ? !open : open)));

	return (
		<Sidebar.Group {...rest}>
			{title && <Sidebar.GroupLabel>{title}</Sidebar.GroupLabel>}

			<Sidebar.Menu>
				{items.map((item, i) => {
					const open = openStates[i];
					return (
						<Collapsible.Root key={item.title} open={open} onOpenChange={() => toggle(i)}>
							<Sidebar.MenuItem>
								<Sidebar.MenuButton
									tooltip={item.title}
									onClick={() => toggle(i)}
									className='flex items-center justify-between'
								>
									<div className='flex items-center space-x-2 flex-1 min-w-0'>
										<item.icon />

										<span className='truncate'>{item.title}</span>
									</div>
									<ChevronRight className={`transition-transform duration-200 ${open ? 'rotate-90' : ''}`} />
								</Sidebar.MenuButton>

								<Collapsible.Content>
									<Sidebar.MenuSub>
										{item.items?.map((sub) => (
											<Sidebar.MenuSubItem key={sub.title}>
												<Sidebar.MenuSubButton asChild>
													<div className='flex flex-row gap-2'>
														{sub.icon && <sub.icon />}
														<Link to={sub.url}>
															<span>{sub.title}</span>
														</Link>
													</div>
												</Sidebar.MenuSubButton>
											</Sidebar.MenuSubItem>
										))}
									</Sidebar.MenuSub>
								</Collapsible.Content>
							</Sidebar.MenuItem>
						</Collapsible.Root>
					);
				})}
			</Sidebar.Menu>
		</Sidebar.Group>
	);
};

NavCollapsible.displayName = 'NavCollapsible';

export default NavCollapsible;
