import { BerrieCard, PaginationAdvanced } from '@/components/modules';
import { Separator } from '@/components/ui';
import { usePagination, useProcessedData } from '@/hooks';
import { useListBerries } from '@/hooks/queries';

import { FC } from 'react';
import { useTranslation } from 'react-i18next';

export interface BerriesPageProps {}

const BerriesPage: FC<BerriesPageProps> = ({ ...rest }) => {
	const { t } = useTranslation();
	const berries = useListBerries();

	const processed = useProcessedData({
		data: berries.data?.results || [],
	});

	const { page, totalPages, paginatedData, handlePageChange } = usePagination(processed.data, 12);

	return (
		<div className='flex flex-col gap-4 p-4 md:p-6' {...rest}>
			<h1 className='text-3xl font-bold'>{t('berries.title')}</h1>
			<div>{t('berries.description')}</div>
			<Separator />

			{berries.isLoading && <div>{t('commons.states.loading')}</div>}
			{berries.isError && <div>{t('commons.states.error')}</div>}

			<PaginationAdvanced page={page} totalPages={totalPages} onPageChange={handlePageChange} />

			<div className='flex flex-wrap py-6 gap-6 justify-center'>
				{paginatedData.map((berry: any) => {
					const name = berry.name;
					const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/${name}-berry.png`;
					return <BerrieCard key={name} name={name} imgUrl={imgUrl} />;
				})}
			</div>

			<PaginationAdvanced page={page} totalPages={totalPages} onPageChange={handlePageChange} />
		</div>
	);
};

BerriesPage.displayName = 'BerriesPage';

export default BerriesPage;
