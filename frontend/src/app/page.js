"use client";
import Image from 'next/image';
import styles from './Home.module.css';
import { useState } from 'react';

export default function Home() {
  const [showCircle, setShowCircle] = useState(false);

  const circles = [
    { top: '50px', left: '17%', label: 'Собаки' },
    // { top: '53%', left: '25%', label: 'Мусор' },
    // { top: '38%', left: '32%', label: 'Площадки' },
    // { top: '47%', left: '45%', label: 'Транспорт' },
    // { top: '44%', left: '57%', label: 'Дороги' },
    // { top: '38%', left: '69%', label: 'Магазины' },
    // { top: '74%', left: '47%', label: 'Столб' },
    // { top: '70%', left: '39%', label: 'Парк' },
    // { top: '62%', left: '52%', label: 'Деревья' },
    // { top: '55%', left: '67%', label: 'Ремонт дороги' },
    // { top: '65%', left: '72%', label: 'Люки' },
    // { top: '51%', left: '76%', label: 'Машина' },
    // { top: '38%', left: '78%', label: 'Трактор' },
    // { top: '20%', left: '68%', label: 'Уборка дороги' },
    // { top: '0%', left: '48%', label: 'Дом' },
  ];

  const handleClick = (e) => {
    setCircleStyle({ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' });
    setShowCircle(true);
  };

  const handleClose = () => {
    setShowCircle(false);
  };

  return (

    <div className={styles.container}>
      <h1 className={styles.header}>Главная</h1>
      <div className={styles.imageContainer}>
        <Image
          src="/City.png"
          alt="Descriptive Alt Text"
          layout="intrinsic"
          width={2733}
          height={1889}
          quality={100}
          className={styles.image}
        />
        {circles.map((circle, index) => (
          <div
            key={index}
            className={styles.circle}
            style={{ top: circle.top, left: circle.left }}
            onClick={handleClick}
            aria-label={circle.label}
          ></div>
        ))}
      </div >
    </div >
  );
}
