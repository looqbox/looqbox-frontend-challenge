import { Logo } from './Logo';

export function Header() {
  return (
    <header className="h-16 border-b-[0.5px] border-background bg-foreground lg:h-[93px]">
      <div className="flex h-full w-full items-center justify-center lg:container dark:bg-background lg:justify-between">
        <Logo />
      </div>
    </header>
  );
}
