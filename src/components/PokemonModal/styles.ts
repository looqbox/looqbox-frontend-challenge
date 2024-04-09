import { PokemonSpecieColor } from "@/@types/theme";
import { Modal as AntModal, ModalProps as AntModalProps } from "antd";
import { styled } from "styled-components";

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
  }

  .ant-modal-body {
    padding: 0 2rem;
    display: flex;
    flex-direction: column;
    width: 100%;

    h2 {
      text-transform: uppercase;
      font-size: 1.7rem;
      font-weight: 900;
    }
  }

  aside {
    color: ${({ speciescolor }) => speciescolor.dark};
  }
`;

export const ModalAside = styled.aside`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 100%;
  flex: 1;
  position: relative;

  strong {
    position: absolute;
    top: 1rem;
    right: 1rem;
    font-size: 2rem;
  }

  img {
    width: 400px;
    transition: transform 0.5s ease-in-out;

    &:hover {
      transform: scale(1.1);
    }
  }
`;

export const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  img {
    cursor: pointer;
    transition: transform 0.5s ease-in-out;

    &:hover {
      transform: scale(1.1);
    }
  }
`;
