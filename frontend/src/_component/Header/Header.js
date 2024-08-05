import Link from 'next/link';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <svg viewBox="0 0 2000 2300" className={styles.svg}>
          <image href="/Gerb.png" width="2000" height="2300" className={styles.image} />
        </svg>
        <strong className={styles.cityName}>Калуга</strong>
      </div>
      <nav className={styles.nav}>
        <Link href="/" className={styles.link}>Домашняя</Link>
        <Link href="/about" className={styles.link}>О проекте</Link>
      </nav>
    </header>
  );
};

export default Header;
