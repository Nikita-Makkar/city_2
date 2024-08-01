import styles from './Map.module.css';
import Image from 'next/image';

export default function Map() {
    return (
        <div className={styles.mapWrapper}>
            <Image
                src="/City.png"
                alt="Map Image"
                layout="intrinsic"
                width={3826}
                height={2685}
                quality={100}
                className={styles.mapImage}
            />
            <svg viewBox="0 0 1936 1356" className={styles.svg}>
                <circle data-title="Дорожные знаки" className={styles.continent} cx="461.11652" cy="167.76526" r="120.085701" />
                <circle data-title="Детские площадки" className={styles.continent} cx="450.16653" cy="467.11301" r="144.968857" />
            </svg>
        </div>

    );
}
