import React, { ReactNode } from "react";
import { Layout, Grid } from "antd";
import CustomHeader from "./Header";

const { Content } = Layout;
const { useBreakpoint } = Grid;

type PageProps = {
  children: ReactNode;
};

const Page: React.FC<PageProps> = ({ children }) => {
  const screens = useBreakpoint();
  const isDesktop = screens.md;

  const ContentStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    minHeight: "calc(100vh - 64px)",
    width: isDesktop ? `992px` : `100vw`,
    alignItems: "center",
    alignSelf: "center",
    textAlign: "center",
    backgroundColor: "E0E2DB",
    padding: "40px 18px",
  };

  return (
    <Layout>
      <CustomHeader />
      <Content style={ContentStyle}>{children}</Content>
    </Layout>
  );
};

export default Page;
