import { Badge, Card } from '@/components/ui';
import { useGetBerry } from '@/hooks/queries';
import { FC } from 'react';

export interface BerrieCardProps {
	name: string;
	imgUrl: string;
}

const flavorColors: Record<string, { bg: string; text: string }> = {
	spicy: { bg: 'bg-chart-3', text: 'text-background' },
	dry: { bg: 'bg-chart-2', text: 'text-secondary-foreground' },
	sweet: { bg: 'bg-chart-5', text: 'text-secondary-foreground' },
	bitter: { bg: 'bg-chart-4', text: 'text-ring' },
	sour: { bg: 'bg-chart-1', text: 'text-primary-foreground' },
};

const BerrieCard: FC<BerrieCardProps> = ({ name, imgUrl }) => {
	const berryDetails = useGetBerry(name);

	return (
		<Card.Root className='relative rounded-xl shadow-lg border-4 border-primary bg-secondary-foreground w-64 p-2 hover:scale-105 transition-transform'>
			<Card.Header className='px-2 pt-2'>
				<Card.Title className='text-2xl font-extrabold text-primary capitalize'>{name.replace('-', ' ')}</Card.Title>
				<Card.Action className='absolute -top-4 -right-4 bg-background rounded-full border-4 border-primary shadow-md p-2'>
					<img src={imgUrl} alt={name} width={48} height={48} className='drop-shadow-lg' />
				</Card.Action>
			</Card.Header>
			{berryDetails.data && (
				<>
					<Card.Content className='px-2'>
						<div className='flex flex-col gap-1 '>
							<div className='flex justify-between items-center'>
								<div className='text-foreground font-bold'>Firmeza:</div>
								<div className='capitalize'>{berryDetails.data.firmness?.name}</div>
							</div>
							<div className='flex justify-between items-center'>
								<div className='text-foreground font-bold'>Tamanho:</div>
								<div className='capitalize'>{berryDetails.data.size} mm</div>
							</div>
							<div className='flex justify-between items-center'>
								<div className='text-foreground font-bold'>Suavidade:</div>
								<div className='capitalize'>{berryDetails.data.smoothness}</div>
							</div>
							<div className='flex justify-between items-center'>
								<div className='text-foreground font-bold'>Crescimento:</div>
								<div className='capitalize'>{berryDetails.data.growth_time}h</div>
							</div>
							<div className='flex justify-between items-center'>
								<div className='text-foreground font-bold'>Máx. colheita:</div>
								<div className='capitalize'>{berryDetails.data.max_harvest}</div>
							</div>
							<div className='flex justify-between items-center'>
								<div className='text-foreground font-bold'>Natural Gift:</div>
								<div className='flex gap-2'>
									<div className='font-semibold'>{berryDetails.data.natural_gift_power}</div>
									<div className='capitalize'>{berryDetails.data.natural_gift_type?.name}</div>
								</div>
							</div>
							<div className='flex justify-between items-center'>
								<div className='text-foreground font-bold'>Secagem solo:</div>
								<div className='capitalize'>{berryDetails.data.soil_dryness}</div>
							</div>
						</div>
					</Card.Content>
					<Card.Footer className='flex flex-col gap-2 px-2'>
						<span className='font-bold'>Sabores:</span>
						<div className='flex flex-wrap gap-2 justify-center'>
							{berryDetails.data.flavors?.map((flavorObj: any) => {
								const flavor = flavorObj.flavor.name;
								const color = flavorColors[flavor] || {
									bg: 'bg-[color:var(--muted)]',
									text: 'text-[color:var(--muted-foreground)]',
								};
								return (
									<Badge
										key={flavor}
										className={`flex items-center gap-2 px-2 py-1 font-bold text-xs rounded-full ${color.bg} ${color.text}`}
									>
										<span className='capitalize'>{flavor}</span>
										<span className='font-extrabold'>{flavorObj.potency}</span>
									</Badge>
								);
							})}
						</div>
					</Card.Footer>
				</>
			)}
		</Card.Root>
	);
};

BerrieCard.displayName = 'BerrieCard';

export default BerrieCard;
