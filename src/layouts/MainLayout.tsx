import type { CSSProperties } from 'react';
import { Outlet } from 'react-router-dom';
import { Layout, Grid, theme } from 'antd';
import { AppHeader } from '../components/layout/AppHeader';
import { AppFooter } from '../components/layout/AppFooter';

const { Content } = Layout;
const { useBreakpoint } = Grid;

const MainLayout: React.FC = () => {
    const screens = useBreakpoint();
    const { token } = theme.useToken();

    const contentStyle: CSSProperties = {
        padding: screens.xs ? '16px' : '24px 48px',
    };

    const innerContentStyle: CSSProperties = {
        background: token.colorBgContainer,
        padding: screens.xs ? '16px' : 24,
        borderRadius: token.borderRadiusLG,
        minHeight: 'calc(100vh - 180px)',
    };

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <AppHeader />
            <Content style={contentStyle}>
                <div style={innerContentStyle}>
                    <Outlet />
                </div>
            </Content>
            <AppFooter />
        </Layout>
    );
};

export default MainLayout;