import React from 'react';
import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom';
import { ConfigProvider, Layout } from 'antd';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Details from './pages/Details';
import NotFound from './pages/NotFound';



const { Content } = Layout;

const App: React.FC = () => (
  <ConfigProvider
    theme={{
      token: {
        colorPrimary: '#EF5350',
        borderRadius: 12,
        fontFamily: "'Nunito', sans-serif",
      },
    }}
  >
    <BrowserRouter>
      <Layout style={{ minHeight: '100vh' }}>
        <Navbar />
        <Content>
          <Routes>
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route path="/home" element={<Home />} />
            <Route path="/details/:name" element={<Details />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Content>
      </Layout>
    </BrowserRouter>
  </ConfigProvider>
);

export default App;
