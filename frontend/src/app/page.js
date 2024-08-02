"use client";
import styles from './Home.module.css';
import { useState } from 'react';

export default function Home() {
  const [hoverGroup, setHoverGroup] = useState(null);

  const circles = [
    {
      top: '98px', left: '574px', width: '161px', height: '162px', label: 'Транспорт', url: 'https://bus40.su/'
    },
    {
      top: '27px', left: '425px', width: '149px', height: '148px', label: 'Знаки', url: 'https://bus40.su/'
    },
    {
      top: '188px', left: '406px', width: '177px', height: '178px', label: 'Горка', url: 'https://bus40.su/'
    },
    {
      top: '265px', left: '229px', width: '177px', height: '177px', label: 'Собаки', url: 'https://bus40.su/'
    },
    {
      top: '485px', left: '299px', width: '164px', height: '163px', label: 'Мусор', url: 'https://bus40.su/'
    },
    {
      top: '570px', left: '464px', width: '157px', height: '158px', label: 'Площадки', url: 'https://bus40.su/'
    },
    {
      top: '661px', left: '619px', width: '122px', height: '123px', label: 'Свет', url: 'https://bus40.su/'
    },
    {
      top: '655px', left: '773px', width: '147px', height: '146px', label: 'Деревья', url: 'https://bus40.su/'
    },
    {
      top: '597px', left: '933px', width: '144px', height: '144px', label: 'Люки', url: 'https://bus40.su/'
    },
    {
      top: '542px', left: '1085px', width: '157px', height: '157px', label: 'Ремонт дороги', url: 'https://bus40.su/'
    },
    {
      top: '451px', left: '1214px', width: '150px', height: '150px', label: 'Аварии', url: 'https://bus40.su/'
    },
    {
      top: '307px', left: '1227px', width: '144px', height: '144px', label: 'Трубы', url: 'https://bus40.su/'
    },
    {
      top: '203px', left: '1100px', width: '155px', height: '154px', label: 'Магазин', url: 'https://bus40.su/'
    },
    {
      top: '132px', left: '975px', width: '144px', height: '144px', label: 'Уборка дороги', url: 'https://bus40.su/'
    },
    {
      id: 'home', top: '0px', left: '805px', width: '200px', height: '200px', label: 'Дом', url: 'https://bus40.su/'
    },
    {
      id: 'electricity', top: '8px', left: '766px', width: '96px', height: '94px', label: 'Электричество', zindex: '10', url: 'https://bus40.su/'
    },
    {
      id: 'water', top: '113px', left: '806px', width: '90px', height: '89px', label: 'Вода', zindex: '10', url: 'https://bus40.su/'
    },
  ];

  const handleMouseEnter = (id) => {
    if (id === 'water') {
      setHoverGroup('water');
    } else if (id === 'electricity') {
      setHoverGroup('electricity');
    } else {
      setHoverGroup(null);
    }
  };
  const handleMouseLeave = () => {
    setHoverGroup(null);
  };

  const combinedGroups = circles.filter(circle => ['home', 'electricity', 'water'].includes(circle.id));
  const otherCircles = circles.filter(circle => !['home', 'electricity', 'water'].includes(circle.id));

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Главная</h1>
      <div className={styles.imageContainer}>
        <svg viewBox="0 0 1936 1356" className={styles.svg}>
          <image href="/City.png" width="3826" height="2685" className={styles.image} />
        </svg>

        <div
          className={styles.circleContainer}
          onMouseLeave={handleMouseLeave}
        >
          {combinedGroups.map((circle, index) => (
            <div
              key={index}
              className={`${styles.circle}
                          ${hoverGroup === 'water' && (circle.id === 'home' || circle.id === 'water') ? styles.hover : ''}
                          ${hoverGroup === 'electricity' && (circle.id === 'home' || circle.id === 'electricity') ? styles.hover : ''}`}
              style={{ top: circle.top, left: circle.left, width: circle.width, height: circle.height, zIndex: circle.zindex }}
              aria-label={circle.label}
              onMouseEnter={() => handleMouseEnter(circle.id)}
            ></div>
          ))}
        </div>

        {otherCircles.map((circle, index) => (
          <div
            key={index}
            className={styles.circle}
            style={{ top: circle.top, left: circle.left, width: circle.width, height: circle.height }}
            aria-label={circle.label}
            onClick={() => window.location.href = circle.url}
          ></div>
        ))}
      </div>
    </div>
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
