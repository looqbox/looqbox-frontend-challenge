import { CardContainer, InfoContainer } from "./styles";

export function PokemonCard() {
  return (
    <CardContainer hoverable title="#001">
      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" />
      <InfoContainer>
        <p>Bulbassaur</p>
      </InfoContainer>
    </CardContainer>
  );
}
