"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Header.module.css';
import ThemeSwitcher from '../ThemeSwitch/ThemeSwitch';

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);
  const [theme, setTheme] = useState('light');
  const [isMobile, setIsMobile] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 570);
  };

  useEffect(() => {
    document.body.className = theme;
    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, [theme]);
  return (
    <header className={styles.header}>
      <meta name='theme-collor' content='black' />
      <div className={styles.logoContainer}>
        <svg viewBox="0 0 2000 2300" className={styles.svg}>
          <image href="/Gerb.png" width="2000" height="2300" className={styles.image} />
        </svg>
        <strong className={styles.cityName}>Калуга</strong>
      </div>
      <div className={styles.rightContainer}>
        {isMobile && <ThemeSwitcher theme={theme} toggleTheme={toggleTheme} />}
        <div className={`${styles.menuButton} ${menuActive ? styles.active : ''}`} onClick={toggleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <nav className={`${styles.nav} ${menuActive ? styles.active : ''}`}>
        <Link href="/" className={styles.link}>Главная</Link>
        <Link href="/about" className={styles.link}>О проекте</Link>
        {!isMobile && <ThemeSwitcher theme={theme} toggleTheme={toggleTheme} />}
      </nav>
    </header>
  );
};

export default Header;
