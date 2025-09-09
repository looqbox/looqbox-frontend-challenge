import React, { createContext, useState, useMemo, useEffect, useContext } from 'react';
import { ConfigProvider, theme } from 'antd';
import type { ThemeConfig } from 'antd';

type ThemeMode = 'light' | 'dark';

interface ThemeContextType {
    themeMode: ThemeMode;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
    themeMode: 'dark',
    toggleTheme: () => { },
});

const themeConfig: ThemeConfig = {
    token: {
        colorPrimary: '#E63946',
        colorSuccess: '#2A9D8F',
        colorWarning: '#E9C46A',
        colorError: '#E63946',
        borderRadius: 6,
    },
};

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [themeMode, setThemeMode] = useState<ThemeMode>(() => {
        const storedTheme = localStorage.getItem('themeMode') as ThemeMode | null;
        return storedTheme || 'light';
    });

    useEffect(() => {
        localStorage.setItem('themeMode', themeMode);
    }, [themeMode]);

    const toggleTheme = () => {
        setThemeMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
    };

    const contextValue = useMemo(() => ({
        themeMode,
        toggleTheme,
    }), [themeMode]);

    const algorithm = themeMode === 'light' ? theme.defaultAlgorithm : theme.darkAlgorithm;

    return (
        <ThemeContext.Provider value={contextValue}>
            <ConfigProvider theme={{ ...themeConfig, algorithm }}>
                {children}
            </ConfigProvider>
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);