import React, { HTMLAttributes } from "react";
import { PokemonTypeTypes } from "../../types";

export interface ITag extends HTMLAttributes<HTMLDivElement> {
  pokemonType?: PokemonTypeTypes;
  error?: boolean;
  loading?: boolean;
}
