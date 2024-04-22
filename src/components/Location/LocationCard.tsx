import { IconBuildingCastle, IconMap2 } from "@tabler/icons-react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Location } from "../../core/models/Location";
import { useState } from "react";
import { cn } from "./../../utils/index";

interface LocationCardProps {
  name: string;
}

function LocationCard({ name }: LocationCardProps) {
  const [isMouseOver, setIsMouseOver] = useState(false);

  const { data: locationData }: { data: Location | undefined } = useQuery({
    queryKey: ["location", name],
    queryFn: () => {
      return axios
        .get(`https://pokeapi.co/api/v2/location/${name}`)
        .then((response) => response.data);
    },
  });

  return (
    <div
      onMouseOver={() => setIsMouseOver(true)}
      onMouseLeave={() => setIsMouseOver(false)}
      className="relative overflow-hidden w-[280px] h-[240px] rounded-3xl cursor-pointer text-xl font-bold bg-sky-200">
      <div className="z-10 absolute w-full h-full peer"></div>
      <div className="absolute peer-hover:-top-20 peer-hover:-left-16 peer-hover:w-[140%] peer-hover:h-[140%] -top-32 -left-16 w-32 h-44 rounded-full bg-sky-400 transition-all duration-500"></div>
      <div className="absolute flex text-xl items-end justify-end peer-hover:right-0 peer-hover:rounded-b-none peer-hover:bottom-0 peer-hover:items-center peer-hover:justify-center peer-hover:w-full peer-hover:h-full -bottom-32 -right-16 w-36 h-44 rounded-full bg-sky-400 transition-all duration-500">
        <div className={cn("hidden flex-col gap-2", isMouseOver && "flex")}>
          <h2 className="flex items-end gap-2 text-white">
            <IconMap2 size={32} className="text-yellow-300" />
            Region:
          </h2>
          <span className="capitalize text-sm">
            {locationData?.region.name}
          </span>
          <h2 className="flex items-end gap-2 text-white">
            <IconBuildingCastle size={32} className="text-stone-500" />
            Areas:
          </h2>
          <ul>
            {locationData?.areas &&
              locationData.areas.slice(0, 3).map((area) => (
                <li
                  key={area.name}
                  className="capitalize text-sm max-w-[200px] truncate">
                  {area.name.replaceAll("-", " ")}
                </li>
              ))}
            {locationData?.areas && locationData.areas.length > 3 && (
              <li className="capitalize text-sm">...</li>
            )}
          </ul>
        </div>
      </div>
      <div className="w-full h-full items-center justify-center flex uppercase">
        {name.replaceAll("-", " ")}
      </div>
    </div>
  );
}

export default LocationCard;
