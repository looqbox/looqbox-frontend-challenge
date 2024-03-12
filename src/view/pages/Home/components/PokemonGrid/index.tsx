import { usePokemonInformationContext } from "../../../../../hooks/usePokemonInformationContext"

import { Button, Flex } from "antd";
import { PokeCard } from "../../../../components/PokeCard";

import Pokeball from "../../../../../assets/icons/PokeBall";

import "./_styles.scss";
import { DeleteOutlined } from "@ant-design/icons";

export function PokemonGrid() {
    const { pokemonListData, ref, filteredPokemonList, handleSearchClear } = usePokemonInformationContext();

    const pokemonData = filteredPokemonList.length
    ? filteredPokemonList 
    : (pokemonListData ? pokemonListData.pages.flatMap(page => page.pokemons) : []);
    
    return (
        <>
            {Boolean(pokemonData.length) && (
                <>
                {Boolean(filteredPokemonList.length) && (
                    <Button 
                        type="primary" 
                        onClick={handleSearchClear} 
                        icon={<DeleteOutlined />}
                        style={{marginTop: 24}}
                    >
                        Limpar busca
                    </Button>
                )}
                <Flex vertical style={{marginTop: 24}}>
                    <Flex gap={16} wrap={"wrap"} justify={"start"} style={{marginBottom: 24}}>
                        <>
                            {pokemonData.map((pokemon) => (
                                <PokeCard.Root type={pokemon.types[0].type.name} id={pokemon.id} key={pokemon.id}>
                                    <PokeCard.Id>{pokemon.id}</PokeCard.Id>
                                        <Flex vertical justify="space-between" flex="1" gap={24}>
                                            <PokeCard.Title>{pokemon.name}</PokeCard.Title>
                                            <PokeCard.Details pokemon={pokemon}/>
                                        </Flex>
                                    <PokeCard.Image pokemon={pokemon} />
                                </PokeCard.Root>
                            ))}
                        </>
                    </Flex>
                    {!filteredPokemonList.length && (
                        <div className="pokeball-loading" ref={ref}><Pokeball /></div>
                    )}
                </Flex>
                </>
            )}
        </>
    )
}