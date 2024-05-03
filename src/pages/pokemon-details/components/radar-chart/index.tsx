import { Radar } from 'react-chartjs-2';
import { useRef } from 'react';
import { ChartData, RadialLinearScale, PointElement, LineElement, Chart, Filler, Tooltip, Legend } from 'chart.js';

import { IBaseStats } from '../../../../types/models';
import { hexToRGBA } from '../../../../util/helpers';

import './styles.css';

interface IProps {
    stats: IBaseStats[],
    pokemonColor: string
}

function RadarChart(props: IProps) {
	const radarRef = useRef(null);
	const { stats, pokemonColor } = props;

	const data: ChartData<'radar'> = {
		labels: stats.map((stat: IBaseStats) => {return stat.stat.name;}),
		datasets: [{
			label: 'Pokemon Stats',
			data: stats.map((stat: IBaseStats) => {return Math.floor((stat.base_stat / 255) * 100);}),
			fill: true,
			backgroundColor: hexToRGBA(pokemonColor, 0.2),
			borderColor: pokemonColor,
			pointBackgroundColor: pokemonColor,
			pointBorderColor: '#fff',
			pointHoverBackgroundColor: '#fff',
			pointHoverBorderColor: pokemonColor
		}]
	};

	Chart.register(
		RadialLinearScale,
		PointElement,
		LineElement,
		Filler,
		Tooltip,
		Legend
	);
    
	return (
		<div className="radar-chart">
			<Radar
				ref={radarRef}
				data={data}
			/>
		</div>
	);
}

export default RadarChart;
