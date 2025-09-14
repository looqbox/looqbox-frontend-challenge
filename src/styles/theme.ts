export const theme = {
  colors: {
    primary: '#1677ff',
    background: '#03040cff',
    backgroundCard: '#0B26BE26',
    text: '#ebe8e8ff',
    white: '#ffffff',
    ash: 'linear-gradient(to top, #03040cff 0%, #4fc3f7 100%)',
    brock: 'linear-gradient(to top, #03040cff 0%, #a1887f 100%)',
    misty: 'linear-gradient(to top, #03040cff 0%, #ff8a65 100%)',
    buttonActive: 'linear-gradient(180deg, #20243fff 0%, rgba(30, 53, 180, 0.4) 100%)',
    button: 'linear-gradient(180deg, #151a37 0%, rgba(21, 26, 55, 0) 100%)',
    border: '#3F3E3E',
    gradient: 'linear-gradient(180deg, #151a37 0%, rgba(21, 26, 55, 0) 100%)',
  },
} as const;

export type ThemeType = typeof theme;
