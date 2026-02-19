import React, { useState } from 'react';
import { Layout, Input, Button, theme as antTheme } from 'antd';
import { SearchOutlined, MoonOutlined, SunOutlined } from '@ant-design/icons';
import { useTheme } from '../../hooks/useTheme';
import { useNavigate, useSearchParams } from 'react-router-dom';
import pokeballIcon from '../../assets/pokeball.svg';

const { Header, Content } = Layout;

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const { isDarkMode, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { token } = antTheme.useToken();

  const currentSearchFromUrl = searchParams.get('search') || '';
  const [searchValue, setSearchValue] = useState(currentSearchFromUrl);
  const [prevSearchParam, setPrevSearchParam] = useState(currentSearchFromUrl);

  if (currentSearchFromUrl !== prevSearchParam) {
    setPrevSearchParam(currentSearchFromUrl);
    setSearchValue(currentSearchFromUrl);
  }

  const handleSearch = (value: string) => {
    const trimmedValue = value.trim().toLowerCase();
    if (trimmedValue) {
      navigate(`/home?search=${trimmedValue}`);
    } else {
      navigate('/home');
    }
  };

  return (
    <Layout style={{ minHeight: '100vh', background: isDarkMode ? '#141414' : '#F5F5F5' }}>
      <Header
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 24px',
          background: isDarkMode ? '#1F1F1F' : '#FFFFFF',
          borderBottom: `1px solid ${isDarkMode ? '#303030' : '#F0F0F0'}`,
          position: 'sticky',
          top: 0,
          zIndex: 1000,
          height: '64px',
        }}
      >
        <div
          style={{ display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer' }}
          onClick={() => navigate('/home')}
        >
          <img src={pokeballIcon} alt='Pokeball' style={{ width: 32, height: 32 }} />
          <h1
            style={{
              margin: 0,
              fontSize: '20px',
              fontWeight: 600,
              color: isDarkMode ? 'rgba(255,255,255,0.85)' : 'rgba(0,0,0,0.85)',
            }}
          >
            Pokedex
          </h1>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <Input
            placeholder='Search Pokemon...'
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            onPressEnter={() => handleSearch(searchValue)}
            prefix={
              <SearchOutlined
                style={{ color: isDarkMode ? 'rgba(255,255,255,0.45)' : 'rgba(0,0,0,0.45)' }}
              />
            }
            allowClear
            style={{
              width: '300px',
              height: '40px',
              borderRadius: '6px',
              backgroundColor: isDarkMode ? '#141414' : '#F5F5F5',
              border: 'none',
              color: isDarkMode ? 'rgba(255,255,255,0.85)' : 'rgba(0,0,0,0.85)',
            }}
          />

          <Button
            onClick={toggleTheme}
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '6px',
              backgroundColor: isDarkMode ? '#141414' : '#F5F5F5',
              border: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: 0,
            }}
            icon={
              isDarkMode ? (
                <SunOutlined style={{ color: '#faad14', fontSize: 18 }} />
              ) : (
                <MoonOutlined style={{ color: 'rgba(0,0,0,0.85)', fontSize: 18 }} />
              )
            }
          />
        </div>
      </Header>

      <Content
        style={{
          padding: '24px',
          maxWidth: '1600px',
          margin: '0 auto',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {children}
      </Content>
    </Layout>
  );
};
