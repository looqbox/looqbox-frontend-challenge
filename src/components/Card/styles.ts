import {
  CardProps as AntCardProps,
  Modal as AntModal,
  ModalProps as AntModalProps,
  Card,
} from "antd";
import { styled } from "styled-components";

import { PokemonSpecieColor } from "@/@types/theme";

type CardProps = {
  speciescolor: PokemonSpecieColor;
} & AntCardProps;

export const Container = styled(Card)<CardProps>`
  height: 16rem;
  min-width: 12rem;
  overflow: hidden;

  background: ${({ speciescolor }) => speciescolor.dark};
  box-shadow: ${({ theme }) =>
    theme.type === "light"
      ? "0 4px 8px rgba(0, 0, 0, 0.1)"
      : "0 4px 8px rgba(255, 255, 255, 0.1)"};

  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    scale: 1.1;
    box-shadow: ${({ theme }) =>
      theme.type === "light"
        ? "4px 8p 8px rgba(0, 0, 0, 0.4)"
        : "4px 8p 8px rgba(255, 255, 255, 0.4)"};
    border: 2px solid ${({ speciescolor }) => speciescolor.light};
  }
`;

export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3.5rem;

  .anticon-loading {
    font-size: 5rem;
    color: rgba(255, 255, 255, 0.3);
  }
`;

export const CardContent = styled.div`
  display: flex;
  flex: 1;
  gap: 1rem;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  color: ${({ theme }) => theme.pokemon.colors.main.contrast};
  font-weight: 900;
`;

export const CardFooter = styled.div`
  width: 100%;
  color: ${({ theme }) => theme.pokemon.colors.main.contrast};
  font-weight: 900;
  font-size: 1rem;
  text-align: center;
`;

type ModalProps = {
  speciescolor: PokemonSpecieColor;
} & AntModalProps;

export const Modal = styled(AntModal)<ModalProps>`
  .ant-modal .ant-modal-content {
    background: transparent;
    border: none;
  }

  .ant-modal-content {
    display: flex;
    overflow: hidden;
  }

  .ant-modal-header {
    border-radius: 1rem;

    display: flex;
    justify-content: center;
    align-items: center;
    background: ${({ speciescolor }) => speciescolor.main};
    color: ${({ theme }) => theme.pokemon.colors.main.contrast};
  }

  .ant-modal-title {
    display: flex;
    aside {
      display: flex !important;
      justify-content: center;
      align-items: center;
      width: 300px;
      height: 100%;
      flex: 1;
    }
  }

  .ant-modal-body {
    padding: 2rem;
    h2 {
      text-transform: uppercase;
      font-size: 1.5rem;
      font-weight: 900;
    }
  }

  .ant-modal-footer {
    display: none;
  }
`;
