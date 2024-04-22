function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex min-h-screen flex-col items-center py-8 px-2 md:px-6">
      {children}
    </main>
  );
}

export default PageLayout;
