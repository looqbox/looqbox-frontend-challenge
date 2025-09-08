import { Flex, Layout } from "antd";
import { PropsWithChildren } from "react";

type PageLayoutProps = PropsWithChildren<{
  className?: string;
}>;

export function PageLayout({ children }: PageLayoutProps) {
  return (
    <Layout>
      <Flex className="w-dvw h-dvh flex-col gap-5 overflow-auto pb-10!">
        {children}
      </Flex>
    </Layout>
  );
}
