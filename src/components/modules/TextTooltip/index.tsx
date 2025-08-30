import { Tooltip } from '@/components/ui';
import { FC, ReactNode } from 'react';

export interface TextTooltipProps {
	content: ReactNode;
	children: ReactNode;
	side?: 'top' | 'right' | 'bottom' | 'left';
	className?: string;
}

const TextTooltip: FC<TextTooltipProps> = ({ content, children, side = 'bottom', className }) => {
	return (
		<Tooltip.Provider>
			<Tooltip.Root>
				<Tooltip.Trigger asChild>{children}</Tooltip.Trigger>
				<Tooltip.Content side={side} className={className}>
					{content}
				</Tooltip.Content>
			</Tooltip.Root>
		</Tooltip.Provider>
	);
};

TextTooltip.displayName = 'TextTooltip';

export default TextTooltip;
