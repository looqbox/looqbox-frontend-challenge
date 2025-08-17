import { Input, Pagination, Card, Row, Col, Select, Slider, Space, Button, Tag, Skeleton, Empty } from 'antd'
import { FilterOutlined, ClearOutlined } from '@ant-design/icons'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { useFilteredPokemonList, usePokemonTypes } from '@/hooks/queries'
import { PokemonCard } from '@/components/pokemon/pokemon-card'

const { Search } = Input

const HomePage = () => {
    const [searchQuery, setSearchQuery] = useState('')
    const [pokemon, setPokemon] = useState<Pokemon[]>([])
    const [total, setTotal] = useState(0)
    const [page, setPage] = useState(1)
    const [type, setType] = useState<string | undefined>(undefined)
    const [heightRange, setHeightRange] = useState<[number, number]>([0, 30])
    const [weightRange, setWeightRange] = useState<[number, number]>([0, 500])

    const pageSize = 20

    const activeFiltersCount = useMemo(() => {
        let c = 0
        if (type) c++
        if (heightRange[0] > 0 || heightRange[1] < 30) c++
        if (weightRange[0] > 0 || weightRange[1] < 500) c++
        return c
    }, [type, heightRange, weightRange])

    const filters: PokemonFilters = useMemo(() => ({
        type,
        minHeight: Math.round(heightRange[0] * 10),
        maxHeight: Math.round(heightRange[1] * 10),
        minWeight: Math.round(weightRange[0] * 10),
        maxWeight: Math.round(weightRange[1] * 10)
    }), [type, heightRange, weightRange])

    const { data, isLoading, refetch, isFetching } = useFilteredPokemonList(page, pageSize, filters)

    const { data: typesData } = usePokemonTypes()

    const handleSearch = useCallback(async (q: string) => {
        if (!q.trim()) { setSearchQuery(''); setPage(1); refetch(); return }
        setSearchQuery(q)
        setPage(1)
        if (data && data.pokemonDetails) {
            const filtered = data.pokemonDetails.filter(p =>
                p.name.toLowerCase().includes(q.toLowerCase())
            )
            setPokemon(filtered)
            setTotal(filtered.length)
        } else {
            setPokemon([])
            setTotal(0)
        }
    }, [refetch, data])

    const clearFilters = () => {
        setType(undefined)
        setHeightRange([0, 30])
        setWeightRange([0, 500])
        setPage(1)
    }

    useEffect(() => {
        if (data && !searchQuery) {
            setPokemon(data.pokemonDetails);
            setTotal(type ? data.listResponse.count : data.listResponse.count)
        }
    }, [data, searchQuery, type])

    return (
        <div className='py-6 !space-y-4'>
            <div className='space-y-2'>
                <Row className='!flex flex-row items-center justify-center gap-5'>
                    <div className='flex-1'>
                        <Search
                            placeholder='Buscar Pokémon...'
                            allowClear
                            onSearch={handleSearch}
                            disabled={isLoading}
                        />
                    </div>
                    <div className='h-full'>
                        <Tag className='!h-[31px] !flex !items-center' icon={<FilterOutlined />} color={activeFiltersCount ? 'blue' : 'default'}>
                            {activeFiltersCount ? `${activeFiltersCount} filtro(s) ativo(s)` : 'Sem filtros'}
                        </Tag>
                    </div>
                </Row>
            </div>

            <Card size='small' className='!border !border-gray-200'>
                <Row gutter={[24, 12]} align='middle'>
                    <Col xs={24} md={8}>
                        <Space direction='vertical' className='w-full'>
                            <div>Tipo</div>
                            <Select
                                allowClear
                                placeholder='Selecione um tipo'
                                value={type}
                                onChange={(v) => { setType(v); setPage(1) }}
                                options={(typesData || []).map(t => ({ value: t.name, label: t.name }))}
                                className='w-full'
                                disabled={!!searchQuery || isLoading}
                            />
                        </Space>
                    </Col>
                    <Col xs={24} lg={6} md={8}>
                        <Space direction='vertical' className='w-full'>
                            <div>Altura (m)</div>
                            <Slider
                                range
                                min={0}
                                max={30}
                                step={0.1}
                                value={heightRange}
                                onChange={(v) => { setHeightRange(v as [number, number]); setPage(1) }}
                                disabled={!!searchQuery || isLoading}
                            />
                        </Space>
                    </Col>
                    <Col xs={24} lg={6} md={8}>
                        <Space direction='vertical' className='w-full'>
                            <div>Peso (kg)</div>
                            <Slider
                                range
                                min={0}
                                max={500}
                                step={1}
                                value={weightRange}
                                onChange={(v) => { setWeightRange(v as [number, number]); setPage(1) }}
                                disabled={!!searchQuery || isLoading}
                            />
                        </Space>
                    </Col>
                    <Col xs={24} md={24} lg={4}>
                        <Button
                            className='w-full'
                            icon={<ClearOutlined />}
                            onClick={clearFilters}
                            disabled={!!searchQuery}
                        >
                            Limpar filtros
                        </Button>
                    </Col>

                </Row>
            </Card>

            {total < 1 && !isLoading && !isFetching && (
                <Empty description='Nenhum Pokémon encontrado' className='!mt-24' />
            )}

            {(isLoading || isFetching) ? (
                <Row gutter={[16, 16]}>
                    {Array.from({ length: 12 }).map((_, i) => (
                        <Col key={i} xs={12} sm={8} md={6} lg={6} xl={4}>
                            <Card>
                                <Skeleton.Image active className='!w-full' />
                                <Skeleton active paragraph={{ rows: 2 }} className='pt-8' />
                            </Card>
                        </Col>
                    ))}
                </Row>
            ) : (
                <>
                    <Row gutter={[16, 6]} className='justify-center'>
                        {pokemon.map((p, idx) => (
                            <Col key={p.id} style={{ animationDelay: `${(idx % 12) * 40}ms` }}>
                                <PokemonCard pokemon={p} />
                            </Col>
                        ))}
                    </Row>

                    {!searchQuery && !isLoading && total > pageSize && (
                        <Pagination
                            className='justify-center'
                            current={page}
                            total={total}
                            pageSize={pageSize}
                            showSizeChanger={false}
                            onChange={setPage}
                        />
                    )}
                </>
            )}
        </div>
    )
}

export default HomePage