import StyledHeader from "@/components/ui/Header";
import { Layout } from "antd/lib";
const { Content, Footer } = Layout;

type MainLayoutProps = {
    children: React.ReactNode
}

export default function MainLayout({children}: MainLayoutProps) {
  return (
    <Layout>
      <StyledHeader />
      <Content style={{ padding: "24px" }}>
        {children}
      </Content>
      <Footer style={{ textAlign: 'center' }}>Pokédex ©2024 Created by <a href="https://devlari.vercel.app/" target="_blank">devlari</a></Footer>
    </Layout>
  );
}