import { Button, Layout, Tag } from "antd";
import "./styles.css"
import HeaderComponent from "../../components/Header";
import PokemonInfo from "../../components/PokemonInfo";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { PokemonDetails } from "../../../types/PokemonDetails";
import { fetchPokemonDetails } from "../../../services/pokemonDetailsService";
import { LeftOutlined } from "@ant-design/icons";

const { Content } = Layout;

const Details: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [pokemon, setPokemon] = useState<PokemonDetails | null>(null);

  useEffect(() => {
    const loadPokemonDetails = async () => {
      try {
        if (id) {
          const fetchedPokemon = await fetchPokemonDetails(Number(id));
          setPokemon(fetchedPokemon);
        }
      } catch (err) {
        console.log("Error: " + err);
      }
    };
    loadPokemonDetails();
  }, [id])

  return (
    <Layout className="details-container">
      <HeaderComponent />
      <Content className="details-content">
        <div className="details-card-container">
          <Button className="back-button" onClick={() => navigate("/")}>
            <LeftOutlined />
          </Button>
          <div className="details-card-image">
            <img className="details-image" src={pokemon?.imgUrl} width={300}/>
          </div>
          <div className="details-card-infos">
            <div className="details-card-infos-texts">
              <h2>{pokemon?.name}</h2>
              <div>
                {
                  pokemon?.types.map((type) => 
                    <Tag color="green" children={type.type.name} />
                  )
                }
              </div>
            </div>
            <div className="details-card-info-first">
              <PokemonInfo title="Height" value={`${pokemon ? pokemon.height / 10 : undefined}m`} />
              <PokemonInfo title="Weight" value={`${pokemon ? pokemon.weight / 10 : undefined}kg`} />
            </div>
            <div className="details-card-info-stats">
              <h3>Stats</h3>
              <div className="details-card-info-stats-content">
                {
                  pokemon?.stats.map((stat) => 
                    <PokemonInfo title={stat.stat.name} variant={stat.stat.name as "hp" | "attack" | "defense" | "special-attack" | "special-defense" | "speed"} value={`${stat.base_stat}`} />
                  )
                }
              </div>
            </div>
            <div className="details-card-info-stats">
              <h3>Abilities</h3>
              <div className="details-card-info-stats-content">

                {
                  pokemon?.abilities.map((ability) => 
                  <PokemonInfo title={ability.ability.name} />
                )
                }
              </div>
            </div>
          </div>
        </div>
      </Content>
    </Layout>
  )
}

export default Details;