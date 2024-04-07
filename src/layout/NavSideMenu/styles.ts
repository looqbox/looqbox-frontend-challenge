import Sider, { SiderProps as AntSiderProps } from "antd/es/layout/Sider";
import styled from "styled-components";

interface SiderProps extends AntSiderProps {
  collapsed: boolean;
}

export const Container = styled(Sider)<SiderProps>`
  .ant-layout-sider-children {
    display: flex;
    flex-direction: column;
    height: 100%;
    color: ${({ theme }) => theme.pokemon.colors.main.contrast};

    svg {
      color: ${({ theme }) => theme.pokemon.colors.main.contrast};
    }

    #collapse-button {
    }
  }

  .ant-space {
    align-items: center;
    justify-content: space-between;
    padding: ${({ collapsed }) => (collapsed ? "0 1rem" : "0 1.8rem")};

    svg {
      rotate: ${({ collapsed }) => (collapsed ? "0deg" : "180deg")};
      transition: all 0.5s ease-in-out;
      font-size: 1.2rem;
    }
  }

  .ant-menu {
    background-color: transparent;
  }

  .ant-menu-item {
    color: ${({ theme }) => theme.pokemon.colors.main.contrast};
    font-weight: 700;
  }
`;
