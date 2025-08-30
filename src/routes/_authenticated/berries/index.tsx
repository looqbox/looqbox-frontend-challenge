import { BerriesPage } from '@/pages';
import { createFileRoute } from '@tanstack/react-router';
import { Fragment } from 'react';

export const Route = createFileRoute('/_authenticated/berries/')({
	component: BerriesRoute,
});

function BerriesRoute({ ...rest }) {
	return (
		<Fragment {...rest}>
			<div className='container max-w-[1280px] mx-auto w-full flex flex-col gap-6 bg-background md:rounded-lg rounded-none shadow-lg '>
				<BerriesPage />
			</div>
		</Fragment>
	);
}
