import { Spin, Button, Typography, Card } from "antd";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import type { Pokemon } from "../store/types.interfaces";
import { fetchPokemon, fetchPokemonSpecies } from "../services/pokemonApi";
import {
  ArrowLeftOutlined,
  ColumnHeightOutlined,
  PieChartOutlined,
  FireOutlined,
} from "@ant-design/icons";
import { getArtWork, typeColors, StatColors } from "../utils/constants";

const { Title } = Typography;

const PokemonDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const [description, setDescription] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadPokemon = async () => {
      if (!id) {
        setError("No Pokemon ID provided");
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError(null);
        const data = await fetchPokemon(Number(id));
        setPokemon(data);

        try {
          const speciesData = await fetchPokemonSpecies(Number(id));
          const entries = speciesData.flavor_text_entries;
          const flavorTextEntry = entries?.find(
            (entry: any) => entry.language.name === "en",
          );

          if (flavorTextEntry) {
            const rawText = flavorTextEntry.flavor_text;
            if (rawText) {
              const cleanDescription = flavorTextEntry.flavor_text
                .replace(/\f/g, " ")
                .replace(/\n/g, " ")
                .replace(/\r/g, " ")
                .replace(/ +/g, " ")
                .trim();
              setDescription(cleanDescription);
            } else {
              setDescription("No description available.");
            }
          } else {
            setDescription("No description available in English.");
          }
        } catch (speciesError) {
          console.error("Error loading species data", speciesError);
          setDescription("Description not available");
        }
      } catch (error) {
        console.error("Error loading Pokemon:", error);
        setError("Failed to load Pokemon details");
      } finally {
        setLoading(false);
      }
    };
    loadPokemon();
  }, [id]);

  if (loading) {
    return (
      <div className="text-center p-[100px 0]">
        <Spin size="large" description="loading Pokemon details..." />
      </div>
    );
  }

  if (error || !pokemon) {
    return (
      <div className="text-center p-[100px 0]">
        <Title level={3}>{error || "Pokemon not found"}</Title>
        <Button type="primary" onClick={() => navigate("/")}>
          Back To Home
        </Button>
      </div>
    );
  }

  const primaryType = pokemon.types[0]?.type.name ?? "normal";
  return (
    <div className="min-h-screen bg-(--background)">
      <div
        className="relative pb-32 p-25"
        style={{
          background: `linear-gradient(180deg, var(--type-${primaryType}) 0%, hsl(220 20% 97%) 100%)`,
        }}
      >
        <div className="container mx-auto px-4 max-w-3xl">
          <button
            className="text-(--primary-foreground) rounded-(--radius) cursor-pointer font-medium p-2 mb-6 text-lg hover:bg-(--popover)/20 hover:text-(--popover-foreground)"
            onClick={() => navigate("/")}
          >
            <ArrowLeftOutlined className="mr-2" /> Back
          </button>

          <div className="flex items-end justify-between mb-4">
            <div>
              <p className="text-sm font-bold text-(--primary-foreground)/70">
                #{String(pokemon.id).padStart(3, "0")}
              </p>
              <h1 className="text-4xl font-extrabold capitalize text-(--primary-foreground)">
                {pokemon.name}
              </h1>
            </div>
          </div>

          <div>
            {pokemon.types.map((type) => (
              <span
                className={`inline-block rounded-full mr-2 font-semibold capitalize text-white pt-0.5 px-5 h-7`}
                key={type.type.name}
                style={{
                  backgroundColor: `${typeColors[type.type.name] || "#999"}`,
                }}
              >
                {type.type.name}
              </span>
            ))}
          </div>
        </div>

        <div className="absolute -bottom-24 left-1/2 -translate-x-1/2">
          <img
            src={getArtWork(pokemon)}
            alt={pokemon.name}
            className="w-48 h-48 object-contain drop-shadow-2xl"
          />
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-3xl pt-28 pb-12">
        {description && (
          <p className="text-center text-(--muted-foreground) mb-8 max-w-md mx-auto">
            {description}
          </p>
        )}

        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="bg-card rounded-2xl p-4 text-center border border-border">
            <ColumnHeightOutlined className="h-5 w-5 mx-auto mb-1 text-muted-foreground" />
            <p className="text-lg font-bold text-card-foreground">
              {(pokemon.height / 10).toFixed(1)}m
            </p>
            <p className="text-xs text-muted-foreground">Height</p>
          </div>
          <div className="bg-card rounded-2xl p-4 text-center border border-border">
            <PieChartOutlined className="h-5 w-5 mx-auto mb-1 text-muted-foreground" />
            <p className="text-lg font-bold text-card-foreground">
              {(pokemon.weight / 10).toFixed(1)}kg
            </p>
            <p className="text-xs text-muted-foreground">Weight</p>
          </div>
          <div className="bg-card rounded-2xl p-4 text-center border border-border">
            <FireOutlined className="h-5 w-5 mx-auto mb-1 text-muted-foreground" />
            <p className="text-lg font-bold text-card-foreground">
              {pokemon.base_experience ?? "?"}
            </p>
            <p className="text-xs text-muted-foreground">Base XP</p>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-lg font-bold text-foreground mb-3">Abilities</h2>
          <div className="flex flex-wrap gap-2">
            {pokemon.abilities.map((a) => (
              <span
                key={a.ability.name}
                className="bg-secondary text-secondary-foreground rounded-full px-4 py-1.5 text-sm font-medium capitalize"
              >
                {a.ability.name.replace("-", " ")}
                {a.is_hidden && (
                  <span className="text-muted-foreground ml-1 text-xs">
                    (hidden)
                  </span>
                )}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-lg font-bold text-foreground mb-3">Base Stats</h2>
          <Card className="mt-6 bg-white border border-gray-200 rounded-lg shadow-sm p-4">
            <Title level={4}>Stats Comparison</Title>
            <div className="mt-4">
              {pokemon.stats?.map((stat) => {
                const statName = stat.stat.name.replace("-", " ");
                const barWidth = (stat.base_stat / 150) * 100;
                const color = StatColors[stat.stat.name] || "#667eea";

                return (
                  <div key={stat.stat.name} className="mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-28 text-right text-sm font-medium">
                        {statName}
                      </div>
                      <span className="text-black text-sm font-bold pl-0">
                        {stat.base_stat}
                      </span>

                      <div className="flex-1 h-2 bg-gray-200 rounded relative overflow-hidden">
                        <div
                          className="absolute top-0 left-0 h-full flex items-center justify-end pr-2 transition-all duration-300 ease"
                          style={{
                            width: `${barWidth}%`,
                            backgroundColor: color,
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetails;
