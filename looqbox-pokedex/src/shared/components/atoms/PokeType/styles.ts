import styled from 'styled-components';

interface SingleTypeProps {
  pokeType: string;
}

export const SingleType = styled.button<SingleTypeProps>`
  padding: 5px 15px;
  border: none;
  border-radius: 4px;
  font-weight: 700;
  font-family: 'Roboto';
  background: var(${props => `--secondary-${props.pokeType}`});
  color: var(${props => `--${props.pokeType}`});
  letter-spacing: 1px;
`;
