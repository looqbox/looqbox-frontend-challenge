import type { ThemeConfig } from 'antd';

export const themeConfig: ThemeConfig = {
  token: {
    colorPrimary: '#1677ff',
    borderRadius: 6,
    fontFamily: 'Inter, system-ui, sans-serif',
  },
  components: {
    Card: {
      borderRadiusLG: 8,
    },
    Input: {
      controlHeight: 40,
    },
    Button: {
      controlHeight: 40,
    },
  },
};
