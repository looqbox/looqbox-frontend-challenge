function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="flex items-center justify-center h-24 border-t-2 border-zinc-300">
      <p>
        <a
          href="https://portfolio.brunosouzadev.com"
          target="_blank"
          className="text-sky-600 transition hover:text-sky-800 font-black">
          Bruno Souza
        </a>{" "}
        - Copyright © {year}
      </p>
    </footer>
  );
}

export default Footer;
