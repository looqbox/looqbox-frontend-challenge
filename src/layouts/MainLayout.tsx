import type { CSSProperties } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { Layout, Typography, Grid, Button, Space } from 'antd';
import { useTranslation } from 'react-i18next';

const { Header, Content, Footer } = Layout;
const { Title } = Typography;
const { useBreakpoint } = Grid;

const MainLayout: React.FC = () => {
    const navigate = useNavigate();
    const screens = useBreakpoint();
    const { t, i18n } = useTranslation();

    const handleTitleClick = () => {
        navigate('/');
    };

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
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
            <Header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Title
                    level={3}
                    style={{ color: 'white', margin: 0, cursor: 'pointer' }}
                    onClick={handleTitleClick}
                >
                    {t('common.appTitle')}
                </Title>
                <Space>
                    <Button onClick={() => changeLanguage('pt-BR')}>PT</Button>
                    <Button onClick={() => changeLanguage('en')}>EN</Button>
                </Space>
            </Header>
            <Content style={contentStyle}>
                <div style={innerContentStyle}>
                    <Outlet />
                </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
                {t('common.footerText', { year: new Date().getFullYear() })}
            </Footer>
        </Layout>
    );
};

export default MainLayout;