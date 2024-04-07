import { PokemonTheme } from "@/@types/theme";
import { AliasToken } from "antd/es/theme/internal";
import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    type: ThemeTypes;
    antd?: Partial<AliasToken>;
    pokemon: PokemonTheme;
  }
}
