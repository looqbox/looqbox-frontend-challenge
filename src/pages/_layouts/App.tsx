import { Outlet } from 'react-router-dom';

import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';

export function AppLayout() {
  return (
    <div className="flex min-h-screen grid-cols-2 flex-col bg-muted antialiased">
      <Header />

      <Outlet />

      <Footer />
    </div>
  );
}
