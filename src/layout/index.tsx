import { Layout as AntLayout } from "antd";
import { Content as AntContent } from "antd/es/layout/layout";
import { useState } from "react";
import { Outlet } from "react-router-dom";

import { useTheme } from "@/hooks/useTheme";
import { Footer } from "@/layout/Footer";
import { Header } from "@/layout/Header";
import { NavSideMenu } from "@/layout/NavSideMenu";

import * as S from "./styles";

type LayoutProps = {
  children?: React.ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  const { theme, toggleTheme } = useTheme();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <S.Layout>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <AntLayout>
        <NavSideMenu collapsed={collapsed} setCollapsed={setCollapsed} />
        <AntContent
          style={{
            margin: "1.5rem",
            minHeight: 280,
          }}
        >
          {children || <Outlet />}
        </AntContent>
      </AntLayout>
      <Footer />
    </S.Layout>
  );
};
