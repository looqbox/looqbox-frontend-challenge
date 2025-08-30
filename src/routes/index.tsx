import { createFileRoute, redirect } from '@tanstack/react-router';
import { z } from 'zod';

const searchSchema = z.object({
	code: z.string().optional(),
	state: z.string().optional(),
});

export const Route = createFileRoute('/')({
	validateSearch: searchSchema,
	loader: () => {
		return redirect({ to: '/pokemons' });
	},
});
