import { NotFoundComponent } from '@/components/modules';
import { Separator } from '@/components/ui';

import { FC } from 'react';
import { useTranslation } from 'react-i18next';

export interface ItemsPageProps {}

const ItemsPage: FC<ItemsPageProps> = ({ ...rest }) => {
	const { t } = useTranslation();

	return (
		<div className='flex flex-col gap-4 p-4 md:p-6' {...rest}>
			<h1 className='text-3xl font-bold'>{t('items.title')}</h1>
			<div>{t('items.description')}</div>
			<Separator />

			<NotFoundComponent message={t('commons.fallbacks.notFound')} />
		</div>
	);
};

ItemsPage.displayName = 'ItemsPage';

export default ItemsPage;
