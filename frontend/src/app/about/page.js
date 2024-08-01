import styles from './About.module.css';

export default function Home() {
  return (

    <div className={styles.container}>
      <h1 className={styles.header}>О проекте</h1>
      <p>Проект моздан для жителей калуги. В этом проекте вы сможете просмотреть информацию о происшествиях в Калуге.</p>
    </div >
  );
}
