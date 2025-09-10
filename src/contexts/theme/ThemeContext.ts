import { createContext } from 'react';

export type ThemeMode = 'light' | 'dark';

export interface ThemeContextType {
    themeMode: ThemeMode;
    toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType>({
    themeMode: 'dark',
    toggleTheme: () => { },
});


