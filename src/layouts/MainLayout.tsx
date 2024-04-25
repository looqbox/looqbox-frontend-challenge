import React, { PropsWithChildren } from 'react';

const MainLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="h-full w-full min-h-screen px-4 py-6 max-sm:px-3 bg-gradient-default">
      <main className="max-w-[1300px] mx-auto">{children}</main>
    </div>
  );
};

export default MainLayout;
