import { Logo } from './Logo';

export function Header() {
  return (
    <header className="h-[93px] border-b-[0.5px] border-background bg-foreground">
      <div className="container flex h-full w-full items-center justify-between dark:bg-background">
        <Logo />
      </div>
    </header>
  );
}
