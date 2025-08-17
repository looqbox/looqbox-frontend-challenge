import { memo, useMemo } from 'react'
import { Radar } from '@ant-design/plots'

type StatsRadarProps = {
    stats: PokemonStatSlot[]
    maxValue?: number
}

type InternalDatum = {
    stat: string
    value: number
}

export const PokemonStatsRadar = memo(function StatsRadar({ stats, maxValue = 180 }: StatsRadarProps) {
    const data: InternalDatum[] = useMemo(() => {
        if (!Array.isArray(stats) || stats.length === 0) return []
        const wanted = new Set(['hp', 'attack', 'defense', 'special-attack', 'special-defense', 'speed'])
        return stats
            .filter(s => wanted.has(s.stat.name))
            .map(s => ({
                stat: mapLabel(s.stat.name),
                value: s.base_stat
            }))
    }, [stats])

    if (!data.length) {
        return <div className='text-center'>Sem dados de stats.</div>
    }

    const config = {
        data,
        xField: 'stat',
        yField: 'value',
        meta: {
            value: { alias: 'Valor', min: 0, max: maxValue }
        },
        autoFit: true,
        area: { style: { fill: 'l(270) 0:#1677ff 1:#69b1ff', fillOpacity: 0.35 } },
        point: { size: 4, shape: 'circle', style: { fill: '#1677ff', stroke: '#fff', lineWidth: 1 } },
        line: { style: { stroke: '#1677ff', lineWidth: 2 } },
        tooltip: false,
        animation: { appear: { animation: 'wave-in' } },
        xAxis: { label: { style: { fontSize: 12 } } },
        yAxis: { grid: { alternateColor: 'rgba(0,0,0,0.02)' } }
    } as const

    return <Radar {...config} style={{ width: '100%' }} />
})

function mapLabel(key: string): string {
    switch (key) {
        case 'hp': return 'HP'
        case 'attack': return 'ATK'
        case 'defense': return 'DEF'
        case 'special-attack': return 'SP. ATK'
        case 'special-defense': return 'SP. DEF'
        case 'speed': return 'SPD'
        default: return key
    }
}
