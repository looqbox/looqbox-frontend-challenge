import * as TabsPrimitive from '@radix-ui/react-tabs';

import { cn } from '@/utils';
import type { ComponentProps } from 'react';

function TabsRoot({ className, ...props }: ComponentProps<typeof TabsPrimitive.Root>) {
	return <TabsPrimitive.Root data-slot='tabs' className={cn('flex flex-col gap-4', className)} {...props} />;
}

function TabsList({ className, ...props }: ComponentProps<typeof TabsPrimitive.List>) {
	return (
		<TabsPrimitive.List
			data-slot='tabs-list'
			className={cn('flex gap-4 border-b border-border w-full', className)}
			{...props}
		/>
	);
}

function TabsTrigger({ className, ...props }: ComponentProps<typeof TabsPrimitive.Trigger>) {
	return (
		<TabsPrimitive.Trigger
			data-slot='tabs-trigger'
			className={cn(
				'relative px-4 py-2 font-medium transition-colors border-b-2 border-transparent',
				'data-[state=active]:border-primary',
				'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
				'cursor-pointer',
				className
			)}
			{...props}
		/>
	);
}

function TabsContent({ className, ...props }: ComponentProps<typeof TabsPrimitive.Content>) {
	return <TabsPrimitive.Content data-slot='tabs-content' className={cn('flex-1 outline-none', className)} {...props} />;
}

export const Tabs = {
	Root: TabsRoot,
	List: TabsList,
	Trigger: TabsTrigger,
	Content: TabsContent,
};
