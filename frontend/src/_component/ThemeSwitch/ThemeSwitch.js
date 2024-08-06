import styles from './ThemeSwitcher.module.css';

const ThemeSwitcher = ({ theme, toggleTheme }) => {
  return (
    <div className={styles.themeSwitchContainer}>
      <label className={styles.switch}>
        <input
          type="checkbox"
          checked={theme === 'dark'}
          onChange={toggleTheme}
        />
        <span className={styles.slider}></span>
      </label>
    </div>
  );
};

export default ThemeSwitcher;
