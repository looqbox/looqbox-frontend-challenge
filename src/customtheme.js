import { createMuiTheme } from "@material-ui/core/styles";

const customTheme = createMuiTheme({
  palette: {
    primary: {
      light: '#33e17e',
      main: '#00da5d',
      dark: '#00c455',
      contrastText: '#58595b',
    },
    secondary: {
      light: '#e7e9ee',
      main: '#f0f2f5',
      dark: '#6d6e71',
      contrastText: '#000',
    },
  },
  typography: {
    fontFamily: [
      'Poppins',
      'sans-serif',
    ].join(','),
  },
})

export default customTheme;