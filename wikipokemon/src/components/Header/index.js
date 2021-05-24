import React, { useContext } from 'react';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';

import logoImg from '../../assets/logo.svg';

import { HeaderApplication } from './styles';

const Header = ({ toggleTheme }) => {
  const { colors, title } = useContext(ThemeContext);

  return (
    <>
      <HeaderApplication>
        <div>
          <img src={logoImg} alt="Logo Pokemon" />
          <h1>
            Wiki <h1>Pokemon</h1>
          </h1>
        </div>

        <Switch
          onChange={toggleTheme}
          checked={title === 'dark'}
          checkedIcon={false}
          uncheckedIcon={false}
          offColor={colors.placeholder}
          onColor={colors.skillFirstBox}
        />
      </HeaderApplication>
    </>
  );
}

export default Header;