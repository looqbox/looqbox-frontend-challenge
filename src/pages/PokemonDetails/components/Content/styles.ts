import styled, { keyframes } from "styled-components";

export const StyledContentContainer = styled.div`
  padding: 2rem;
  display: flex;
  margin-top: 4rem;
  flex-direction: column;
`;

export const BodyContainer = styled.div`
  padding: 2rem;
  display: flex;
  margin-top: 2rem;
  flex-direction: column;
`;

export const ContainerPokemon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const PokemonImg = styled.img`
  width: 200px;
  height: 200px;
`;

export const ContainerDivider = styled.div`
  margin: 4.5rem 12rem;

  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    height: 56px;
    width: 56px;

    margin: 0 1.5rem;
  }

  @media (max-width: 600px) {
    margin: 4.5rem auto 3rem;
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

export const BaseStatsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: center;
  align-items: center;
`;

export const StatsLine = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;

export const LineTitle = styled.p`
  color: #fff;
  font-size: 1.2rem;
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
`;

export const LineDescription = styled.p`
  color: #fff;
  font-size: 1rem;
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
`;
export const AttributesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: center;
  align-items: center;
`;

export const AttributesList = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  margin-bottom: 2rem;

  @media (max-width: 768px) {
    gap: 10px;
    margin-bottom: 1rem;
  }
`;

export const ProgressBar = styled.div`
  width: 304px;
  height: 8px;
  border-radius: 4px;
  overflow: hidden;

  background-color: #555;

  @media (max-width: 768px) {
    width: 169px;
  }
`;

const progressBar = keyframes`
    to {
      transform: initial;
    }
`;

export const ProgressBarFill = styled.div<{ status: number }>`
  height: 8px;
  max-width: 100%;
  border-radius: 4px;

  background-color: ${({ status }) => (status >= 50 ? "#1CD80E" : "#FF0000")};

  box-shadow: 0px 0px 12px 4px rgba(28, 216, 14, 0.25);

  transform: translate3d(-100%, 0, 0);
  animation: ${progressBar} 2s forwards;

  width: ${(props) => props.status}%;
`;

export const ChartContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 800px;
  height: 800px;
  margin-bottom: -120px;
`;
