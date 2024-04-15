import styled from "styled-components";

export const StyledContainerHeader = styled.div`
  padding-top: 2rem;
  width: 100%;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    padding-top: 1rem;
    padding-left: 1rem;
  }
`;

export const ContainerLogo = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;

  @media (max-width: 768px) {
    display: none;
  }
`

export const ContainerImage = styled.div`
  transition: 0.3s;

  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }
`

export const ContainerBack = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  width: 30px;
  margin-left: 1.5rem;
  transition: 0.3s;

  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }

  @media (max-width: 768px) {
    margin-left: 0;
  }
`

export const TextBack = styled.p`
  color: #fff;
  font-size: 1rem;
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
`
