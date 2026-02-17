import type React from "react";
import { useEffect, useState } from "react";
import type { Pokemon } from "../store/types.interfaces";
import { useNavigate } from "react-router-dom";
import { fetchPokemon } from "../services/pokemonApi";
import { Card, Spin } from "antd";
import { getArtWork, typeColors } from "../utils/constants";

interface PokemonCardProps {
  name: string;
}

const PokemonCard: React.FC<PokemonCardProps> = ({ name }) => {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const loadPokemon = async () => {
      try {
        setLoading(true);
        const data = await fetchPokemon(name);
        setPokemon(data);
      } catch (error) {
        console.error("Error loading pokemon:", error);
      } finally {
        setLoading(false);
      }
    };
    loadPokemon();
  }, [name]);

  const handleClick = () => {
    if (pokemon) {
      navigate(`/pokemon/${pokemon.id}`);
    }
  };

  if (loading) {
    return (
      <Card className="text-center min-h-75">
        <Spin size="large" />
      </Card>
    );
  }

  if (!pokemon) {
    return null;
  }

  return (
    <Card
      hoverable
      onClick={handleClick}
      cover={
        <div className="rounded-2xl bg-(--primary-foreground) p-4 shadow-sm border-(--border) overflow-hidden group cursor-pointer">
          <div className="rounded-x1 p-4 flex items-center justify-center aspect-square mb-3">
            <img
              src={getArtWork(pokemon)}
              alt={pokemon.name}
              className="w-3/4 h-3/4 object-contain drop-shadow-lg group-hover:scale-110 transition-transform duration-300"
              onError={(e) => {
                (e.target as HTMLImageElement).src =
                  "https://via.placeholder.com/150?text=No+Image";
              }}
            />
          </div>
        </div>
      }
    >
      <Card.Meta
        title={
          <div>
            <p className="text-xs font-bold text-(--muted-foreground)">
              #{String(pokemon.id).padStart(3, "0")}
            </p>
            <h3 className="text-lg font-bold capitalize text-(--card-foreground) mt-0.5 mb-2">
              {pokemon.name}
            </h3>
          </div>
        }
        description={
          <div className="flex gap-1.5 flex-wrap">
            {pokemon.types?.map((type) => (
              <span
                className={`inline-block rounded-full font-semibold capitalize text-white px-4`}
                key={type.type.name}
                style={{
                  backgroundColor: `${typeColors[type.type.name] || "#999"}`,
                }}
              >
                {type.type.name}
              </span>
            ))}
          </div>
        }
      />
    </Card>
  );
};

export default PokemonCard;
