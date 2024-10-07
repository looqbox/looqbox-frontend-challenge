import styled from "styled-components";
import { Layout } from "antd";

const { Header, Content } = Layout;

export const LayoutContainer = styled(Layout)`
  background-color: ${(props) => props.theme.background};
  height: 100vh;
`;

export const HeaderContainer = styled(Header)`
  background-color: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.white};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
  box-shadow: -1px 4px 23px -6px rgba(0, 0, 0, 0.84);
  padding: 1rem;

  & img {
    height: 100%;
  }
`;

export const ContentContainer = styled(Content)``;
