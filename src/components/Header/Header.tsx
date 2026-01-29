import { Button, Drawer, Menu, type MenuProps, Grid } from 'antd';
import { CloseOutlined, MenuOutlined } from '@ant-design/icons';
import { Link, useLocation } from 'react-router-dom';
import { useMemo, useState } from 'react';
import looqBoxLogo from '../../assets/icons/looqbox_logo.svg';

const { useBreakpoint } = Grid;

type MenuItem = Required<MenuProps>['items'][number];

const desktopItems: MenuItem[] = [
  {
    key: 'home',
    className: 'menu-item-first',
    label: (
      <Link to="/">
        <span className="menu-label" data-text="Home">
          Home
        </span>
      </Link>
    ),
  },
  {
    key: '__logo',
    className: 'menu-logo',
    label: (
      <div aria-hidden="true">
        <img src={looqBoxLogo} alt="LooqDex" width={72} height={72} />
      </div>
    ),
  },
  {
    key: 'pokemons',
    className: 'menu-item-last',
    label: (
      <Link to="/pokemons">
        <span className="menu-label" data-text="Pokédex">
          Pokédex
        </span>
      </Link>
    ),
  },
];

export function Header() {
  const { pathname } = useLocation();
  const screens = useBreakpoint();
  const isMobile = !screens.md;

  const [open, setOpen] = useState(false);

  const selectedKeys = useMemo(() => {
    if (pathname === '/') return ['home'];
    if (pathname.startsWith('/pokemons') || pathname.startsWith('/pokemon')) return ['pokemons'];
    return [];
  }, [pathname]);

  const items: MenuItem[] = [
    {
      key: 'home',
      label: (
        <Link to="/">
          <span className="menu-label" data-text="Home">
            Home
          </span>
        </Link>
      ),
      onClick: () => setOpen(false),
    },
    {
      key: 'pokemons',
      label: (
        <Link to="/pokemons">
          <span className="menu-label" data-text="Pokédex">
            Pokédex
          </span>
        </Link>
      ),
      onClick: () => setOpen(false),
    },
  ];

  if (isMobile) {
    return (
      <header className="app-header app-header--mobile">
        <div className="mobile-bar">
          <Link to="/" className="mobile-logo" aria-label="Go to home">
            <img src={looqBoxLogo} alt="Looqbox" height={50} />
          </Link>

          <Button
            aria-label="Open menu"
            icon={<MenuOutlined />}
            onClick={() => setOpen(true)}
            type="text"
          />
        </div>

        <Drawer
          title={null}
          placement="top"
          open={open}
          onClose={() => setOpen(false)}
          size="100vh"
          closable={false}
          styles={{ body: { padding: 0 } }}
        >
          <div className="mobile-drawer">
            <div className="mobile-drawer__top">
              <img src={looqBoxLogo} alt="Looqbox" height={50} />
              <Button
                type="text"
                icon={<CloseOutlined />}
                onClick={() => setOpen(false)}
                aria-label="Close menu"
              />
            </div>

            <Menu mode="inline" selectedKeys={selectedKeys} items={items} />
          </div>
        </Drawer>
      </header>
    );
  }

  return (
    <header className="app-header">
      <Menu
        mode="horizontal"
        selectedKeys={selectedKeys}
        items={desktopItems}
        className="desktop-menu"
      />
    </header>
  );
}
