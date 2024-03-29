import React, { ReactNode } from "react";
import { Layout } from "antd";
import CustomHeader from "../Header";
import "./styles.css";

const { Content } = Layout;

type PageProps = {
  children: ReactNode;
};

const Page: React.FC<PageProps> = ({ children }) => (
  <Layout>
    <CustomHeader />
    <Content className="content">{children}</Content>
  </Layout>
);
export default Page;
