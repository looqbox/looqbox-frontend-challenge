import { ArrowLeftOutlined } from '@ant-design/icons';
import { FloatButton } from 'antd';
import { ComparePokemonModal } from '../components/compare-pokemon.component';
import ComparisonChart from '../components/graphic-comparison-pokemon.component';
import { PokemonDetail } from '../components/pokemon-detail.component';
import type { DetailsViewProps } from '../models/types/views/details-view.type';

export function DetailsView(props: DetailsViewProps) {
  const {
    device,
    mainPokemon,
    name,
    openModal,
    pokemonFromCompare,
    secondaryPokemon,
    setOpenModal,
    navigate,
  } = props;

  return (
    <main className="flex flex-col w-screen h-screen">
      <header className="flex w-full p-4 items-center gap-4 justify-center bg-blue-900 text-white shadow-md h-16 sm:h-20">
        <img
          src="/src/assets/images/pokeball.png"
          alt="Pokémon"
          className="h-8 animate-spin-pause"
        />
        <p className="text-sm opacity-80">Detalhes de Pokémon</p>
      </header>

      <section
        className="
           flex flex-1 h-fit flex-col px-4 items-center justify-center gap-6 overflow-auto
           lg:flex-row md:flex-row
          "
      >
        <div className=" flex-shrink-0">
          <PokemonDetail selectedName={name} isMainComponent pokemon={mainPokemon} />
        </div>

        {mainPokemon && secondaryPokemon && device === 'desktop' && (
          <ComparisonChart mainPokemon={mainPokemon} secondaryPokemon={secondaryPokemon} />
        )}

        {pokemonFromCompare && (
          <div className="md:w-80 lg:w-96 flex-shrink-0">
            <PokemonDetail
              selectedName={pokemonFromCompare}
              isMainComponent={false}
              pokemon={secondaryPokemon}
            />
          </div>
        )}

        <ComparePokemonModal open={openModal} onClose={() => setOpenModal(false)} />
      </section>
      <FloatButton
        tooltip="Voltar para página principal"
        icon={<ArrowLeftOutlined />}
        onClick={() => navigate('/')}
      />
    </main>
  );
}
