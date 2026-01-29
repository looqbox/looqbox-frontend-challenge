import { Button, Drawer, Menu, type MenuProps, Grid } from 'antd';
import { CloseOutlined, MenuOutlined } from '@ant-design/icons';
import { Link, useLocation } from 'react-router-dom';
import { useMemo, useState } from 'react';

const { useBreakpoint } = Grid;

type MenuItem = Required<MenuProps>['items'][number];

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
            <img src="/src/assets/icons/looqbox_logo.svg" alt="Looqbox" height={50} />
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
              <img src="/src/assets/icons/looqbox_logo.svg" alt="Looqbox" height={50} />
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
      <Menu mode="horizontal" selectedKeys={selectedKeys} className="desktop-menu">
        <Menu.Item key="home" className="menu-item-first">
          <Link to="/">
            <span className="menu-label" data-text="Home">
              Home
            </span>
          </Link>
        </Menu.Item>

        <div className="menu-logo" aria-hidden="true">
          <img src="/src/assets/icons/looqbox_logo.svg" alt="" height={72} />
        </div>

        <Menu.Item key="pokemons" className="menu-item-last">
          <Link to="/pokemons">
            <span className="menu-label" data-text="Pokédex">
              Pokédex
            </span>
          </Link>
        </Menu.Item>
      </Menu>
    </header>
  );
}
