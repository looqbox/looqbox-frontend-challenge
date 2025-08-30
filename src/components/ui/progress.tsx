import * as ProgressPrimitive from '@radix-ui/react-progress';

import { cn } from '@/utils';
import { ComponentProps } from 'react';

function Progress({ className, value, ...props }: ComponentProps<typeof ProgressPrimitive.Root>) {
	return (
		<ProgressPrimitive.Root
			data-slot='progress'
			className={cn('bg-card-foreground/20 relative h-2 w-full overflow-hidden rounded-full', className)}
			{...props}
		>
			<ProgressPrimitive.Indicator
				data-slot='progress-indicator'
				className='bg-card-foreground h-full w-full flex-1 transition-all'
				style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
			/>
		</ProgressPrimitive.Root>
	);
}

export { Progress };
