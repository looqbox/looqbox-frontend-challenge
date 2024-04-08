import { Button } from "antd";
import { Footer as AntFooter } from "antd/es/layout/layout";
import styled from "styled-components";

export const Container = styled(AntFooter)`
  width: 100%;
  background-color: ${({ theme }) => theme.pokemon.colors.main.tertiary};
  color: ${({ theme }) => theme.pokemon.colors.main.contrast};

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Social = styled.div`
  display: flex;
  align-items: center;
`;

export const Info = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const Text = styled.p`
  font-weight: 600;
  font-size: 1rem;
  line-height: 0.8rem;
`;

export const Description = styled(Button)`
  font-weight: 300;
  line-height: 0.8rem;
  font-size: 0.75rem;
  color: ${({ theme }) => theme.pokemon.colors.main.contrast};
  opacity: 0.8;
`;

export const Image = styled.img`
  width: 6rem;
  transition: all 0.5s ease-in-out;
  cursor: pointer;

  &:hover {
    opacity: 0.5;
  }
`;
