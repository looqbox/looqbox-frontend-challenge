import { Select } from '@/components/ui';
import { FC } from 'react';

export interface FilterOption {
	value: string;
	label: string;
}

export interface FilterComponentProps {
	value: string;
	options: FilterOption[];
	onFilterChange: (value: string) => void;
	className?: string;
}

const FilterComponent: FC<FilterComponentProps> = ({ value, options, onFilterChange, className }) => {
	return (
		<Select.Root value={value} onValueChange={onFilterChange}>
			<Select.Trigger className={`min-w-[160px] ${className || ''}`}>
				<Select.Value />
			</Select.Trigger>
			<Select.Content>
				<Select.Group>
					{options.map((option) => (
						<Select.Item key={option.value} value={option.value}>
							{option.label}
						</Select.Item>
					))}
				</Select.Group>
			</Select.Content>
		</Select.Root>
	);
};

FilterComponent.displayName = 'FilterComponent';

export default FilterComponent;
