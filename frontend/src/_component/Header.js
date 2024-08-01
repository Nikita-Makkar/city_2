import Link from 'next/link';

const Header = () => {
  return (
    <header>
      <strong>Калуга</strong>
      <nav>
        <Link href="/">Домашняя</Link>
        <Link href="/about">О проекте</Link>
      </nav>
    </header>
  );
};

export default Header;

