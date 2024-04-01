import StyledHeader from "@/components/ui/Header";
import { Layout } from "antd/lib";
import Head from "next/head";
const { Content, Footer } = Layout;

type MainLayoutProps = {
    title: string,
    children: React.ReactNode
}

export default function MainLayout({title, children}: MainLayoutProps) {
  return (
    <Layout>
      <Head>
        <title>{title}</title>
      </Head>
      <StyledHeader />
      <Content style={{ padding: "24px" }}>
        {children}
      </Content>
      <Footer style={{ textAlign: 'center' }}>Pokédex ©2024 Created by <a href="https://devlari.vercel.app/" target="_blank">devlari</a></Footer>
    </Layout>
  );
}