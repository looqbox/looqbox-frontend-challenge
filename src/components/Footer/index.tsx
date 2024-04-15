import {
  ContainerFooter,
  Copyright,
  FooterContent,
  Medias,
  StyledGlobalContainer,
} from "./styles";
import LogoLinkedin from "../../../../assets/logo-linkedin.svg";
import LogoGithub from "../../../../assets/logo-github.svg";


export function Footer() {
  return (
    <StyledGlobalContainer>
      <ContainerFooter>
        <FooterContent>
          <Copyright>
            <p>Direitos de imagem para Nintendo & The Pokémon Company</p>
            <p>Dados pegos da API - pokeapi.co</p>
          </Copyright>
          <Medias>
            <a href="https://www.linkedin.com/in/pedro-furlan-b77707245/">
              <img src={LogoLinkedin} alt="Linkedin logo" />
            </a>

            <a href="https://github.com/PedroFurlann">
              <img src={LogoGithub} alt="Github Logo" />
            </a>
          </Medias>
        </FooterContent>
      </ContainerFooter>

    </StyledGlobalContainer>
  );
}