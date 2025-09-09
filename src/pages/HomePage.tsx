import React from 'react';
import { Typography, Row, Col } from 'antd';

const { Title } = Typography;

const HomePage: React.FC = () => {
    return (
        <Row gutter={[16, 16]}>
            <Col span={24}>
                <Title level={2}>Lista de Pokémon</Title>
            </Col>
        </Row>
    );
};

export default HomePage;