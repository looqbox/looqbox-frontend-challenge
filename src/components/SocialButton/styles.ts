import { Button as AntButton } from "antd";
import styled from "styled-components";

export const Button = styled(AntButton)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;

  h5 {
    font-size: 0.5rem;
    font-weight: 600;
    line-height: 0.8rem;
    color: ${({ theme }) => theme.pokemon.colors.main.contrast};
    opacity: 0.8;
  }
`;

export const Icon = styled.div`
  width: 2rem;
  height: 2rem;
  transition: all 0.5s ease-in-out;

  &:hover {
    opacity: 0.5;
  }
`;
