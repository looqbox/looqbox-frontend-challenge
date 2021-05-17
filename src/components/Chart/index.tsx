import React from 'react';
import styles from './styles.module.css';

interface IProps {
  stats: {
    base_stat: number;
    stat: {
      name: string;
    };
  }[];
  name_pokemon: string;
  color?: string;
}
const Chart: React.FC<IProps> = ({ stats, name_pokemon, color }) => {
  return (
    <div className={styles.container_chart}>
      {stats.map(item => {
        return (
          <div
            className={`${styles.chart_item}`}
            key={`${name_pokemon}_${item.stat.name}`}
          >
            <h2>
              <span>{item.base_stat}</span> | {item.stat.name}
            </h2>
            <div className={styles.chart_item_line}>
              <div
                className={styles.chart_item_line_background}
                style={{
                  width: `${(item.base_stat * 100) / 200}%`,
                  background: `var(--pokemon-${color})`,
                }}
              ></div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Chart;
