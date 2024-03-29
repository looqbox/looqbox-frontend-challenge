import Chart from 'chart.js/auto';
import { useRef, useEffect } from 'react';
import React from 'react';

type StatsTypes = {
    stats: {
        name: string;
        base_stat: number;
    }[];
    color: string;
};

export default function ChartComponent({stats, color}: StatsTypes) {
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  const chartInstance = useRef<Chart<"bar"> | null>(null);

  useEffect(() => {
    if (stats && chartRef.current) {
      const ctx = chartRef.current.getContext('2d');

      if (ctx) {
        chartInstance.current = new Chart(ctx, {
          type: 'bar',
          data: {
            labels: stats.map(stat => stat.name),
            datasets: [{
              label: 'Base Stats',
              data: stats.map(stat => stat.base_stat),
              backgroundColor: color,
              borderColor: color,
              borderWidth: 1
            }]
          },
          options: {
            scales: {
              y: {
                beginAtZero: true
              }
            }
          }
        });
      }
    }

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [stats, color]);

  return <canvas ref={chartRef} />;

}