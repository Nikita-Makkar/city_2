"use client";
import styles from './Home.module.css';
import { useState } from 'react';

export default function Home() {

  const circles = [
    {
      top: '98px', left: '574px', width: '161px', height: '162px', label: 'Транспорт', url: 'https://bus40.su/', hoverColor: 'rgba(252,0,0, 0.6)', icon: '/SVG/Bus.svg'
    },
    {
      top: '27px', left: '425px', width: '149px', height: '148px', label: 'Знаки', hoverColor: 'blue', icon: '/SVG/TrafficLight.svg'
    },
    {
      top: '188px', left: '406px', width: '177px', height: '178px', label: 'Детские площадки', url: 'https://map.geoportal40.ru/playgroundmap/#/map/36.299515,54.556535/11', hoverColor: 'green', icon: '/SVG/PlayGrounds.svg'
    },
    {
      top: '265px', left: '229px', width: '177px', height: '177px', label: 'Собаки', url: 'https://otlov.kaluga-gov.ru/', hoverColor: 'blue', icon: '/SVG/Dog.svg'
    },
    {
      top: '485px', left: '299px', width: '164px', height: '163px', label: 'Мусор', url: 'https://map.geoportal40.ru/map_tbo/#/map/35.392134,54.442149/10/1236', hoverColor: 'yellow', icon: '/SVG/Trash.svg'
    },
    {
      top: '570px', left: '464px', width: '157px', height: '158px', label: 'Парк', hoverColor: 'green', icon: '/SVG/Park.svg'
    },
    {
      top: '661px', left: '619px', width: '122px', height: '123px', label: 'Уличное освещение', url: 'https://admin.geoportal40.ru/public_map/geoportal40/lightmap/#36.181756,54.501071/16/6873,6889,6890,6891,6249', hoverColor: 'red', icon: '/SVG/StreetLight.svg'
    },
    {
      top: '655px', left: '773px', width: '147px', height: '146px', label: 'Деревья', hoverColor: 'green', icon: '/SVG/BrokenTree.svg'
    },
    {
      top: '597px', left: '933px', width: '144px', height: '144px', label: 'Люки', hoverColor: 'orange', icon: '/SVG/Sewer.svg'
    },
    {
      top: '542px', left: '1085px', width: '157px', height: '157px', label: 'Ремонт дороги', url: 'https://map.geoportal40.ru/maproads/', hoverColor: 'red', icon: '/SVG/Road.svg'
    },
    {
      top: '451px', left: '1214px', width: '150px', height: '150px', label: 'Аварии', hoverColor: 'blue', icon: '/SVG/Car.svg'
    },
    {
      top: '307px', left: '1227px', width: '144px', height: '144px', label: 'Трубы', hoverColor: 'orange', icon: '/SVG/Pipes.svg'
    },
    {
      top: '203px', left: '1100px', width: '155px', height: '154px', label: 'Магазин', hoverColor: 'green', icon: '/SVG/Shop.svg'
    },
    {
      top: '132px', left: '975px', width: '144px', height: '144px', label: 'Уборка дороги', hoverColor: 'red', icon: '/SVG/Road.svg'
    },
    {
      id: 'home', top: '0px', left: '805px', width: '200px', height: '200px', label: 'Дом', hoverColor: 'blue', icon: '/SVG/Home.svg',
    },
    {
      id: 'electricity', top: '8px', left: '766px', width: '96px', height: '94px', label: 'Электричество', zindex: '10', hoverColor: 'blue', icon: '/SVG/Lamp.svg'
    },
    {
      id: 'water', top: '113px', left: '806px', width: '90px', height: '89px', label: 'Вода', zindex: '10', hoverColor: 'blue', icon: '/SVG/Water.svg'
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

  const handleCircleClick = (url, label) => {
    if (url) {
      window.location.href = url;
    } else {
      alert('Скоро вы увидите раздел "' + label + '" на нашем сайте.');
    }
  };

  const [hoverGroup, setHoverGroup] = useState(null);

  const combinedGroups = circles.filter(circle => ['home', 'electricity', 'water'].includes(circle.id));
  const otherCircles = circles.filter(circle => !['home', 'electricity', 'water'].includes(circle.id));

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Главная</h1>
      <div className={styles.imageContainer}>
        <svg viewBox="0 0 3826 2685" className={styles.svg}>
          <image href="/City.png" width="3826" height="2685" className={styles.image} />
        </svg>

        <div className={styles.circleContainer} onMouseLeave={handleMouseLeave}>
          {combinedGroups.map((circle, index) => (
            <div
              key={index}
              className={`${styles.circle}`}
              style={{
                top: circle.top,
                left: circle.left,
                width: circle.width,
                height: circle.height,
                zIndex: circle.zindex,
              }}
              aria-label={circle.label}
              onMouseEnter={() => handleMouseEnter(circle.id)}
              onClick={() => handleCircleClick(circle.url, circle.label)}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = circle.hoverColor}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = ''}
            >
              <span className={styles.circleText}>{circle.label}</span>
            </div>
          ))}
        </div>
        {otherCircles.map((circle, index) => (
          <div
            key={index}
            className={styles.circle}
            style={{
              top: circle.top,
              left: circle.left,
              width: circle.width,
              height: circle.height,
            }}
            aria-label={circle.label}
            onClick={() => handleCircleClick(circle.url, circle.label)}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = circle.hoverColor}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = ''}
          >
            <span className={styles.circleText}>{circle.label}</span>
          </div>
        ))}

      </div>
      <div className={styles.menu}>
        {circles.map((circle, index) => (
          <div key={index} className={styles.menuCircle}>
            <div className={styles.menuHeader} onClick={() => handleCircleClick(circle.url, circle.label)}>
              <img src={circle.icon} alt={circle.label} className={styles.icon} />
              <span className={styles.title}>{circle.label}</span>
              <span className={styles.arrow}>{'►'}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}