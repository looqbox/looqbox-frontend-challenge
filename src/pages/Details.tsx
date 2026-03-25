import { ArrowLeftOutlined } from "@ant-design/icons";
import { Button, Progress, Tag } from "antd";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import type { Pokemon } from "../types/pokemon";
import PokemonLoader from "../components/PokemonLoader";
import { pokemonColors } from "../utils/pokemon-colors";
import { pokemonService } from "../services/pokemonService";

const PokemonDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [pokemon, setPokemon] = useState<Pokemon | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getDetails = async () => {
            try {
                setLoading(true);
                const res = await pokemonService.getById(id!);
                console.log(res)
                setPokemon(res);
            } catch (error) {
                console.error('Error fetching Pokémon details:', error);
            } finally {
                setLoading(false);
            }
        };
        getDetails();
    }, [id]);

    if (loading) return <PokemonLoader />;

    if (!pokemon || !pokemon.types || pokemon.types.length === 0) {
        return (
            <div className="flex flex-col h-screen bg-red-800 justify-center items-center p-4">
                <h1 className="text-4xl font-black mb-6 text-white text-center drop-shadow-lg">
                    Pokémon not found! 😵‍💫
                </h1>
                <Button
                    onClick={() => navigate('/')}
                    icon={<ArrowLeftOutlined />}
                    size="large"
                    className="bg-yellow-400! text-red-800! border-none font-bold rounded-full px-8 shadow-xl hover:scale-105 transition-transform"
                >
                    Back Home
                </Button>
            </div>
        );
    }

    const primaryType = pokemon.types?.[0].type.name.toLowerCase();
    const themeColor = pokemonColors[primaryType as keyof typeof pokemonColors] || '#dc2626';

    return (
        <div className="min-h-screen bg-slate-900 flex justify-center p-4 md:p-10">
            <div className="max-w-4xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row">

                <div
                    className="md:w-1/3 p-10 flex flex-col items-center justify-center relative"
                    style={{ backgroundColor: themeColor }}
                >

                    <span className="absolute top-5 right-8 text-6xl font-black text-white opacity-20">
                        #{pokemon.id.toString().padStart(3, '0')}
                    </span>

                    <img
                        src={pokemon.sprites.other?.["official-artwork"]?.front_default || pokemon.sprites.front_default}
                        alt={pokemon.name}
                        className="w-64 h-64 drop-shadow-[0_20px_20px_rgba(0,0,0,0.4)] z-10"
                    />

                    <h1 className="text-5xl font-black text-white capitalize mt-6 drop-shadow-md">
                        {pokemon.name}
                    </h1>

                    <div className="flex gap-2 mt-4">
                        {pokemon.types.map((t) => (
                            <Tag
                                key={t.type.name}
                                color={pokemonColors[t.type.name.toLowerCase()] || 'gray'}
                                className="uppercase font-bold text-white rounded-full px-4 py-1 border-none shadow-md"
                            >
                                {t.type.name}
                            </Tag>
                        ))}
                    </div>
                </div>

                <div className="flex-1 p-8 md:p-12 bg-white">
                    <div className="flex flex-col mb-8">

                        <Button
                            icon={<ArrowLeftOutlined className="text-lg!"/>}
                            onClick={() => navigate(-1)}
                            type="text"
                            className="self-end mb-2 text-gray-400 hover:text-red-600! hover:bg-red-50! transition-all rounded-full flex items-center justify-center h-10 w-10 p-0"
                        />

                        <div className="border-b-4 border-yellow-400 self-start">
                            <h2 className="text-3xl font-black text-gray-800 pb-2">
                                Base Stats
                            </h2>
                        </div>
                    </div>

                    <div className="space-y-6">
                        {pokemon.stats?.map(s => (
                            <div key={s.stat.name}>
                                <div className="flex justify-between mb-2 capitalize text-gray-700 font-bold">
                                    <span className="text-sm tracking-widest">{s.stat.name.replace('-', ' ')}</span>
                                    <span className="text-lg font-mono">{s.base_stat}</span>
                                </div>
                                <Progress
                                    percent={s.base_stat}
                                    strokeColor={s.base_stat > 80 ? '#ef4444' : s.base_stat > 50 ? '#facc15' : '#3b82f6'}
                                    showInfo={false}
                                    strokeWidth={12}
                                    railColor="#f3f4f6"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PokemonDetails;