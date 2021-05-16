import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Bar } from 'react-chartjs-2';

import Header from '../components/Header';

import '../styles/pages/details.css';
import api from '../services/api';
import addLeadingZeros from '../utils/addLeadingZeros';
import capitalizeFirstLetter from '../utils/capitalizeFirstLetter';

export default function Details(){
    const [pokemonInfo, setPokemonInfo] = useState({});
    const [loading, setLoading] = useState(true);
    const [chartData, setChartData] = useState({});
    const [error, setError] = useState(false);
    const { id } = useParams();
    
    const options = {
        indexAxis: 'y',
        elements: {
            bar: {
                borderWidth: 1,
            },
        },
        maintainAspectRatio: false,
        responsive: true,
        plugins: {
            legend: {
                display: false
            },
            title: {
                display: true,
                text: 'Stats',
                color: '#848484'
            },
        },
    };

    useEffect(() => {
        async function getPokemonInfo(){
            try {
                setError(false);
                const { data } = await api.get(`/pokemon/${id}`);

                setPokemonInfo({
                    id: addLeadingZeros(id),
                    abilities: data.abilities.map(
                        ability => capitalizeFirstLetter(ability.ability.name)
                    ).join(', '),
                    height: data.height / 10,
                    name: capitalizeFirstLetter(data.name),
                    image: data.sprites.front_default,
                    stats: data.stats,
                    types: data.types.map(type => type.type.name),
                    weight: data.weight / 10
                });

                setChartData({
                    labels: ['HP', 'Attack', 'Defense', 'Special Attack', 'Special Defense', 'Speed'],
                    datasets: [
                        {
                            data: [
                                data.stats.filter(stat => stat.stat.name === 'hp')[0].base_stat, 
                                data.stats.filter(stat => stat.stat.name === 'attack')[0].base_stat, 
                                data.stats.filter(stat => stat.stat.name === 'defense')[0].base_stat, 
                                data.stats.filter(stat => stat.stat.name === 'special-attack')[0].base_stat, 
                                data.stats.filter(stat => stat.stat.name === 'special-defense')[0].base_stat, 
                                data.stats.filter(stat => stat.stat.name === 'speed')[0].base_stat
                            ], 
                            backgroundColor: [
                            '#63CD5C',
                            '#F6DE52',
                            '#EB7F25',
                            '#59B0F1',
                            '#AD62F6',
                            '#EA6ACE',
                            ],
                            borderColor: [
                            '#58B862',
                            '#DBC34D',
                            '#DE7722',
                            '#72ADD5',
                            '#945AD7',
                            '#DB5FBB',
                            ],
                            borderWidth: 1,
                        },
                    ],
                });
            } catch (err) {
                setError(true);
            }

            setLoading(false);
        }

        getPokemonInfo();
    }, [id]);

    if (loading) return <Header />

    return (
        <>
            <Header />

            {error ? (
                <div className="error-container">
                    <div className="alert alert-warning" role="alert">
                        Pokémon not found!
                    </div>
                </div>
            ): (
                <div className="container-info container">
                    <div className="row-info row">
                        <div className="card-wraper col-lg-4 col-md-6 col-sm-8 col-12">
                            <div className="card">
                                <img className='card-img-top' src={pokemonInfo.image} alt={pokemonInfo.name} />
                                <div className="card-body" style={{background: `var(--type-${pokemonInfo.types[0]})`}}>
                                    <p className="card-title">{pokemonInfo.name}</p>

                                    <p className="card-number">#{pokemonInfo.id}</p>
                                </div>
                            </div>
                        </div>

                        <div className="container-info-content col-lg-4 col-md-5 col-sm-8 col-11">
                            <div className="dimensions">
                                <div className='attribute-container'>
                                    <h5>Height</h5>
                                    <p>{pokemonInfo.height.toString()} m</p>
                                </div>
                                <div className='attribute-container'>
                                    <h5>Weight</h5>
                                    <p>{pokemonInfo.weight.toString()} kg</p>
                                </div>
                            </div>
                            <div className='attribute-container'>
                                <h5>Abilities</h5>
                                <p>{pokemonInfo.abilities}</p>
                            </div>
                            <div className='attribute-container'>
                                <h5>Types</h5>
                                <div className='container-type'>
                                    {pokemonInfo.types.map(type => {
                                        return (
                                            <div className='label-type' key={type} style={{background: `var(--type-${type})`}}>
                                                <p>{capitalizeFirstLetter(type)}</p>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>

                            <div className="chart-container">
                                <Bar 
                                    className='chart' 
                                    data={chartData} 
                                    options={options}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            )}

            
        </>
    )
}