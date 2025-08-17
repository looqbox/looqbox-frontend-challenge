import { Card, Tag, Tooltip, Progress, Typography } from 'antd'
import { useNavigate } from 'react-router-dom'
import { TypeColors, DefaultTypeColor } from '@/constants/colors'
import { FavoriteButton } from '@/components/pokemon/favorite-button'
import { useMemo } from 'react'

type Props = {
    pokemon: Pokemon
}

const { Meta } = Card
const { Text } = Typography

export const PokemonCard = ({ pokemon }: Props) => {
    const navigate = useNavigate()

    const imageUrl = useMemo(
        () =>
            pokemon.sprites.other['official-artwork'].front_default ||
            pokemon.sprites.front_default,
        [pokemon.sprites]
    )

    const statsMap = useMemo(() => {
        const map: Record<string, number> = {}
        for (const s of pokemon.stats) map[s.stat.name] = s.base_stat
        return map
    }, [pokemon.stats])

    const { hp, atk, def } = useMemo(
        () => ({
            hp: statsMap.hp ?? 0,
            atk: statsMap.attack ?? 0,
            def: statsMap.defense ?? 0
        }),
        [statsMap]
    )

    const metrics = useMemo(
        () => ({
            heightM: (pokemon.height / 10).toFixed(1),
            weightKg: (pokemon.weight / 10).toFixed(1)
        }),
        [pokemon.height, pokemon.weight]
    )

    return (
        <Card
            className="card-hover fade-in-up !border !border-gray-200 w-[210px] lg:w-[220px]"
            hoverable
            onClick={() => navigate(`/details/${pokemon.id}`)}
            cover={
                <div className="relative h-[190px] flex items-center justify-center p-1 bg-gray-200/40">
                    {imageUrl && (
                        <img
                            src={imageUrl}
                            alt={pokemon.name}
                            className="max-h-full max-w-full object-contain"
                        />
                    )}
                    <div
                        className="absolute top-2 right-2 z-10"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <FavoriteButton pokemon={pokemon} />
                    </div>
                </div>
            }
        >
            <Meta
                title={
                    <div className="text-center">
                        <div className="flex justify-between items-baseline">
                            <h3 className="capitalize m-0 truncate">{pokemon.name}</h3>
                            <Text type="secondary">#{pokemon.id}</Text>
                        </div>

                        <div className="flex flex-wrap gap-1 justify-center mt-2">
                            {pokemon.types.map(t => (
                                <Tag
                                    key={t.type.name}
                                    className="!border-0 !rounded-xl capitalize  !px-2 !text-white"
                                    style={{ background: TypeColors[t.type.name] || DefaultTypeColor }}
                                >
                                    {t.type.name}
                                </Tag>
                            ))}
                        </div>

                        <div className="flex justify-between mt-2">
                            <Tooltip title="Altura">
                                <Text type="secondary">{metrics.heightM} m</Text>
                            </Tooltip>
                            <Tooltip title="Peso">
                                <Text type="secondary">{metrics.weightKg} kg</Text>
                            </Tooltip>
                        </div>

                        <div className="grid grid-cols-3 gap-2 mt-2.5">
                            <Tooltip title={`HP: ${hp}`}>
                                <Progress
                                    percent={Math.min(100, Math.round(hp))}
                                    size="small"
                                    showInfo={false}
                                    strokeColor="#52c41a"
                                />
                            </Tooltip>
                            <Tooltip title={`ATK: ${atk}`}>
                                <Progress
                                    percent={Math.min(100, Math.round(atk))}
                                    size="small"
                                    showInfo={false}
                                    strokeColor="#fa8c16"
                                />
                            </Tooltip>
                            <Tooltip title={`DEF: ${def}`}>
                                <Progress
                                    percent={Math.min(100, Math.round(def))}
                                    size="small"
                                    showInfo={false}
                                    strokeColor="#1890ff"
                                />
                            </Tooltip>
                        </div>
                    </div>
                }
            />
        </Card>
    )
}