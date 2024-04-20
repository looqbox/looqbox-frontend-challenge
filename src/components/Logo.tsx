import { Link } from 'react-router-dom';

import logoImg from '@/assets/logo.svg';

export function Logo() {
  return (
    <Link to="/">
      <img src={logoImg} alt="Logo escrito Pokémon" />
    </Link>
  );
}
