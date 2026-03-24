import type { ThemeConfig } from 'antd'

export const antdTheme: ThemeConfig = {
  token: {
    colorText: '#231F1D',
    colorTextDescription: '#898989',
    colorPrimary: '#E3350D',
    colorSuccess: '#0dbc5d',
    colorError: '#eb5757',
    fontFamily: 'Inter, system-ui, sans-serif',
  },
  components: {
    Progress: {
      defaultColor: '#7ca8f0',
    },
    Card: {
      colorBgContainer: 'var(--white)',
    },
  },
}
