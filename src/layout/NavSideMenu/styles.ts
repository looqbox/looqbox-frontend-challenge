import Sider, { SiderProps as AntSiderProps } from "antd/es/layout/Sider";
import styled from "styled-components";

interface SiderProps extends AntSiderProps {
  collapsed: boolean;
}

export const Container = styled(Sider)<SiderProps>`
  border-inline-end: 1px solid rgba(253, 253, 253, 0.12);

  .ant-layout-sider-children {
    display: flex;
    flex-direction: column;
    height: 100%;
    color: ${({ theme }) => theme.pokemon.colors.main.contrast};
    background-color: ${({ theme }) => theme.pokemon.colors.main.secondary};
    padding: 1rem 0;

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
      rotate: ${({ collapsed }) => (collapsed ? "180deg" : "360deg")};
      transition: all 0.5s ease-in-out;
      font-size: 1.2rem;
    }
  }
  .ant-menu-light,
  .ant-menu-root,
  .ant-menu-light.ant-menu-root.ant-menu-vertical,
  .ant-menu-inline.ant-menu {
    background-color: transparent;
    border: none;
  }

  .ant-menu-item {
    color: ${({ theme }) => theme.pokemon.colors.main.contrast};
    font-weight: 700;
  }
`;

export const SkeletonList = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 1rem;
  padding: 1rem;
`;
