import { Layout as AntLayout } from "antd";
import { Content as AntContent } from "antd/es/layout/layout";
import { styled } from "styled-components";

export const Layout = styled(AntLayout)`
  min-height: 100vh;

  .ant-layout {
    background-image: ${({ theme }) =>
      theme.type === "light"
        ? `url("/assets/images/background-light.png")`
        : `url("/assets/images/background-dark.png")`};

    background-size: cover;
  }
`;

export const Content = styled(AntContent)`
  padding: 2rem 6rem;
  min-height: 80%;
`;
