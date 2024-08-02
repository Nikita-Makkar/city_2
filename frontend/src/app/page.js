"use client";
import Image from 'next/image';
import styles from './Home.module.css';
import { useState } from 'react';

export default function Home() {
  const [showCircle, setShowCircle] = useState(false);

  const circles = [
    {
      top: '265px', left: '229px', width: '177px', height: '177px', label: 'Транспорт'
    },
    {
      top: '265px', left: '229px', width: '177px', height: '177px', label: 'Собаки'
    },
    {
      top: '265px', left: '229px', width: '177px', height: '177px', label: 'Собаки'
    },

    {
      top: '265px', left: '229px', width: '177px', height: '177px', label: 'Собаки'
    },
    {
      top: '485px', left: '299px', width: '164px', height: '163px', label: 'Мусор'
    },
    {
      top: '570px', left: '464px', width: '157px', height: '158px', label: 'Площадки'
    },
    {
      top: '661px', left: '619px', width: '122px', height: '123px', label: 'Свет'
    },
    {
      top: '655px', left: '773px', width: '147px', height: '146px', label: 'Деревья'
    },
    {
      top: '597px', left: '933px', width: '144px', height: '144px', label: 'Люки'
    },
    {
      top: '542px', left: '1085px', width: '157px', height: '157px', label: 'Ремонт дороги'
    },
    {
      top: '451px', left: '1214px', width: '150px', height: '150px', label: 'Аварии'
    },
    {
      top: '307px', left: '1227px', width: '144px', height: '144px', label: 'Трубы'
    },
    {
      top: '203px', left: '1100px', width: '155px', height: '154px', label: 'Магазин'
    },
    {
      top: '132px', left: '975px', width: '144px', height: '144px', label: 'Уборка дороги'
    },
  
    // { top: '44%', left: '57%', label: 'Дороги' },
    // { top: '70%', left: '39%', label: 'Парк' },
    // { top: '0%', left: '48%', label: 'Дом' },
  ];

  const handleClick = (e) => {
    setShowCircle(true);
  };

  const handleClose = () => {
    setShowCircle(false);
  };

  return (

    <div className={styles.container}>
      <h1 className={styles.header}>Главная</h1>
      <div className={styles.imageContainer}>
        <svg viewBox="0 0 1936 1356" className={styles.svg}>
          <image href="/City.png" width="3826" height="2685" className={styles.image} />
        </svg>
        {/* <Image
         stc="/City.png"
          alt="Descriptive Alt Text"
          layout="intrinsic"
          width={3826}
          height={2685}
          quality={100}
          className={styles.image}
        /> */}
        {circles.map((circle, index) => (
          <div
            key={index}
            className={styles.circle}
            style={{ top: circle.top, left: circle.left, width: circle.width, height: circle.height }}
            onClick={handleClick}
            aria-label={circle.label}
          ></div>
        ))}
      </div >
    </div >
  );
}



// import Map from '../_component/Map';

// export default function Home() {
//   return (
//     <div>
//       <h1>Главная</h1>
//       <Map />
//     </div>
//   );
// }
