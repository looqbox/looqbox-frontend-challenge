import StyledHeader from "@/components/ui/Header";
import { Layout } from "antd/lib";
const { Content } = Layout;

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
    </Layout>
  );
}