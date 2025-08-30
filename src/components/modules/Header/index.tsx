import { Breadcrumb, Separator, Sidebar } from '@/components/ui';
import { useLocation } from '@tanstack/react-router';
import { FC, Fragment, HTMLAttributes, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

export interface HeaderProps extends HTMLAttributes<HTMLDivElement> {}

const Header: FC<HeaderProps> = ({ ...rest }) => {
	const location = useLocation();
	const { t } = useTranslation();
	const allSegments = location.pathname.split('/').filter(Boolean);

	const labels = useMemo(() => {
		return allSegments.map((segment) => {
			const translationKey = `${segment}.title`;
			const translated = t(translationKey);
			return translated !== translationKey ? translated : segment;
		});
	}, [allSegments, t]);

	return (
		<header className='flex shrink-0 items-center gap-2 justify-between w-full ' {...rest}>
			<div className='flex items-center gap-4 p-4 h-full w-full '>
				<Sidebar.Trigger className='-ml-1' />
				<Separator orientation='vertical' className='h-4' />
				<Breadcrumb.Root>
					<Breadcrumb.List>
						{labels.map((label, index) => {
							const isLast = index === labels.length - 1;
							return (
								<Fragment key={`${index}-${label}`}>
									<Breadcrumb.Item className='hidden md:block'>
										<Breadcrumb.Page>{label}</Breadcrumb.Page>
									</Breadcrumb.Item>
									{!isLast && <Breadcrumb.Separator className='hidden md:block' />}
								</Fragment>
							);
						})}
					</Breadcrumb.List>
				</Breadcrumb.Root>
			</div>
		</header>
	);
};

Header.displayName = 'Header';

export default Header;
