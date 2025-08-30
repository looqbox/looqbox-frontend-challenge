import { Progress } from '@/components/ui';
import { PokemonStat } from '@/types';
import { FC } from 'react';

interface PokemonStatsProps {
	stats: PokemonStat[];
}

const PokemonStats: FC<PokemonStatsProps> = ({ stats, ...rest }) => {
	if (!Array.isArray(stats)) return null;

	return (
		<div className='flex flex-col gap-2' {...rest}>
			<span className='font-semibold text-[var(--primary)]'>Stats</span>
			<div className='flex flex-col gap-1'>
				{stats.map((s) => (
					<div key={s.stat.name} className='flex items-center gap-4'>
						<div className='text-sm capitalize text-[var(--muted-foreground)]'>{s.stat.name}</div>
						<div className='flex-1'>
							<Progress value={Math.min(s.base_stat, 150) / 1.5} max={100} />
						</div>
						<div className='text-right font-mono w-5 text-xs text-[var(--muted-foreground)]'>{s.base_stat}</div>
					</div>
				))}
			</div>
		</div>
	);
};

PokemonStats.displayName = 'PokemonStats';

export default PokemonStats;
