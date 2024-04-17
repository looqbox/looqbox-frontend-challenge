import React, { useState, useEffect } from "react";
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme } from "victory";
import { GenderData } from "../../interfaces/gender.model";

const GenderChart: React.FC<{ pokemonSpecie: any }> = ({ pokemonSpecie }) => {
  const [genderData, setGenderData] = useState<GenderData[]>([]);
  const [leftPadding, setLeftPadding] = useState<number>(40);

  useEffect(() => {
    const getGenderPercentage = () => {
      if (pokemonSpecie) {
        let malePercentage = 0;
        let femalePercentage = 0;
        let undefinedPercentage = 0;

        if (pokemonSpecie.gender_rate === -1) {
          malePercentage = 0;
          femalePercentage = 0;
          undefinedPercentage = 100;
        } else if (pokemonSpecie.gender_rate === 0) {
          malePercentage = 100;
          femalePercentage = 0;
          undefinedPercentage = -1;
        } else if (pokemonSpecie.gender_rate === 8) {
          malePercentage = 0;
          femalePercentage = 100;
          undefinedPercentage = -1;
        } else {
          malePercentage = (pokemonSpecie.gender_rate / 8) * 100;
          femalePercentage = ((8 - pokemonSpecie.gender_rate) / 8) * 100;
          undefinedPercentage = -1;
        }

        setGenderData([
          { gender: "Male", percentage: malePercentage },
          { gender: "Female", percentage: femalePercentage },
          { gender: "Undefined", percentage: undefinedPercentage },
        ]);

        const newLeftPadding = undefinedPercentage === 100 ? 60 : 40;
        setLeftPadding(newLeftPadding);
      }
    };

    getGenderPercentage();
  }, [pokemonSpecie]);

  const chartPadding = {
    top: 10,
    bottom: 20,
    left: leftPadding,
    right: 30,
  };

  return (
    <VictoryChart
      domainPadding={20}
      theme={VictoryTheme.material}
      height={130}
      width={350}
      padding={chartPadding}
    >
      <VictoryAxis
        style={{ tickLabels: { fontSize: "10px" }, ticks: { stroke: "none" } }}
      />

      <VictoryBar
        padding={10}
        cornerRadius={{ topRight: 4, topLeft: 4 }}
        horizontal
        data={genderData}
        x="gender"
        y="percentage"
        labels={({ datum }) =>
          `${datum.percentage === -1 ? "" : datum.percentage + "%"}`
        }
        style={{
          labels: {
            fontSize: 10,
          },

          data: {
            fillOpacity: 0.5,
            fill: ({ datum }) =>
              datum.gender === "Female"
                ? "#FF7596"
                : datum.gender === "Male"
                ? "#2551C3"
                : "#808080",
          },
        }}
        barWidth={10}
      />
    </VictoryChart>
  );
};

export default GenderChart;
