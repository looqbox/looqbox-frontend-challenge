import './PokemonItem.css'

const PokemonItem = ({ pokemon }) => {

    const type = pokemon.types[0].type.name
    const style = `${type} card-front`
    const styleBack = `${type}-back card-back`

    return (
        <div className="card">
            <div className="card-inner">
                <div className={style}>
                    <h2>{pokemon.name}</h2>
                    <img
                        src={pokemon.sprites.other.dream_world.front_default}
                        alt="Pokemon"
                        style={{
                            marginTop: '15%',
                            height: '85px',
                            weight: '85px'
                        }}
                    />
                    <ul>
                        <li style={{ 
                            marginTop: '20%'
                        }}>
                            <strong>Type: </strong>
                            {type}
                        </li>
                    </ul>
                </div>
                <div className={styleBack}>
                    <h3>{pokemon.name}</h3>
                    <ul style={{ marginTop: '20%' }}>
                        <li>
                            <strong>Height: </strong>
                            {pokemon.height}
                        </li>
                        <li>
                            <strong>Weight: </strong>
                            {pokemon.weight}
                        </li>
                        <li>
                            <strong>Ability: </strong>
                            {pokemon.abilities[0].ability.name}
                        </li>
                        <li>
                            <strong>Species: </strong>
                            {pokemon.species.name}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default PokemonItem