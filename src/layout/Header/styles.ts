import { Switch as AntSwitch } from "antd";
import { Header as AntdHeader } from "antd/es/layout/layout";
import styled from "styled-components";

export const Container = styled(AntdHeader)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 6rem;
  height: 6rem;
  width: 100%;

  background: ${({ theme }) => theme.pokemon.colors.main.primary};
  color: ${({ theme }) => theme.pokemon.colors.main.contrast};
`;

export const Main = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

export const Logo = styled.img`
  width: 10rem;
  transition: all 0.5s ease-in-out;
  cursor: pointer;

  &:hover {
    opacity: 0.5;
  }
`;

export const Title = styled.h1`
  font-size: 2rem;
`;

export const Switch = styled(AntSwitch)`
  .ant-switch-inner-checked {
    margin-top: 2px;
  }

  .ant-switch-inner-unchecked {
    margin-top: 1px;
  }

  .ant-switch-inner {
    background: ${({ checked }) =>
      checked ? "rgba(255, 255, 255, 0.3)" : "rgba(0, 0, 0, 0.3)"};

    img {
      transition: all 0.5s ease-in-out;
      opacity: 0.5;
    }
  }
`;
