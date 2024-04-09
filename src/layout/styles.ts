import { Layout as AntLayout } from "antd";
import { Content as AntContent } from "antd/es/layout/layout";
import { styled } from "styled-components";

export const Layout = styled(AntLayout)`
  min-height: 100vh;
`;

export const Content = styled(AntContent)`
  padding: 2rem 6rem;
  min-height: 80%;
`;
