import React from 'react';
import { Typography, Row, Col } from 'antd';
import { useTranslation } from 'react-i18next';

const { Title } = Typography;

const HomePage: React.FC = () => {
    const { t } = useTranslation();

    return (
        <Row gutter={[16, 16]}>
            <Col span={24}>
                <Title level={2}>{t('home.title')}</Title>
            </Col>
        </Row>
    );
};

export default HomePage;