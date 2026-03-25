import { Link } from "react-router";
import type { Pokemon } from "../types/pokemon";
import { Card, Tag } from 'antd';
import { pokemonColors } from "../utils/pokemon-colors";

interface PokemonCardProps {
    pokemon: Pokemon;
}

const PokemonCard = ({ pokemon }: PokemonCardProps) => {
    const primaryType = pokemon.types?.[0].type.name.toLowerCase();
    const cardColor = pokemonColors[primaryType as keyof typeof pokemonColors] || '#f3f4f6';

    return (
        <Link className="hover:scale-105 transition-transform" to={`/pokemon/${pokemon.name}`}>
            
            <Card
                hoverable
                className="relative flex w-70 h-40 justify-center items-center overflow-hidden border-none! shadow-lg! hover:shadow-xl transition-shadow duration-300"
                style={{ backgroundColor: cardColor }}
                styles={{ body: { padding: 0, height: '100%' } }}
            >
                <div className="grid grid-cols-2 h-full">
                    
                    <div className="flex justify-center bg-white/35 opacity-70 m-2 rounded-xl backdrop-blur-sm z-10">
                        <img
                            alt={pokemon.name}
                            src={pokemon.sprites.front_default}
                            className="w-35 h-35 object-contain drop-shadow-md"
                        />
                    </div>
                    <div className="flex flex-col justify-center px-4 relative">
                        <p className="absolute top-2 right-2 text-6xl font-mono text-white opacity-20 z-0">
                            #{pokemon.id.toString().padStart(3, '0')}
                        </p>
                        <h1 className="capitalize text-xl font-medium text-white z-10 drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)] ">
                            {pokemon.name}
                        </h1>
                        <div className="flex flex-wrap gap-1.5 mt-2 max-w-full z-10 drop-shadow-md">
                            {pokemon.types?.map((t) => {
                                const pokemonType = t.type.name.toLowerCase();
                                const typeColor = pokemonColors[pokemonType] || 'gray';
                                return (
                                    <Tag
                                        color={typeColor}
                                        key={pokemonType} className="uppercase font-bold text-white rounded-full shadow-md z-10"
                                    >
                                        {pokemonType}
                                    </Tag>
                                );
                            })}
                        </div>

                    </div>
                
                </div>
            </Card>
        </Link>
    );
};

export default PokemonCard;