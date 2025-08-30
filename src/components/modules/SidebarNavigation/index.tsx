import { Sidebar } from '@/components/ui';
import { Banana, Clover, Gamepad, Moon, Rabbit, Sparkles, Sun } from 'lucide-react';

import { FC, HTMLAttributes } from 'react';

import { useThemeToggle } from '@/hooks';
import { Link } from '@tanstack/react-router';
import { useTranslation } from 'react-i18next';
import LanguageSelector from '../LanguageSelector';
import NavButtons from './NavButtons';
import NavCollapsible from './NavCollapsible';

export interface SidebarNavigationProps extends HTMLAttributes<HTMLDivElement> {}

const SidebarNavigation: FC<SidebarNavigationProps> = ({ ...rest }) => {
	const { t } = useTranslation();
	const { isDark, toggleTheme } = useThemeToggle();

	const data = {
		company: {
			name: t('sidebar.company.name'),
			description: t('sidebar.company.description'),
			url: '/pokemons',
		},

		navPokedex: [
			{
				title: t('sidebar.links.pokedex.title'),
				url: '#',
				icon: Gamepad,
				isActive: true,
				items: [
					{
						title: t('sidebar.links.pokedex.pokemons'),
						url: '/pokemons',
						icon: Rabbit,
					},
				],
			},
		],

		navGoods: [
			{
				title: t('sidebar.links.goods.title'),
				url: '#',
				icon: Clover,
				isActive: true,
				items: [
					{
						title: t('sidebar.links.goods.berries'),
						url: '/berries',
						icon: Banana,
					},
					{
						title: t('sidebar.links.goods.items'),
						url: '/items',
						icon: Sparkles,
					},
				],
			},
		],

		navButtons: [
			{
				title: isDark ? t('sidebar.links.theme.light') : t('sidebar.links.theme.dark'),
				url: '',
				icon: isDark ? Sun : Moon,
				onClick: toggleTheme,
			},
		],
	};

	return (
		<Sidebar.Root variant='inset' {...rest}>
			<Sidebar.Header>
				<Sidebar.Menu>
					<Sidebar.MenuItem>
						<Link to={data.company.url}>
							<Sidebar.MenuButton size='lg' asChild>
								<div className='flex items-center gap-2'>
									<div className='flex aspect-square size-8 items-center justify-center  text-sidebar-primary-foreground'>
										<img
											src={isDark ? '/images/logo_dark.svg' : '/images/logo_light.svg'}
											alt={t('sidebar.company.name')}
											width={32}
											height={32}
											className='rounded'
										/>
									</div>
									<div className='grid flex-1 text-left text-sm leading-tight'>
										<span className='truncate font-semibold'>{data.company.name}</span>
										<span className='truncate text-xs'>{data.company.description}</span>
									</div>
								</div>
							</Sidebar.MenuButton>
						</Link>
					</Sidebar.MenuItem>
				</Sidebar.Menu>
			</Sidebar.Header>
			<Sidebar.Content>
				<NavCollapsible items={data.navPokedex} />
				<NavCollapsible items={data.navGoods} />
				<NavButtons items={data.navButtons} className='mt-auto' />
			</Sidebar.Content>
			<Sidebar.Footer>
				<LanguageSelector />
			</Sidebar.Footer>
		</Sidebar.Root>
	);
};

SidebarNavigation.displayName = 'SidebarNavigation';

export default SidebarNavigation;
