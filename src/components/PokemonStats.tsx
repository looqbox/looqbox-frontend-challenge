import { Progress } from "antd";

interface PokemonStatsProps {
  stats: { name: string; value: number }[];
}

const PokemonStats = ({ stats }: PokemonStatsProps) => (
  <div style={{ marginTop: "1.5rem" }}>
    <h3 style={{ marginBottom: "1rem" }}>Status Base</h3>
    {stats.map((stat) => (
      <div
        key={stat.name}
        style={{
          marginBottom: "0.75rem",
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
        }}
      >
        <span
          style={{
            flex: "0 0 120px",
            textTransform: "capitalize",
            fontWeight: 500,
          }}
        >
          {stat.name}
        </span>

        <Progress
          percent={Math.min((stat.value / 255) * 100, 100)} 
          showInfo={false}
          strokeColor="#52c41a"
          trailColor="#eee"
          style={{ flex: 1 }}
        />

        <span style={{ width: 40, textAlign: "right", fontWeight: 500 }}>
          {stat.value}
        </span>
      </div>
    ))}
  </div>
);

export default PokemonStats;
