import styles from '../styles/ImagePage.module.css';

export default function ImagePage() {
  return (
    <div className={styles.container}>
      <img
        src="/images/my-image.png" 
        alt="Descriptive Alt Text"
        className={styles.image}
      />
    </div>
  );
}
