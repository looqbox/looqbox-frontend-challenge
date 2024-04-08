import { styled } from "styled-components";

export const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
  margin-top: 4rem;

  h1 {
    font-size: 4rem;
    font-weight: 900;
  }

  h2 {
    font-size: 2rem;
    font-weight: 500;
  }

  p {
    font-size: 1.2rem;
    font-weight: 300;
  }

  img {
    width: 30%;
    height: auto;
    object-fit: scale-down;
  }
`;

export const Info = styled.div`
  margin-top: 4rem;

  display: flex;
  flex-direction: column;
`;
