import { Rose } from '@ant-design/plots';
import { useIsMobile } from '../../hooks/useIsMobile';
import * as S from './styles';
type Stat = { name: string; value: number; color?: string };

type Props = {
  stats: Stat[];
};

function StatsRoseChart({ stats }: Props) {
  const isMobile = useIsMobile();

  const config = {
    data: stats,
    xField: 'name',
    yField: 'value',
    colorField: 'name',

    innerRadius: 0.1,
    scale: {
      x: { padding: 0 },
      y: { domain: isMobile ? [0, 300] : [0, 150] },
    },
    axis: false,
    legend: false,
    label: {
      text: (d: Stat) => `${d.name.toUpperCase()}: ${d.value}`,
      position: 'outside',
      style: { fill: '#FFF', fontSize: isMobile ? 9 : 12, fontWeight: 600 },
    },
    style: { fillOpacity: 0.8 },
  };

  return (
    <S.Container>
      <Rose {...config} />
    </S.Container>
  );
}

export default StatsRoseChart;
