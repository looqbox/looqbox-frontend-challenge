import { Progress, Typography } from 'antd';
import { buildStatMap, statPercent, captureRatePercent } from '../utils';

const { Title } = Typography;

type Stat = {
  base_stat: number;
  stat: { name: string };
};

type Props = {
  stats: Stat[];
  captureRate: number | null;
};

export function StatsRings({ stats, captureRate }: Props) {
  const statMap = buildStatMap(stats);

  const hp = statMap.get('hp') ?? 0;
  const atk = statMap.get('attack') ?? 0;
  const def = statMap.get('defense') ?? 0;
  const spa = statMap.get('special-attack') ?? 0;
  const spd = statMap.get('special-defense') ?? 0;
  const spe = statMap.get('speed') ?? 0;

  return (
    <>
      <div className="stats-grid">
        <StatRing label="HP" value={hp} />
        <StatRing label="Speed" value={spe} />
        <StatRing label="Attack" value={atk} />
        <StatRing label="Defense" value={def} />
        <StatRing label="Special Attack" value={spa} />
        <StatRing label="Special Defense" value={spd} />
      </div>

      <div className="capture-rate">
        <Title level={4} style={{ margin: 0 }}>
          Capture Rate
        </Title>

        <Progress
          type="circle"
          percent={captureRate == null ? 0 : captureRatePercent(captureRate)}
          size={180}
          strokeWidth={8}
          format={() => (captureRate == null ? '—' : `${captureRatePercent(captureRate)}%`)}
        />
      </div>
    </>
  );
}

type StatRingProps = {
  label: string;
  value: number;
};

function StatRing({ label, value }: StatRingProps) {
  return (
    <div className="stat-ring">
      <Progress
        type="circle"
        strokeWidth={8}
        percent={statPercent(value)}
        size={100}
        format={() => String(value)}
        className={`stat-ring--${label.toLowerCase().replace(' ', '-')}`}
      />
      <div className="stat-label">{label}</div>
    </div>
  );
}
