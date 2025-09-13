import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout, theme, Grid } from 'antd';
import { LanguageSwitcher } from '../common/LanguageSwitcher';
import { ThemeSwitcher } from '../common/ThemeSwitcher';

const { Header } = Layout;
const { useBreakpoint } = Grid;

export const AppHeader: React.FC = () => {
  const navigate = useNavigate();
  const { token } = theme.useToken();
  const screens = useBreakpoint();

  const handleTitleClick = () => {
    navigate('/');
  };

  const logoStyle: React.CSSProperties = {
    height: screens.xs ? '32px' : '40px',
    width: 'auto',
    cursor: 'pointer',
  };

  return (
    <Header
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: token.colorBgElevated,
        borderBottom: `1px solid ${token.colorBorderSecondary}`,
      }}
    >
      <img
        src="/pokedex-logo.png"
        alt="Pokédex Logo"
        style={logoStyle}
        onClick={handleTitleClick}
      />
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <LanguageSwitcher />
        <ThemeSwitcher />
      </div>
    </Header>
  );
};