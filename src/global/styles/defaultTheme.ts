export default {
  grid: {
    container: '130rem'
  },
  border: {
    radius: '0.8rem'
  },
  font: {
    family:
      "Poppins, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    regular: 400,
    light: 300,
    bold: 700,
    medium: 500,
    sizes: {
      xsmall: '1.2rem',
      small: '1.4rem',
      medium: '1.6rem',
      large: '1.8rem',
      xlarge: '2.0rem',
      xxlarge: '2.8rem',
      huge: '5.2rem'
    }
  },
  colors: {
    identity: {
      primary: '#DC0A2D'
    },
    type: {
      bug: '#A7B723',
      dark: '#75574C',
      dragon: '#7038F9',
      electric: '#F8CF30',
      fairy: '#EE99AC',
      fighting: '#C12239',
      fire: '#F57D31',
      flying: '#A891EC',
      ghost: '#705898',
      grass: '#78C84E',
      ground: '#DECB81',
      ice: '#9AD6DF',
      normal: '#AAA67F',
      poison: '#A43E9E',
      psychic: '#F85888',
      rock: '#B69E31',
      steel: '#B7B9D0',
      water: '#6493EB'
    },
    grayscale: {
      dark: '#212121',
      medium: '#666666',
      light: '#DEDEDE',
      background: '#EFEFEF',
      white: '#FFFFFF'
    }
  },
  spacings: {
    xxsmall: '0.8rem',
    xsmall: '1.6rem',
    small: '2.4rem',
    medium: '3.2rem',
    large: '4.0rem',
    xlarge: '4.8rem',
    xxlarge: '5.6rem'
  },
  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50
  },
  transition: {
    fast: '0.1s ease-in-out',
    default: '0.3s ease-in-out'
  }
} as const
