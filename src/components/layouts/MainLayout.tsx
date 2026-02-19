import { Flex, Layout } from 'antd';
import { Outlet } from 'react-router';

const layoutStyle = {
  overflow: 'hidden',
  width: 'calc(50% - 20px)',
  maxWidth: 'calc(50% - 20px)',
  background: 'black',
};

export function MainLayout() {
  return (
    <Flex gap={'middle'} align="center" justify="center" vertical>
      <Layout style={layoutStyle}>
        <main style={{ marginTop: 16 }}>
          <Outlet />
        </main>
      </Layout>
    </Flex>
  );
}
