import React from 'react';
import { Switch } from 'antd';
import { SunOutlined, MoonOutlined } from '@ant-design/icons';
import { useTheme } from '../../contexts/theme';

export const ThemeSwitcher: React.FC = () => {
  const { themeMode, toggleTheme } = useTheme();

  return (
    <Switch
      checkedChildren={<SunOutlined />}
      unCheckedChildren={<MoonOutlined />}
      onChange={toggleTheme}
      checked={themeMode === 'light'}
    />
  );
};
