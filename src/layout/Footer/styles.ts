import { Footer as AntFooter } from "antd/es/layout/layout";
import styled from "styled-components";

export const Container = styled(AntFooter)`
  width: 100%;
  background: ${({ theme }) => theme.pokemon.colors.main.primary};
  color: ${({ theme }) => theme.pokemon.colors.main.contrast};
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
`;
