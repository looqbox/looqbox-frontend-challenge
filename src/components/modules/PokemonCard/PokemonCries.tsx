import { Button } from '@/components/ui';
import { Pokemon } from '@/types';
import { Pause, Play, Volume2 } from 'lucide-react';
import { FC, useCallback, useRef, useState } from 'react';

type PokemonCriesType = NonNullable<Pokemon['cries']>;

interface PokemonCriesProps {
	title: string;
	cries?: PokemonCriesType;
	playLatest: string;
	playLegacy: string;
}

const PokemonCries: FC<PokemonCriesProps> = ({ title, cries, playLatest, playLegacy, ...rest }) => {
	const [playing, setPlaying] = useState<'latest' | 'legacy' | null>(null);
	const audioRef = useRef<HTMLAudioElement | null>(null);

	const handlePlay = useCallback((url: string, type: 'latest' | 'legacy') => {
		if (audioRef.current) {
			audioRef.current.pause();
			audioRef.current.currentTime = 0;
		}
		const audio = new Audio(url);
		audioRef.current = audio;
		setPlaying(type);
		audio.play();
		audio.onended = () => setPlaying(null);
		audio.onpause = () => setPlaying(null);
	}, []);

	const handlePause = useCallback(() => {
		if (audioRef.current) {
			audioRef.current.pause();
			setPlaying(null);
		}
	}, []);

	if (!cries) return null;
	return (
		<div className='flex flex-col w-full gap-2' {...rest}>
			<span className='font-semibold text-[var(--primary)]'>{title}</span>
			<div className='flex justify-between items-center gap-4'>
				<div className='flex flex-row items-center gap-2'>
					<Button
						type='button'
						aria-label={playing === 'latest' ? `Pause ${playLatest}` : `Play ${playLatest}`}
						className={`w-8 h-8 rounded-full flex items-center justify-center border-2 transition-colors ${playing === 'latest' ? 'bg-[var(--primary)] border-[var(--primary)]' : 'bg-transparent text-[var(--primary)] border-[var(--primary)] hover:bg-[var(--primary)]/10'}`}
						onClick={() => (playing === 'latest' ? handlePause() : cries.latest && handlePlay(cries.latest, 'latest'))}
					>
						{playing === 'latest' ? <Pause size={16} /> : <Play size={16} />}
					</Button>
					<span className='text-xs text-[var(--primary)] '>{playLatest}</span>
				</div>

				<div className='flex flex-row items-center gap-2'>
					<Button
						type='button'
						aria-label={playing === 'legacy' ? `Pause ${playLegacy}` : `Play ${playLegacy}`}
						className={`w-8 h-8 rounded-full flex items-center justify-center border-2 transition-colors ${playing === 'legacy' ? 'bg-[var(--accent-foreground)] border-[var(--accent-foreground)]' : 'bg-transparent text-[var(--accent-foreground)] border-[var(--accent-foreground)] hover:bg-[var(--accent-foreground)]/10'}`}
						onClick={() => (playing === 'legacy' ? handlePause() : cries.legacy && handlePlay(cries.legacy, 'legacy'))}
					>
						{playing === 'legacy' ? <Pause size={16} /> : <Volume2 size={16} />}
					</Button>
					<span className='text-xs text-[var(--accent-foreground)]'>{playLegacy}</span>
				</div>
			</div>
		</div>
	);
};

PokemonCries.displayName = 'PokemonCries';

export default PokemonCries;
