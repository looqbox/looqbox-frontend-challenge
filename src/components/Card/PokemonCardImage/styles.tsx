import styled from "styled-components";

export const Image = styled.img`
  cursor: pointer;
  transition: transform 0.4s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;
