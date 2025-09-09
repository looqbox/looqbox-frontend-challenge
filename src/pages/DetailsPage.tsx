import React from 'react';
import { Typography, Row, Col } from 'antd';
import { useTranslation } from 'react-i18next';

const { Title } = Typography;

const DetailsPage: React.FC = () => {
    const { t } = useTranslation();
    return (
        <Row justify="center">
            <Col xs={24} md={20} lg={16} xl={12}>
                <Title level={2}>{t('details.title')}</Title>
            </Col>
        </Row>
    );
};

export default DetailsPage;