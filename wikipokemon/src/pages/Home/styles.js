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

export const Title = styled.h1`
  font-size: 28px;
  color: ${props => props.theme.colors.text};
  line-height: 56px;

  margin-top: 32px;
`;

export const Form = styled.form`
  margin: 8px 0 12px 0;
  max-width: 700px;
  position: relative;

  display: flex;

  input {
    flex: 1;
    height: 56px;
    padding: 0 24px;
    border: 0;
    border-radius: 5px 0 0 5px;

    &::placeholder {
      color: ${props => props.theme.colors.placeholder};
    }
  }

  button {
    width: 210px;
    height: 56px;
    background: ${props => props.theme.colors.buttonSearch};
    border-radius: 0px 5px 5px 0px;
    border: 0;
    color: ${props => props.theme.colors.shape};
    font-weight: bold;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.8);
    }
  }
`;

export const Error = styled.h4`
  display: block;
  color: ${props => props.theme.colors.errorInput};
  font-weight: 300;
  letter-spacing: 0.8;
  margin: 2px 0 2px 8px;
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin: 26px auto;
  width: 920px;
  gap: 12px;
  position: relative;
  cursor: pointer;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 320px;
  background: ${props => props.theme.colors.shape};
  border-radius: 12px;
  box-shadow: 6px 6px 21px rgba(0,0,0,0.4);

  a {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;

    justify-content: center;
    align-items: center;
  }

  &:hover {
    transform: translateX(4px);
    transform: translateY(-6px);
  }

  img {
    object-fit: cover;
    width: 100px;
  }

  p {
    font-size: 12px;
    font-style: italic;
    width:100%;
    margin-left: 12px;
    padding: 6px;
    color: ${props => props.theme.colors.text};
    text-transform: capitalize;
  }

  h1 {
    display: flex;
    justify-content: center;
    text-transform: capitalize;

    width: 100%;
    margin-top: 18px;
    font-size: 32px;
    color: ${props => props.theme.colors.text};
  }

  span {
    text-transform: capitalize;
  }
`;

export const PokemonTypes = styled.div`
  display: flex;
  margin-top: 12px;

  span {
    margin: 12px;
    font-size: 12px;
    font-weight: 700;
    border-radius: 5px;
    padding: 4px 16px;
    color: ${props => props.theme.colors.text};
  }
`;

