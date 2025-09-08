import { createFileRoute } from "@tanstack/react-router";

import { ContainerLayout } from "@/design-system/layouts/container.layout";
import { PokemonDetails } from "@/features/pokemons/components/pokemon-details";
import { pokemonsEndpoints } from "@/features/pokemons/constants/pokemons.endpoints";
import { pokemonsKeys } from "@/features/pokemons/constants/pokemons.keys";
import { PokemonDto } from "@/features/pokemons/dtos/pokemon.dto";
import { usePokemonDetails } from "@/features/pokemons/use-cases/use-pokemon-details";

export const Route = createFileRoute("/details/$id/")({
  component: DetailsComponent,
});

function DetailsComponent() {
  const { id } = Route.useParams();
  const { pokemon, pokemonIsLoading } = usePokemonDetails({
    key: [pokemonsKeys.byId, id],
    path: pokemonsEndpoints.byId(Number(id)),
    enabled: !!id,
  });

  return (
    <ContainerLayout goBackPath="/">
      <PokemonDetails
        pokemon={pokemon as PokemonDto}
        pokemonIsLoading={pokemonIsLoading}
      />
    </ContainerLayout>
  );
}
