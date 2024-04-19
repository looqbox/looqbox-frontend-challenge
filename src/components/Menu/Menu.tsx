import { IconMap, IconPokeball } from "@tabler/icons-react";
import MenuItem from "./MenuItem";
import IconPokedex from "../UI/icons/IconPokedex";

function Menu() {
  return (
    <nav
      className="
      bg-slate-50 w-full max-w-[1024px] mx-auto 
      mt-8 px-4 flex items-center rounded-2xl shadow-md border-red-500
      ">
      <ul className="flex gap-4 text-black">
        <MenuItem
          url="/"
          text="Home"
          icon={<IconPokeball size={40} className="text-red-500" />}
        />
        <MenuItem url="/pokemons" text="Pokedex" icon={<IconPokedex />} />
        <MenuItem
          url="/locations"
          text="Locais"
          icon={<IconMap size={40} className="text-sky-300" />}
        />
      </ul>
    </nav>
  );
}

export default Menu;
