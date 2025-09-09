import React from 'react';
import { Typography, Row, Col } from 'antd';

const { Title } = Typography;

const DetailsPage: React.FC = () => {
    return (
        <Row justify="center">
            <Col xs={24} md={20} lg={16} xl={12}>
                <Title level={2}>Detalhes do Pokémon</Title>
            </Col>
        </Row>
    );
};

export default DetailsPage;