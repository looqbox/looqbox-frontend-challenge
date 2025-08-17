import { useParams, useNavigate } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { QueryKeys } from '@/constants/query-keys'
import { pokemonService } from '@/services/pokemon'
import { Button, Tag, Card, Row, Col, Typography, Progress, Skeleton, Tabs, Descriptions, Space, Carousel } from 'antd'
import { FavoriteButton } from '@/components/pokemon/favorite-button'
import { TypeColors, DefaultTypeColor } from '@/constants/colors'
import { useMemo, useRef } from 'react'
import type { CarouselRef } from 'antd/es/carousel'
import { PokemonStatsRadar } from '@/components/pokemon/pokemon-stats-radar'

const { Title, Text } = Typography

const PokemonDetailsPage = () => {
    const { id } = useParams()
    const navigate = useNavigate()

    const { data: pokemon, isLoading } = useQuery<Pokemon>({
        queryKey: [QueryKeys.POKEMON_DETAILS, +id!],
        queryFn: () => pokemonService.get(+id!),
        enabled: Number.isFinite(+id!)
    })

    const images = useMemo(() => {
        const p = pokemon
        if (!p) return [] as string[]
        const arr = [
            p.sprites.other['official-artwork'].front_default,
            p.sprites.front_default,
            p.sprites.back_default,
            p.sprites.front_shiny,
            p.sprites.back_shiny,
        ].filter(Boolean) as string[]
        return Array.from(new Set(arr))
    }, [pokemon])
    const carouselRef = useRef<CarouselRef | null>(null)

    const totalStats = useMemo(() => {
        if (!pokemon) return 0
        return pokemon?.stats.reduce((acc, s) => acc + s.base_stat, 0)
    }, [pokemon])

    const statColor = (name: string) => name === 'hp' ? '#52c41a' : name === 'attack' ? '#fa8c16' : name === 'defense' ? '#1890ff' : '#722ed1'

    return (
        <div className='py-6'>
            <Space className='mb-4'>
                <Button onClick={() => navigate(-1)}>Voltar</Button>
                {pokemon && (
                    <Text type='secondary'>#{pokemon.id}</Text>
                )}
            </Space>

            {isLoading || !pokemon ? (
                <Card>
                    <Skeleton active avatar paragraph={{ rows: 12 }} />
                </Card>
            ) : (
                <Row gutter={[24, 24]} >
                    <Col xs={24} md={10} lg={8}>
                        <Card className='fade-in-up'>
                            <div className='bg-gray-100 rounded-md p-2 relative'>
                                <Carousel ref={carouselRef} arrows dots infinite autoplay className='w-full'>
                                    {images.map((src, idx) => (
                                        <div key={idx}>
                                            <img
                                                src={src}
                                                alt={`${pokemon?.name}-${idx}`}
                                                className='!h-full !w-full object-contain'
                                            />
                                        </div>
                                    ))}
                                </Carousel>
                                <div className='absolute top-2 right-2'>
                                    <FavoriteButton pokemon={pokemon} />
                                </div>
                            </div>

                            <div className='text-center mt-4'>
                                <Title level={3} className='capitalize'>
                                    {pokemon?.name}
                                </Title>

                                <div className='mt-2 flex gap-2 justify-center flex-wrap'>
                                    {pokemon.types.map(t => (
                                        <Tag
                                            key={t.type.name}
                                            className="!border-0 !rounded-xl capitalize !px-2 !text-white"
                                            style={{ background: TypeColors[t.type.name] || DefaultTypeColor }}
                                        >
                                            {t.type.name}
                                        </Tag>
                                    ))}
                                </div>
                            </div>
                        </Card>

                        <Card className='fade-in-up !mt-4'>
                            <Descriptions size='small' column={1} title='Sobre'>
                                <Descriptions.Item label='Altura'>{(pokemon?.height / 10).toFixed(1)} m</Descriptions.Item>
                                <Descriptions.Item label='Peso'>{(pokemon?.weight / 10).toFixed(1)} kg</Descriptions.Item>
                                {pokemon?.base_experience != null && <Descriptions.Item label='Base XP'>{pokemon?.base_experience}</Descriptions.Item>}
                                <Descriptions.Item label='Habilidades'>
                                    {pokemon?.abilities.map(a => <Tag key={a.ability.name}>{a.ability.name}</Tag>)}
                                </Descriptions.Item>
                            </Descriptions>
                        </Card>
                    </Col>
                    <Col xs={24} md={14} lg={16}>
                        <Tabs
                            className='fade-in-up'
                            items={[
                                {
                                    key: 'stats',
                                    label: 'Status',
                                    children: (
                                        <Card>
                                            <Title level={4}>Estatísticas</Title>
                                            <Space direction='vertical' className='w-full' size={14}>
                                                {pokemon?.stats.map(s => (
                                                    <div key={s.stat.name}>
                                                        <div className='flex justify-between mb-1'>
                                                            <Text strong className='capitalize'>{s.stat.name}</Text>
                                                            <Text>{s.base_stat}</Text>
                                                        </div>
                                                        <Progress percent={Math.min(100, Math.round(s.base_stat))} showInfo={false} strokeColor={statColor(s.stat.name)} status='active' />
                                                    </div>
                                                ))}
                                                <div>
                                                    <div className='flex justify-between mb-1'>
                                                        <Text strong>Total</Text>
                                                        <Text>{totalStats}</Text>
                                                    </div>
                                                    <Progress percent={Math.min(100, Math.round((totalStats / 600) * 100))} showInfo={false} strokeColor="#13c2c2" status='active' />
                                                </div>
                                            </Space>
                                        </Card>
                                    )
                                },
                                {
                                    key: 'charts',
                                    label: 'Visualização Gráfica',
                                    children: (
                                        <Card >
                                            <Card size='small' title='Radar de Stats'>
                                                <PokemonStatsRadar stats={pokemon.stats} />
                                            </Card>
                                            <Row gutter={[16, 16]} className='mt-7'>
                                                {['hp', 'attack', 'defense', 'speed'].map((name) => {
                                                    const val = pokemon?.stats.find(s => s.stat.name === name)?.base_stat ?? 0
                                                    const color = statColor(name)

                                                    return (
                                                        <Col key={name} xs={12} md={10} lg={6} className='text-center truncate'>
                                                            <Progress
                                                                type='dashboard'
                                                                percent={Math.min(100, Math.round(val))}
                                                                strokeColor={color}
                                                                size={120}
                                                            />

                                                            <div>
                                                                <Text strong className='uppercase'>{name}</Text>
                                                            </div>
                                                        </Col>
                                                    )
                                                })}
                                            </Row>
                                        </Card>
                                    )
                                }
                            ]}
                        />
                    </Col>
                </Row>
            )}
        </div>
    )
}

export default PokemonDetailsPage