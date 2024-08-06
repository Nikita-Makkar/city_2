import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.visitors}>
          <h2>Посетителям</h2>
          <ul>
            <li>Техподдержка</li>
            <li>Регламент обработки информации на портале «Наш город»</li>
            <li>Политика в отношении обработки персональных данных</li>
            <li>Часто задаваемые вопросы</li>
            <li>Рассказать друзьям</li>
            <li>Для СМИ</li>
          </ul>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>Все материалы сайта доступны по лицензии <a href="https://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a></p>
        <div className={styles.social}>
          <img src="/SVG/VK.svg" alt="VK" className={styles.icon} />
          <img src="/SVG/TG.svg" alt="TG" className={styles.icon} />
          {/* <img src="/SVG/OK.svg" alt="OK" className={styles.icon} /> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
