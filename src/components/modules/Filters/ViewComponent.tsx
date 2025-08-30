import { Button } from '@/components/ui';
import { FC } from 'react';

export interface ViewComponentOption {
	value: string;
	label: string;
}

export interface ViewComponentProps {
	value: string;
	options: ViewComponentOption[];
	onChange: (value: string) => void;
}

const ViewComponent: FC<ViewComponentProps> = ({ value, options, onChange }) => {
	const otherOption = options.find((opt) => opt.value !== value);
	if (!otherOption) return null;
	return (
		<div className='flex items-center '>
			<Button
				type='button'
				variant='outline'
				size='default'
				className='min-w-40'
				onClick={() => onChange(otherOption.value)}
			>
				{otherOption.label}
			</Button>
		</div>
	);
};

ViewComponent.displayName = 'ViewComponent';

export default ViewComponent;
