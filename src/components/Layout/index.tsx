import { Outlet, useLocation } from 'react-router-dom';
import { Footer } from './components/Footer';
import Header from './components/Header';

function Layout() {
  const location = useLocation();

  return (
    <>
      <Header showCarousel={location.pathname === '/'} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Layout;
