import Link from 'next/link';
import styles from './Header.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
      {/* <svg viewBox="0 0 1936 1356" className={styles.svg}>
        <image href="/Gerb.png" width="3826" height="2685" className={styles.image} />
      </svg> */}
      <strong>Калуга</strong>
      <nav className={styles.nav}>
        <Link href="/" className={styles.link}>Домашняя</Link>
        <Link href="/about" className={styles.link}>О проекте</Link>
      </nav>
    </header>
  );
};

export default Header;

