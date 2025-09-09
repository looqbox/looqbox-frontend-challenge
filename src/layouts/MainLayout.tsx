import type { CSSProperties } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { Layout, Typography, Grid } from 'antd';

const { Header, Content, Footer } = Layout;
const { Title } = Typography;
const { useBreakpoint } = Grid;

const MainLayout: React.FC = () => {
    const navigate = useNavigate();
    const screens = useBreakpoint();

    const handleTitleClick = () => {
        navigate('/');
    };

    const contentStyle: CSSProperties = {
        padding: screens.xs ? '16px' : '24px 48px',
    };

    const innerContentStyle: CSSProperties = {
        background: '#fff',
        padding: screens.xs ? '16px' : 24,
        borderRadius: 8,
        minHeight: 'calc(100vh - 180px)',
    };

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Header style={{ display: 'flex', alignItems: 'center' }}>
                <Title
                    level={3}
                    style={{ color: 'white', margin: 0, cursor: 'pointer' }}
                    onClick={handleTitleClick}
                >
                    Looqbox Pokédex
                </Title>
            </Header>
            <Content style={contentStyle}>
                <div style={innerContentStyle}>
                    <Outlet />
                </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
                Looqbox Front-End Challenge ©{new Date().getFullYear()}
            </Footer>
        </Layout>
    );
};

export default MainLayout;