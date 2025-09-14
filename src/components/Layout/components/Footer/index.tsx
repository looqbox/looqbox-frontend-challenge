import iconGithub from '../../../../assets/icons/github.svg';
import iconLinkedin from '../../../../assets/icons/linkedin.svg';
import * as S from './styles';
export const Footer = () => {
  return (
    <div>
      <S.Container>
        <S.Copy>
          <span>Conteúdo de Pokémon © Nintendo & The Pokémon Company.</span>
          <span>Fonte de dados: PokeAPI — pokeapi.co.</span>
        </S.Copy>
        <S.SocialMidia>
          <a
            href="https://www.linkedin.com/in/douglas-landim/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <S.Icon src={iconLinkedin} alt="Ícone do LinkedIn" />
          </a>

          <a href="https://github.com/Landim013" target="_blank" rel="noopener noreferrer">
            <S.Icon src={iconGithub} alt="Ícone do GitHub" />
          </a>
        </S.SocialMidia>
      </S.Container>
    </div>
  );
};
