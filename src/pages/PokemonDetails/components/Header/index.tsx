import {
  ContainerBack,
  ContainerImage,
  ContainerLogo,
  StyledContainerHeader,
  TextBack,
} from "./styles";
import ArrowBack from "../../../../assets/icon-arrow-left.svg";
import PokemonLogo from "../../../../assets/logo-pokemon.svg";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate()

  const handleBackToHome = () => {
    navigate("/home")
  }

  return (
    <StyledContainerHeader>
      <ContainerBack onClick={handleBackToHome} >
        <img src={ArrowBack} alt="Arrow back" />

        <TextBack>Voltar</TextBack>
      </ContainerBack>

      <ContainerLogo>
        <ContainerImage onClick={handleBackToHome}>
          <img src={PokemonLogo} alt="Pokemon logo" />
        </ContainerImage>
      </ContainerLogo>
    </StyledContainerHeader>
  );
}
