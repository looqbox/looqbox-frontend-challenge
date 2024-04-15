import { styled } from "styled-components";

export const StyledContainerBody = styled.main`
  padding-bottom: 8rem;
`;

export const SearchContainer = styled.div`
  max-width: 76rem;
  margin: 4rem auto 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const TypeSearch = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  > p {
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 1.35;
  }

  @media (max-width: 768px) {
    max-width: 100%;
    padding: 1rem 2rem;
  }
`;

export const Types = styled.div`
  max-width: 60rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  gap: 18px;
  align-items: center;

  @media (max-width: 768px) {
    flex-wrap: nowrap;
    overflow: auto;
    justify-content: initial;
    padding: 15px 0;
  }
`;

export const InputSearchContainer = styled.div`
  max-width: 350px;

  width: 100%;
  position: relative;

  form {
    display: flex;
  }

  &:focus-within {
    button {
      background-color: #2f5aff;
    }
  }

  @media (max-width: 768px) {
    max-width: 300px;
    width: 100%;
  }
`;
export const InputSearch = styled.input`
  width: 100%;
  height: 56px;
  padding: 1rem;
  border-radius: 8px;
  border: 2px solid #4e6aff;
  background-color: transparent;
  color: #fff;
  font-size: 1rem;
  outline: none;

  &::placeholder {
    font-size: 1rem;
    line-height: 1.5rem;
    color: rgba(255, 255, 255, 0.25);
  }

  transition: border 0.3s;

  &:focus {
    border: 2px solid #2f5aff;
  }
`;

export const ButtonSearch = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 0;

  width: 56px;
  height: 56px;
  border-radius: 0px 8px 8px 0px;
  background-color: #4e6aff;

  transition: background-color 0.3s;
`;

export const ContainerDivider = styled.div`
  max-width: 76rem;
  margin: 4.5rem auto 12rem;

  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    height: 56px;
    width: 56px;

    margin: 0 1.5rem;
  }
`;

const BaseDivider = styled.div`
  height: 1px;
  width: 100%;
`;
export const DividerRight = styled(BaseDivider)`
  background: linear-gradient(200deg, rgba(255, 255, 255, 0) 0%, #fff 100%);
`;

export const DividerLeft = styled(BaseDivider)`
  background: linear-gradient(200deg, #fff 0%, rgba(255, 255, 255, 0) 100%);
`;

export const StyledPokeballIcon = styled.img`
  width: 36px;
  height: 36px;
  margin: 0px 1.5rem;
`;

export const ContainerCards = styled.div`
  max-width: 76rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(22rem, 1fr));
  gap: 13.5rem 3rem;
  justify-items: center;

  margin: 0 auto 8rem;

  padding: 1.5rem;
`;

export const PokemonNotFound = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 30px;
`;

export const ContainerGif = styled.div`
  > img {
    border-radius: 999px;
    width: 100px;
    height: 100px;
  }
`;


export const TextPokemonNotFound = styled.p`
  color: #fff;
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  line-height: 1.5;
  text-align: center;
`;
