import React from 'react';
import { Layout, Typography } from 'antd';
import { Link, useLocation } from 'react-router-dom';

const { Header } = Layout;
const { Title } = Typography;

const Navbar: React.FC = () => {
  const location = useLocation();

  return (
    <Header
      style={{
        background: 'linear-gradient(135deg, #EF5350 0%, #D32F2F 100%)',
        padding: '0 32px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        boxShadow: '0 4px 20px rgba(211,47,47,0.4)',
        position: 'sticky',
        top: 0,
        zIndex: 100,
        height: 64,
      }}
    >
      <Link to="/home" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 12 }}>
        <span style={{ fontSize: 28 }}>⚡</span>
        <Title
          level={4}
          style={{
            color: '#fff',
            margin: 0,
            fontFamily: "'Nunito', sans-serif",
            fontWeight: 900,
            letterSpacing: '-0.5px',
          }}
        >
          Pokedex
        </Title>
      </Link>

      <nav style={{ display: 'flex', gap: 24 }}>
        {[
          { to: '/home', label: 'Home' },
          { to: '/about', label: 'About' },
        ].map(({ to, label }) => (
          <Link
            key={to}
            to={to}
            style={{
              color: location.pathname.startsWith(to) ? '#FFD700' : 'rgba(255,255,255,0.85)',
              fontWeight: 700,
              fontFamily: "'Nunito', sans-serif",
              fontSize: 15,
              textDecoration: 'none',
              paddingBottom: 2,
              borderBottom: location.pathname.startsWith(to) ? '2px solid #FFD700' : '2px solid transparent',
              transition: 'all 0.2s',
            }}
          >
            {label}
          </Link>
        ))}
      </nav>
    </Header>
  );
};

export default Navbar;
