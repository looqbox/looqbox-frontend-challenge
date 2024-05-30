'use client'

import PokemonTypes from '@/types/PokemonTypes'
import stringUtil from '@/utils/stringUtil/stringUtil'
import ReactApexChart from 'react-apexcharts'

interface Props {
    pokemonData: PokemonTypes.Pokemon
}

const PokemonChart = (props: Props) => {
    const { pokemonData } = props

    return (
        <ReactApexChart
            options={{
                chart: {
                    type: 'radar',
                },
                dataLabels: {
                    enabled: true,
                },
                plotOptions: {
                    radar: {
                        polygons: {
                            strokeColors: '#e9e9e9',
                            fill: {
                                colors: ['#f8f8f8', '#fff'],
                            },
                        },
                    },
                },
                colors: ['#FF4560'],
                markers: {
                    size: 4,
                    colors: ['#fff'],
                    strokeWidth: 2,
                },
                tooltip: {
                    y: {
                        formatter: function (val) {
                            return val.toString()
                        },
                    },
                },
                xaxis: {
                    categories: pokemonData.stats.map((stat) =>
                        stringUtil.firstLetterUpper(stat.stat.name)
                    ),
                },
                yaxis: {
                    labels: {
                        formatter: function () {
                            return ''
                        },
                    },
                },
            }}
            series={[
                {
                    name: 'Valor',
                    data: pokemonData.stats.map((stat) => stat.base_stat),
                },
            ]}
            type='radar'
        />
    )
}

export default PokemonChart
