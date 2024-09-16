import { Header } from '../../components/Header/Header';
import { PokemonCard } from '../../components/PokemonCard/PokemonCard';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { PokedexPageStyle, CardsSection } from './PokedexPageStyle';
import Modal from '../../components/Modal/Modal';

export function PokedexPage() {
    const { pokedex, isModalOpen } = useSelector((state: RootState) => state.pokemon);

    return (
        <>
            {isModalOpen && <Modal />}
            <Header />
            <PokedexPageStyle>
                <CardsSection>
                    {pokedex.map((pokemon: any) => (
                        <PokemonCard
                            key={pokemon.id}
                            pokemon={pokemon}
                        />
                    ))}
                </CardsSection>
            </PokedexPageStyle>
        </>
    );
}
