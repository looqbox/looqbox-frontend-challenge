import { Box, Img, Progress, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { setPokemon } from "../../store/pokemonSlice";
import { useParams } from "react-router-dom";
import axios from "axios";
import Modal from "../../components/Modal/Modal";
import { Header } from "../../components/Header/Header";
import { BASE_URL } from "../../components/constants/BASE_URL";
import { typePokemon } from "../../components/constants/types";
import pokebolaDetails from "../../assets/pokebolaDetails.png";
import {
  MovesTypes,
  PokemonDetailPageStyle,
  CardDetails,
} from "./PokemonDetailsStyle";

export function PokemonDetailPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { pokemon, isModalOpen } = useSelector(
    (state: RootState) => state.pokemon
  );
  const [typesLocal, setTypesLocal] = useState<
    (typeof typePokemon)[keyof typeof typePokemon][]
  >([]);

  const fetchPokemonDetails = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/${id}`);
      const primaryType = response.data.types[0].type
        .name as keyof typeof typePokemon;
      const secondaryType = response.data.types[1]?.type
        .name as keyof typeof typePokemon;
      setTypesLocal([typePokemon[primaryType], typePokemon[secondaryType]]);
      dispatch(setPokemon(response.data));
    } catch (error: any) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    fetchPokemonDetails();
  }, [id]);

  const calculateTotal = () => {
    return (
      pokemon?.stats?.reduce(
        (acc: number, stat: any) => acc + stat.base_stat,
        0
      ) || 0
    );
  };

  const progressBar = (value: number) => {
    if (value < 50) {
      return "orange";
    } else if (value >= 50 && value < 70) {
      return "yellow";
    } else if (value >= 70) {
      return "green";
    }
  };

  return (
    <>
      {isModalOpen && <Modal />}
      <Header />
      <PokemonDetailPageStyle>
        <CardDetails
          style={{
            backgroundImage: `url(${pokebolaDetails})`,
            backgroundRepeat: `no-repeat`,
            backgroundPositionX: "620px",
            backgroundColor: `${typesLocal[0] && typesLocal[0].color}`,
          }}
        >
          <div className="details-columm">
            <Box
              w="282px"
              h="282px"
              bg="white"
              borderRadius="8px"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <img
                id="img-pokemon"
                src={
                  pokemon?.sprites?.versions["generation-v"]["black-white"]
                    .animated.front_default
                }
                alt="pokemon-front"
              />
            </Box>
            <Box
              w="282px"
              h="282px"
              bg="white"
              borderRadius="8px"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <img
                id="img-pokemon"
                src={
                  pokemon?.sprites?.versions["generation-v"]["black-white"]
                    .animated.back_default
                }
                alt="pokemon-back"
              />
            </Box>
          </div>

          <div className="details-columm">
            <Box
              w="343px"
              h="613px"
              bg="white"
              borderRadius="12px"
              padding="24px"
            >
              <Text color="black" fontSize="24px">
                Base Stats
              </Text>
              <table>
                <thead>
                  <tr>
                    <td className="stat-title">HP</td>
                    <td className="stat-number">
                      {pokemon?.stats[0]?.base_stat}
                    </td>
                    <td className="stat-progress">
                      <Progress
                        colorScheme={progressBar(pokemon?.stats[0]?.base_stat)}
                        size="sm"
                        value={pokemon?.stats[0]?.base_stat}
                        borderRadius="10px"
                        bg="transparent"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="stat-title">Attack</td>
                    <td className="stat-number">
                      {pokemon?.stats[1]?.base_stat}
                    </td>
                    <td className="stat-progress">
                      <Progress
                        colorScheme={progressBar(pokemon?.stats[1]?.base_stat)}
                        size="sm"
                        value={pokemon?.stats[1]?.base_stat}
                        borderRadius="10px"
                        bg="transparent"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="stat-title">Defense</td>
                    <td className="stat-number">
                      {pokemon?.stats[2]?.base_stat}
                    </td>
                    <td className="stat-progress">
                      <Progress
                        colorScheme={progressBar(pokemon?.stats[2]?.base_stat)}
                        size="sm"
                        value={pokemon?.stats[2]?.base_stat}
                        borderRadius="10px"
                        bg="transparent"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="stat-title">Sp. Atk</td>
                    <td className="stat-number">
                      {pokemon?.stats[3]?.base_stat}
                    </td>
                    <td className="stat-progress">
                      <Progress
                        colorScheme={progressBar(pokemon?.stats[3]?.base_stat)}
                        size="sm"
                        value={pokemon?.stats[3]?.base_stat}
                        borderRadius="10px"
                        bg="transparent"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="stat-title">Sp. Def</td>
                    <td className="stat-number">
                      {pokemon?.stats[4]?.base_stat}
                    </td>
                    <td className="stat-progress">
                      <Progress
                        colorScheme={progressBar(pokemon?.stats[4]?.base_stat)}
                        size="sm"
                        value={pokemon?.stats[4]?.base_stat}
                        borderRadius="10px"
                        bg="transparent"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="stat-title">Speed</td>
                    <td className="stat-number">
                      {pokemon?.stats[5]?.base_stat}
                    </td>
                    <td className="stat-progress">
                      <Progress
                        colorScheme={progressBar(pokemon?.stats[5]?.base_stat)}
                        size="sm"
                        value={pokemon?.stats[5]?.base_stat}
                        borderRadius="10px"
                        bg="transparent"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="stat-title">Total</td>
                    <td className="stat-number" style={{ fontSize: "16px" }}>
                      {calculateTotal()}
                    </td>
                  </tr>
                </thead>
              </table>
            </Box>
          </div>

          <div className="details-columm">
            <div className="details-columm-title">
              <h2>#0{pokemon?.id}</h2>
              <h1 style={{ textTransform: "capitalize" }}>{pokemon?.name}</h1>
            </div>
            <div className="pokemon-type">
              {pokemon?.types?.map(
                (type: { type: { name: keyof typeof typePokemon } }) => (
                  <img
                    src={typePokemon[type.type.name]?.urlImg}
                    key={type.type.name}
                    alt="pokemon-type"
                  />
                )
              )}
            </div>

            <Box
              w="292px"
              h="453px"
              bg="white"
              borderRadius="8px"
              padding="24px"
              display="flex"
              flexDirection="column"
              alignItems="flex-start"
            >
              <Text color="black" fontSize="24px" marginLeft="12px">
                Moves:
              </Text>
              {pokemon?.moves
                ?.slice(0, 5)
                .map((item: { move: { name: string } }) => (
                  <MovesTypes key={item.move.name}>{item.move.name}</MovesTypes>
                ))}
            </Box>
          </div>

          <div className="details-column">
            <Box
              w="270px"
              h="250px"
              bg="transparent"
              borderRadius="12px"
              position="relative"
              bottom="350px"
            >
              <Img
                src={
                  pokemon?.sprites?.other["official-artwork"]["front_default"]
                }
                alt="pokemon"
              />
            </Box>
          </div>
        </CardDetails>
      </PokemonDetailPageStyle>
    </>
  );
}
