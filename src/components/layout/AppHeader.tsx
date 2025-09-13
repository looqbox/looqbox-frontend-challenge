import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout, Typography, theme } from 'antd';
import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from '../common/LanguageSwitcher';
import { ThemeSwitcher } from '../common/ThemeSwitcher';

const { Header } = Layout;
const { Title } = Typography;

export const AppHeader: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { token } = theme.useToken();

  const handleTitleClick = () => {
    navigate('/');
  };

  return (
    <Header
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: token.colorBgElevated,
      }}
    >
      <Title
        level={3}
        style={{ color: token.colorText, margin: 0, cursor: 'pointer' }}
        onClick={handleTitleClick}
      >
        {t('common.appTitle')}
      </Title>
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <LanguageSwitcher />
        <ThemeSwitcher />
      </div>
    </Header>
  );
};
