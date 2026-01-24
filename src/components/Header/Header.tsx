import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { Link, useLocation } from 'react-router-dom';

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
  {
    label: <Link to="/">Home</Link>,
    key: 'home',
  },
  {
    label: <Link to="/pokemons">Pokémons</Link>,
    key: 'pokemons',
  },
];

export function Header() {
  const { pathname } = useLocation();
  const selectedKey = (() => {
    if (pathname === '/') return ['home'];
    if (pathname.startsWith('/pokemons') || pathname.startsWith('/pokemon')) return ['pokemons'];
    return [];
  })();

  return <Menu selectedKeys={selectedKey} mode="horizontal" items={items} />;
}
