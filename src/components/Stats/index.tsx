import ProgressBar from "../ProgressBar";

export default function Stats({ stats }) {
  return (
    <>
      {stats.map((stat) => {
        return (
          <ProgressBar
            stat={stat.stat.name}
            completed={stat.base_stat}
            max={100}
          />
        );
      })}
    </>
  );
}
