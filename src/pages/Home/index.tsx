import React from 'react';
import { Layout, Flex } from 'antd';
import AppHeader from '../../components/Header';
import AppContent from '../../components/Content';

const Home: React.FC = () => (
    <Flex gap="middle" wrap="wrap">
        <Layout className="layout">
        <AppHeader />
        <AppContent />
        </Layout>
    </Flex>
);

export default Home;
