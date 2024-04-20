import logoImg from '@/assets/logo-joao-silva.svg';

export function Footer() {
  return (
    <footer className="mt-10 bg-foreground">
      <div className="container flex items-center justify-center gap-2 py-4 text-background">
        Feito com ❤️ por{' '}
        <a
          href="https://joaosilva.dev.br"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={logoImg} alt="Joao Silva Logo" className="w-14" />
        </a>
      </div>
    </footer>
  );
}
