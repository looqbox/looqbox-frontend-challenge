import { useSelector } from 'react-redux'
import type { RootState } from '@/lib/store'
import { useMemo } from 'react'
import { Empty, Card, Row, Col, Statistic, Typography, type StatisticProps } from 'antd'
import { PokemonCard } from '@/components/pokemon/pokemon-card'
import CountUp from 'react-countup'

const { Text } = Typography

const formatter: StatisticProps['formatter'] = (value) => (
    <CountUp end={value as number} separator="," />
);

const FavoritesPage = () => {
    const pokemons = useSelector((s: RootState) => s.favorites.items)

    const metrics = useMemo(() => {
        const total = pokemons.length
        const avg = (name: string) => total ? Math.round(pokemons.reduce((a, p) => a + (p.stats.find(s => s.stat.name === name)?.base_stat ?? 0), 0) / total) : 0
        const avgHp = avg('hp')
        const avgAtk = avg('attack')
        const avgDef = avg('defense')
        const avgSpd = avg('speed')
        const avgHeight = total ? (pokemons.reduce((a, p) => a + p.height, 0) / total) / 10 : 0
        const avgWeight = total ? (pokemons.reduce((a, p) => a + p.weight, 0) / total) / 10 : 0
        const typeCount: Record<string, number> = {}

        pokemons.forEach(p => p.types.forEach(t => { typeCount[t.type.name] = (typeCount[t.type.name] || 0) + 1 }))
        const mostCommonType = Object.entries(typeCount).sort((a, b) => b[1] - a[1])[0]?.[0] || '-'

        return {
            total,
            avgHp,
            avgAtk,
            avgDef,
            avgSpd,
            avgHeight,
            avgWeight,
            mostCommonType
        }
    }, [pokemons])

    return (
        <div className='py-6'>
            {pokemons.length === 0 ? (
                <Empty description='Nenhum favorito ainda' className='mt-24' />
            ) : (
                <>
                    <Row gutter={[16, 16]} className='mb-2'>
                        <Col xs={12} md={6}>
                            <Card size='small'>
                                <Statistic title='Total de Favoritos' value={metrics.total} formatter={formatter} />
                            </Card>
                        </Col>
                        <Col xs={12} md={6}>
                            <Card size='small'>
                                <Statistic title='Média HP' value={metrics.avgHp} suffix='/ 100' formatter={formatter} />
                            </Card>
                        </Col>
                        <Col xs={12} md={6}>
                            <Card size='small'>
                                <Statistic title='Média ATK' value={metrics.avgAtk} suffix='/ 100' formatter={formatter} />
                            </Card>
                        </Col>
                        <Col xs={12} md={6}>
                            <Card size='small'>
                                <Statistic title='Tipo Mais Comum' valueRender={() => <Text style={{ textTransform: 'capitalize' }} strong>{metrics.mostCommonType}</Text>} />
                            </Card>
                        </Col>
                    </Row>
                    <Row gutter={[16, 16]} className='mb-2'>
                        <Col xs={12} md={6}>
                            <Card size='small'>
                                <Statistic title='Média DEF' value={metrics.avgDef} suffix='/ 100' formatter={formatter} />
                            </Card>
                        </Col>
                        <Col xs={12} md={6}>
                            <Card size='small'>
                                <Statistic title='Média SPD' value={metrics.avgSpd} suffix='/ 100' formatter={formatter} />
                            </Card>
                        </Col>
                        <Col xs={12} md={6}>
                            <Card size='small'>
                                <Statistic title='Altura Média' value={metrics.avgHeight.toFixed(1)} suffix=' m' formatter={formatter} />
                            </Card>
                        </Col>
                        <Col xs={12} md={6}>
                            <Card size='small'>
                                <Statistic title='Peso Médio' value={metrics.avgWeight.toFixed(1)} suffix=' kg' formatter={formatter} />
                            </Card>
                        </Col>
                    </Row>

                    <Row gutter={[16, 6]} className={pokemons.length > 4 ? 'justify-center' : ''}>
                        {pokemons.map((p, idx) => (
                            <Col key={p.id} style={{ animationDelay: `${(idx % 12) * 40}ms` }}>
                                <PokemonCard pokemon={p} />
                            </Col>
                        ))}
                    </Row>
                </>
            )}
        </div>
    )
}

export default FavoritesPage