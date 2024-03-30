import React, { ReactNode } from "react";
import { Layout } from "antd";
import CustomHeader from "../Header";
import CustomFooter from "../Footer";
import "./styles.css";

const { Content } = Layout;

type PageProps = {
  children: ReactNode;
};

const Page: React.FC<PageProps> = ({ children }) => (
  <Layout>
    <CustomHeader />
    <Content className="content">{children}</Content>
    <CustomFooter />
  </Layout>
);
export default Page;
