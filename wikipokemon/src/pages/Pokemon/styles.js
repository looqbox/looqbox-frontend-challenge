import styled from 'styled-components';

export const Background = styled.div`
  img {
    position: absolute;
    opacity: 0.1;
    right: 350px;
    top: 0;
  }
`

export const Header = styled.h1`
  display: flex;
  background: ${props => props.theme.colors.shape};
  height: 120px;
  border-radius: 12px;
  position: relative;
  align-items: center;


  img {
    width: 90px;
  }

  h1 {
    display: flex;
    flex-direction: column;
    color: ${props => props.theme.colors.text};
    font-size: 32px;

    align-items: initial;
    justify-content: center;
  }
`;

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  background: ${props => props.theme.colors.shape};
  margin-top: 42px;
  justify-content: center;

  border-radius: 12px
`;

export const PokemonName = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 8px;

  h1 {
    display: flex;
    text-transform: uppercase;
    letter-spacing: 0.8px;
    font-weight: 900;

    font-size: 42px;
    color: ${props => props.theme.colors.text}
  }

  span {
    margin-left: 18px;
    font-size: 28px;
    color: ${props => props.theme.colors.placeholder};
  }
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
`;

export const Avatar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 8px 0px 32px;


  img {
    max-width: 300px;
    object-fit: cover;
    padding-bottom: 24px
  }
`;

export const Skills = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;

  /* height: 260px; */
  width: 540px;
  padding: 0 16px 16px 0;
  color: ${props => props.theme.colors.shape};
`;

export const SkillsFirstBox = styled.div`
  background: ${props => props.theme.colors.skillFirstBox};
  border-radius: 8px;

  align-items: center;
  display: flex;
  flex-direction: column;

  padding: 24px;

  box-shadow: 4px 4px 16px rgba(0,0,0,0.4);

  div {
    display: flex;
    flex-direction: row;
    margin-top: 8px;
    align-items: center;

    svg {
      color: ${props => props.theme.colors.text};
    }

    div {
      display: flex;
      flex-direction: column;
      margin-left: 16px;
      align-items: center;
      color: ${props => props.theme.colors.text};

      h3 {
        text-transform: uppercase;
        font-size: 16px;
        text-align: center;
      }

      span {
        margin-top: 6px;
        text-decoration: solid;
        text-transform: capitalize;
      }
    }
  }
`;

export const SkillsSecondBox = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 24px;

    div {
      background: ${props => props.theme.colors.skillSecondBox};

      padding: 24px;
      border-radius: 8px;

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;
      box-shadow: 4px 4px 16px rgba(0,0,0,0.4);

    }

    h3 {
      text-transform: uppercase;
    }

    p {
      background-color: ${props => props.theme.colors.background};
      color: ${props => props.theme.colors.text};
      padding: 2px 4px;
      font-size: 12px;
      border-radius: 4px;
      font-weight: 700;
      text-transform: capitalize;
      letter-spacing: 0.3px;
      text-align: center;
    }
`;

export const ButtonBack = styled.button`
  width: 210px;
  height: 56px;
  background: ${props => props.theme.colors.buttonRed};
  border-radius: 5px;
  border: 0;

  margin-top: 16px;
  margin-left: 670px;

  font-weight: bold;

  transition: filter 0.2s;

  a {
    color: ${props => props.theme.colors.buttonExplorePokemons};
  }

  &:hover {
    filter: brightness(0.8);
  }
`;



