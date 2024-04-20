import { useParams } from "react-router-dom";
import PokemonInfo from "../components/Pokemon/PokemonInfo";
import PageLayout from "../components/UI/icons/PageLayout";

function PokemonInfoScreen() {
  const { pokemonName } = useParams();

  return (
    <PageLayout>
      <PokemonInfo pokemonName={pokemonName || ""} />
    </PageLayout>
  );
}

export default PokemonInfoScreen;
