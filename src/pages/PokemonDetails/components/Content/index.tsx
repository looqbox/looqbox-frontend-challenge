import { useNavigate, useParams } from "react-router-dom";
import {
  AttributesContainer,
  AttributesList,
  BaseStatsContainer,
  BodyContainer,
  ChartContainer,
  ContainerDivider,
  ContainerPokemon,
  DividerLeft,
  DividerRight,
  LineDescription,
  LineTitle,
  PokemonImg,
  ProgressBar,
  ProgressBarFill,
  StatsLine,
  StyledContentContainer,
  StyledPokeballIcon,
} from "./styles";
import { Bar } from "react-chartjs-2";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../../store";
import { useEffect } from "react";
import { fetchPokemonByNameOrId } from "../../../../store/slices/pokemon";
import { basePokemonImgUrl } from "../../../../constants/basePokemonImgUrl";
import Loading from "../../../../components/Loading";
import { capitalizeString } from "../../../../utils/capitalizeString";
import PokeballIcon from "../../../../assets/pokeball-icon-colored.svg";
import { ReactComponent as WeightIcon } from "../../../../assets/icon-weight.svg";
import { ReactComponent as RulerIcon } from "../../../../assets/icon-ruler.svg";
import PokemonTypeCard from "../../../../components/PokemonTypeCard";
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";
import { formatPokemonStatus } from "../../../../utils/formatPokemonStatus";
import { useWindowSize } from "../../../../hooks/useWindowSize";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function Content() {
  const { pokemons, status, error } = useSelector(
    (state: RootState) => state.pokemon
  );

  const dispatch = useDispatch<AppDispatch>();
  const { pokemonName } = useParams();
  const navigate = useNavigate();

  const { width } = useWindowSize();

  const pokemonImg = basePokemonImgUrl + `${pokemons[0]?.id}.png`;

  const categories: (string | undefined)[] = [];
  const chartDatasetsData: number[] = [];
  const chartBackgroundColorBar: string[] = [];
  const chartBorderColorBar: string[] = [];

  pokemons[0]?.id &&
    pokemons[0]?.stats?.forEach(({ stat, base_stat }) => {
      categories.push(formatPokemonStatus(stat.name));

      chartDatasetsData.push(base_stat);

      if (base_stat >= 50) {
        chartBackgroundColorBar.push("#1CD80E");
        chartBorderColorBar.push("#11ff00");
      } else {
        chartBackgroundColorBar.push("#FF0000");
        chartBorderColorBar.push("#f84d4d");
      }
    });

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        boxPadding: 6,
      },
    },
    scales: {
      x: {
        ticks: {
          font: {
            size: 18,
            weight: "bold",
          },
          color: "#FFF",
        },
      },
      y: {
        ticks: {
          font: {
            size: 18,
            weight: "bold",
          },
          color: "#FFF",
        },
      },
    },
  };

  const chartData = {
    labels: categories,
    datasets: [
      {
        data: chartDatasetsData,
        backgroundColor: chartBackgroundColorBar,
        borderColor: chartBorderColorBar,
        borderWidth: 6,
      },
    ],
  };

  useEffect(() => {
    if (pokemonName) {
      dispatch(fetchPokemonByNameOrId(pokemonName));
    }
  }, [dispatch, pokemonName]);

  useEffect(() => {
    if (error?.message?.includes("404")) {
      navigate("/home");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error]);

  return (
    <>
      {status === "loading" ? (
        <StyledContentContainer>
          <Loading />
        </StyledContentContainer>
      ) : (
        <BodyContainer>
          <ContainerPokemon>
            <PokemonImg src={pokemonImg} alt={pokemons[0]?.name} />
          </ContainerPokemon>

          <ContainerDivider>
            <DividerLeft />
            <StyledPokeballIcon src={PokeballIcon} alt="Pokeball icon" />
            <DividerRight />
          </ContainerDivider>

          <BaseStatsContainer>
            <StatsLine>
              <LineTitle>Nome:</LineTitle>
              <LineDescription>
                {capitalizeString(pokemons[0]?.name)}
              </LineDescription>
            </StatsLine>

            <StatsLine>
              <LineTitle>Peso:</LineTitle>
              <LineDescription>{pokemons[0]?.weight / 10} kg</LineDescription>
              <WeightIcon />
            </StatsLine>

            <StatsLine>
              <LineTitle>Altura:</LineTitle>
              <LineDescription>{pokemons[0]?.height / 10} m</LineDescription>
              <RulerIcon />
            </StatsLine>

            <StatsLine>
              <LineTitle>
                {pokemons[0]?.types?.length > 1 ? "Tipos:" : "Tipo:"}
              </LineTitle>
              {pokemons[0]?.types?.map(({ type: { name } }) => (
                <PokemonTypeCard key={name} value={name} isSelected={true} />
              ))}
            </StatsLine>
          </BaseStatsContainer>

          <ContainerDivider>
            <DividerLeft />
            <StyledPokeballIcon src={PokeballIcon} alt="Pokeball icon" />
            <DividerRight />
          </ContainerDivider>

          <AttributesContainer>
            <LineTitle style={{ marginBottom: width > 850 ? -140 : 42 }}>Atributos</LineTitle>

            {width > 850 ? (
              <ChartContainer>
                <Bar data={chartData} options={chartOptions} />
              </ChartContainer>
            ) : (
              pokemons[0]?.stats?.map(({ stat, base_stat }) => (
                <AttributesList>
                  <LineTitle style={{ width: 120 }}>
                    {formatPokemonStatus(stat.name)}
                  </LineTitle>
                  <LineDescription style={{ width: 30 }}>
                    {base_stat}
                  </LineDescription>
                  <ProgressBar>
                    <ProgressBarFill status={base_stat}></ProgressBarFill>
                  </ProgressBar>
                </AttributesList>
              ))
            )}
          </AttributesContainer>
        </BodyContainer>
      )}
    </>
  );
}
