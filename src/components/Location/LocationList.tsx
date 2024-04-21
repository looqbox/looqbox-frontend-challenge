import { NamedAPIResource } from "../../core/models/Pokemon";
import LocationCard from "./LocationCard";

interface LocationListProps {
  locations: NamedAPIResource[];
}

function LocationList({ locations }: LocationListProps) {
  return (
    <div
      className="
      mt-20 w-full max-w-[1200px] flex-1 justify-items-center 
      grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20
    ">
      {locations.map((location, index) => (
        <LocationCard key={index} name={location.name} />
      ))}
    </div>
  );
}

export default LocationList;
