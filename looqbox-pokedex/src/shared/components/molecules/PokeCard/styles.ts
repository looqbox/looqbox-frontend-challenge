import styled from 'styled-components';

interface ContainerProps {
  pokeType?: string | undefined;
}

export const Container = styled.div<ContainerProps>`
  max-width: 400px;
  width: 100%;
  height: 125px;
  position: relative;
  cursor: pointer;

  mix-blend-mode: normal;
  border-radius: 8px;
  background: var(${props => `--${props.pokeType}`});

  display: flex;
  justify-content: space-between;

  animation: apperFromLeft 0.4s normal;

  @keyframes apperFromLeft {
    from {
      opacity: 0;
      transform: translateX(-10%);
    }

    to {
      opacity: 1;
      transform: translateX(0%);
    }
  }
`;

export const IndexAndName = styled.section<ContainerProps>`
  h1 {
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 28px;

    color: var(${props => `--secondary-${props.pokeType}`});

    mix-blend-mode: normal;
  }
`;

export const InfoSection = styled.section`
  padding: 15px;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Types = styled.section`
  display: flex;
  gap: 10px;
`;

export const SingleType = styled.button<ContainerProps>`
  padding: 5px 15px;
  border: none;
  border-radius: 4px;
  font-weight: 700;
  font-family: 'Roboto';
  background: var(${props => `--secondary-${props.pokeType}`});
  color: var(${props => `--${props.pokeType}`});
  letter-spacing: 1px;
`;

export const IconType = styled.object`
  width: 200px;
`;

export const FigureIconType = styled.figure<ContainerProps>`
  overflow: hidden;

  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  svg path {
    fill: var(${props => `--secondary-${props.pokeType}`});
  }
`;

export const FigurePokeImage = styled.figure`
  display: flex;
  align-items: flex-end;

  position: absolute;
  top: -55px;
  right: -25px;

  img {
    width: 150px;
  }
`;
