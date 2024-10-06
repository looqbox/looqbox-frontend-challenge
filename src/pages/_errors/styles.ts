import styled from "styled-components";

export const PageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => `${props.theme.primary}CC`};
  color: ${(props) => props.theme.white};
  flex-direction: column;
  gap: 2rem;

  & img {
    width: 5rem;
  }

  & h1 {
    font-weight: 900;
    font-size: 3rem;
  }

  & a {
    text-decoration: none;
    color: ${(props) => props.theme.white};

    &:hover {
      text-decoration: underline;
    }
  }
`;
