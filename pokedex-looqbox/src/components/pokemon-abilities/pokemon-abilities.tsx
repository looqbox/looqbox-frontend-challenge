import { useState, useEffect } from "react";
import getPokemonsAbilities from "../../services/get-pokemon-abilities";
import './pokemon-abilities.css'

const PokemonAbilities = (props: string) => {

    const { abilitiesUrl } = props
    const [ability, setAbility] = useState({})

    useEffect(() => {
        const fetchData = async () => {
            const response = await getPokemonsAbilities(abilitiesUrl)
            setAbility(response)
        }
        fetchData()

    }, [abilitiesUrl])


    return (
        <div className="pokemon-abilities">
            <h4>{ability.name}</h4>
            <p>{ability.effect_entries?.filter((effect) => effect.language?.name === 'en').map((element, index) => {
                return (
                    <li key={index}>
                        {element.effect}
                    </li>
                )
            })}</p>
        </div>
    )
}

export default PokemonAbilities;