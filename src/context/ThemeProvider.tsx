import React, { useState, useEffect } from 'react';
import { ConfigProvider, theme } from 'antd';
import type { ThemeConfig } from 'antd';
import { themeConfig } from '../config/theme';
import { ThemeContext } from './ThemeContext';

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('pokedex-theme');
    return savedTheme === 'dark';
  });

  const { defaultAlgorithm, darkAlgorithm } = theme;

  useEffect(() => {
    localStorage.setItem('pokedex-theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  const currentThemeConfig: ThemeConfig = {
    ...themeConfig,
    algorithm: isDarkMode ? darkAlgorithm : defaultAlgorithm,
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      <ConfigProvider theme={currentThemeConfig}>{children}</ConfigProvider>
    </ThemeContext.Provider>
  );
};
