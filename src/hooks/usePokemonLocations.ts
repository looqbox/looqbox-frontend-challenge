import { getLocations } from "../core/usecases/Locations/getLocations";
import { useQuery } from "@tanstack/react-query";

export const usePokemonLocations = (page: number) => {
  const fetchLocations = async () => {
    const response = await getLocations(
      `https://pokeapi.co/api/v2/location?offset=${(page - 1) * 20}&limit=20`
    );

    return response;
  };

  const { data: locations, isLoading } = useQuery({
    queryKey: ["locations", page],
    queryFn: fetchLocations,
  });

  return { locations, isLoading };
};
