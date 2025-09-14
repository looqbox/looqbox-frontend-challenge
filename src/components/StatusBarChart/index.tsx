// src/components/StatsLines/index.tsxK
import { Progress } from 'antd';
import * as S from './styles';

type Stat = { name: string; value: number; color: string };
type Props = {
  stats: Stat[];
  max?: number;
};

function StatsLines({ stats, max = 125 }: Props) {
  return (
    <S.Container>
      {stats.map((s) => {
        const pct = Math.max(0, Math.min(100, Math.round((s.value / max) * 100)));

        return (
          <S.Row key={s.name}>
            <S.Label>
              {s.name.toUpperCase()}: <S.Value>{s.value}</S.Value>
            </S.Label>

            <S.Bar>
              <Progress
                percent={pct}
                showInfo={false}
                strokeColor={s.color}
                trailColor="rgba(255,255,255,0.12)"
                strokeLinecap="round"
                size={{ height: 20 }}
              />
            </S.Bar>
          </S.Row>
        );
      })}
    </S.Container>
  );
}

export default StatsLines;
