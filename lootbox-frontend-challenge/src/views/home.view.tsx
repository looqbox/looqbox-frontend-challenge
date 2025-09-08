import { Button } from 'antd';
import { InputSearchPokemonComponent } from '../components/input-search-pokemon.component';
import { PokemonCardComponent } from '../components/pokemon-card.component';
import type { HomeViewProps } from '../models/types/views/home-view.type';

export function HomeView(props: HomeViewProps) {
  const { data, isFetching, setOffset } = props;
  return (
    <main className="flex max-w-screen flex-col items-center h-screen w-full bg-gray-100 gap-4 overflow-hidden">
      <header className="flex w-full p-4  items-center gap-4 justify-center bg-blue-900 text-white  shadow-md">
        <img
          src="/src/assets/images/pokeball.png"
          alt="Pokémon"
          className="h-8 animate-spin-pause"
        />
        <p className="text-sm opacity-80">Explore e busque seus Pokémon favoritos</p>
        <InputSearchPokemonComponent />
      </header>

      <article className="flex flex- flex-wrap gap-8 mx-auto overflow-auto p-4 scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-300 justify-center">
        {data?.map((props) => (
          <PokemonCardComponent key={props.name} {...props} />
        ))}

        <div className="w-full flex justify-center mt-4">
          <Button
            type="primary"
            loading={isFetching}
            onClick={() => setOffset((prev) => prev + 50)}
            className="w-40"
          >
            {isFetching ? 'Carregando...' : 'Carregar mais'}
          </Button>
        </div>
      </article>
    </main>
  );
}
