import styles from "../../styles/Stats.module.css";

import ProgressBar from "../ProgressBar";

export default function Stats({ stats }) {
  return (
    <>
      <div className={styles.gridContainer}>
        <div className={styles.gridItem}>
          {stats.map((stat) => {
            return (
              <ProgressBar
                stat={stat.stat.name}
                completed={stat.base_stat}
                max={100}
              />
            );
          })}
        </div>
        <div className={styles.gridItem}>não sei</div>
      </div>
    </>
  );
}
