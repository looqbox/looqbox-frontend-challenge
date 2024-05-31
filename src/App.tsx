// vendors
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from 'antd';

// components
import Home from './components/Home';
import CustomHeader from './components/CustomHeader/CustomHeader';
import PokemonDetail from './components/PokemonDetail/PokemonDetail';
import ScrollTop from './components/ScrolTop/ScrollTop';

// constants
const { Content } = Layout;

const App: React.FC = () => {
  return (
    <Layout style={{ backgroundColor: '#ffffff' }}>
      <CustomHeader />

      <Content className="main-content">
        <Routes>
          <Route path="/home" index element={<Home />} />
          <Route path="/PokemonDetail/:name" index element={<PokemonDetail />} />

          <Route path="*" index element={<Home />} />
        </Routes>

        <ScrollTop />
      </Content>
    </Layout>
  );
};

export default App;
