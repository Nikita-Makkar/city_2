"use client";
import styles from './Home.module.css';
import { useState } from 'react';

export default function Home() {
  const [hoverGroup, setHoverGroup] = useState(null);

  const circles = [
    {
      top: '98px', left: '574px', width: '161px', height: '162px', label: 'Транспорт', url: 'https://bus40.su/', hoverColor: 'rgba(252,0,0, 0.6)'
    },
    {
      top: '27px', left: '425px', width: '149px', height: '148px', label: 'Знаки', hoverColor: 'blue'
    },
    {
      top: '188px', left: '406px', width: '177px', height: '178px', label: 'Детские площадки', url: 'https://map.geoportal40.ru/playgroundmap/#/map/36.299515,54.556535/11', hoverColor: 'green'
    },
    {
      top: '265px', left: '229px', width: '177px', height: '177px', label: 'Собаки', url: 'https://otlov.kaluga-gov.ru/', hoverColor: 'blue'
    },
    {
      top: '485px', left: '299px', width: '164px', height: '163px', label: 'Мусор', url: 'https://map.geoportal40.ru/map_tbo/#/map/35.392134,54.442149/10/1236', hoverColor: 'yellow'
    },
    {
      top: '570px', left: '464px', width: '157px', height: '158px', label: 'Площадки', hoverColor: 'green'
    },
    {
      top: '661px', left: '619px', width: '122px', height: '123px', label: 'Уличное освещение', url: 'https://admin.geoportal40.ru/public_map/geoportal40/lightmap/#36.181756,54.501071/16/6873,6889,6890,6891,6249', hoverColor: 'red'
    },
    {
      top: '655px', left: '773px', width: '147px', height: '146px', label: 'Деревья', hoverColor: 'green'
    },
    {
      top: '597px', left: '933px', width: '144px', height: '144px', label: 'Люки', hoverColor: 'orange'
    },
    {
      top: '542px', left: '1085px', width: '157px', height: '157px', label: 'Ремонт дороги', url: 'https://map.geoportal40.ru/maproads/', hoverColor: 'red'
    },
    {
      top: '451px', left: '1214px', width: '150px', height: '150px', label: 'Аварии', hoverColor: 'blue'
    },
    {
      top: '307px', left: '1227px', width: '144px', height: '144px', label: 'Трубы', hoverColor: 'orange'
    },
    {
      top: '203px', left: '1100px', width: '155px', height: '154px', label: 'Магазин', hoverColor: 'green'
    },
    {
      top: '132px', left: '975px', width: '144px', height: '144px', label: 'Уборка дороги', hoverColor: 'red'
    },
    {
      id: 'home', top: '0px', left: '805px', width: '200px', height: '200px', label: 'Дом', hoverColor: 'blue'
    },
    {
      id: 'electricity', top: '8px', left: '766px', width: '96px', height: '94px', label: 'Электричество', zindex: '10', hoverColor: 'blue'
    },
    {
      id: 'water', top: '113px', left: '806px', width: '90px', height: '89px', label: 'Вода', zindex: '10', hoverColor: 'blue'
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
      {/* <div className={styles.wrapperList}>
        <div>Дом</div>
      </div> */}
      {/* <div class="wrapper list-themes px-0 mb-4">
        <div class="form__topic"><div id="topic-10541" class="form__topic-header list-themes__item">
          <span data-v-5842af23="" class="ui-icon icon-theme">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon sprite-themes">
              <use data-v-5842af23="" href="/_nuxt/a79fddc87941e4b82ad3ce7171a24afc.svg#i-10541" xlink:href="/_nuxt/a79fddc87941e4b82ad3ce7171a24afc.svg#i-10541"> </use>
            </svg></span> <div data-v-5842af23="" class="form__topic-header-name">Мой двор</div> <div data-v-5842af23="" class="ui-icon icon-action icon-action-open">
            <svg data-v-5842af23="" xmlns="http://www.w3.org/2000/svg" class="open-icon icon sprite-action">
              <use data-v-5842af23="" href="/_nuxt/e0cf1c7b0fe8c0dcca9a08c83087883f.svg#i-dropdown" xlink:href="/_nuxt/e0cf1c7b0fe8c0dcca9a08c83087883f.svg#i-dropdown"></use>
            </svg></div></div>
        </div>
        <div data-v-5842af23="" data-v-6fd6978e="" class="form__topic">
          <div data-v-5842af23="" id="topic-10545" class="form__topic-header list-themes__item">
            <span data-v-5842af23="" class="ui-icon icon-theme"><svg data-v-5842af23="" xmlns="http://www.w3.org/2000/svg" class="icon sprite-themes">
              <use data-v-5842af23="" href="/_nuxt/a79fddc87941e4b82ad3ce7171a24afc.svg#i-10545" xlink:href="/_nuxt/a79fddc87941e4b82ad3ce7171a24afc.svg#i-10545">
              </use></svg></span> <div data-v-5842af23="" class="form__topic-header-name">Мой дом</div> <div data-v-5842af23="" class="ui-icon icon-action icon-action-open">
              <svg data-v-5842af23="" xmlns="http://www.w3.org/2000/svg" class="open-icon icon sprite-action"><use data-v-5842af23="" href="/_nuxt/e0cf1c7b0fe8c0dcca9a08c83087883f.svg#i-dropdown" xlink:href="/_nuxt/e0cf1c7b0fe8c0dcca9a08c83087883f.svg#i-dropdown"></use></svg></div></div> </div><div data-v-5842af23="" data-v-6fd6978e="" class="form__topic"><div data-v-5842af23="" id="topic-10542" class="form__topic-header list-themes__item"><span data-v-5842af23="" class="ui-icon icon-theme"><svg data-v-5842af23="" xmlns="http://www.w3.org/2000/svg" class="icon sprite-themes"><use data-v-5842af23="" href="/_nuxt/a79fddc87941e4b82ad3ce7171a24afc.svg#i-10542" xlink:href="/_nuxt/a79fddc87941e4b82ad3ce7171a24afc.svg#i-10542"></use></svg></span> <div data-v-5842af23="" class="form__topic-header-name">Моя дорога</div> <div data-v-5842af23="" class="ui-icon icon-action icon-action-open"><svg data-v-5842af23="" xmlns="http://www.w3.org/2000/svg" class="open-icon icon sprite-action"><use data-v-5842af23="" href="/_nuxt/e0cf1c7b0fe8c0dcca9a08c83087883f.svg#i-dropdown" xlink:href="/_nuxt/e0cf1c7b0fe8c0dcca9a08c83087883f.svg#i-dropdown"></use></svg></div></div> </div><div data-v-5842af23="" data-v-6fd6978e="" class="form__topic"><div data-v-5842af23="" id="topic-10009" class="form__topic-header list-themes__item"><span data-v-5842af23="" class="ui-icon icon-theme"><svg data-v-5842af23="" xmlns="http://www.w3.org/2000/svg" class="icon sprite-themes"><use data-v-5842af23="" href="/_nuxt/a79fddc87941e4b82ad3ce7171a24afc.svg#i-10009" xlink:href="/_nuxt/a79fddc87941e4b82ad3ce7171a24afc.svg#i-10009"></use></svg></span> <div data-v-5842af23="" class="form__topic-header-name">Мой парк</div> <div data-v-5842af23="" class="ui-icon icon-action icon-action-open"><svg data-v-5842af23="" xmlns="http://www.w3.org/2000/svg" class="open-icon icon sprite-action"><use data-v-5842af23="" href="/_nuxt/e0cf1c7b0fe8c0dcca9a08c83087883f.svg#i-dropdown" xlink:href="/_nuxt/e0cf1c7b0fe8c0dcca9a08c83087883f.svg#i-dropdown"></use></svg></div></div> </div><div data-v-5842af23="" data-v-6fd6978e="" class="form__topic">
          <div data-v-5842af23="" id="topic-10543" class="form__topic-header list-themes__item">
            <span data-v-5842af23="" class="ui-icon icon-theme"><svg data-v-5842af23="" xmlns="http://www.w3.org/2000/svg" class="icon sprite-themes"><use data-v-5842af23="" href="/_nuxt/a79fddc87941e4b82ad3ce7171a24afc.svg#i-10543" xlink:href="/_nuxt/a79fddc87941e4b82ad3ce7171a24afc.svg#i-10543">
            </use></svg></span> <div data-v-5842af23="" class="form__topic-header-name">Общественный транспорт</div>
            <div data-v-5842af23="" class="ui-icon icon-action icon-action-open"><svg data-v-5842af23="" xmlns="http://www.w3.org/2000/svg" class="open-icon icon sprite-action">
              <use data-v-5842af23="" href="/_nuxt/e0cf1c7b0fe8c0dcca9a08c83087883f.svg#i-dropdown" xlink:href="/_nuxt/e0cf1c7b0fe8c0dcca9a08c83087883f.svg#i-dropdown"></use></svg></div></div>
        </div><div data-v-5842af23="" data-v-6fd6978e="" class="form__topic">
          <div data-v-5842af23="" id="topic-10067" class="form__topic-header list-themes__item"><span data-v-5842af23="" class="ui-icon icon-theme">
            <svg data-v-5842af23="" xmlns="http://www.w3.org/2000/svg" class="icon sprite-themes">
              <use data-v-5842af23="" href="/_nuxt/a79fddc87941e4b82ad3ce7171a24afc.svg#i-10067" xlink:href="/_nuxt/a79fddc87941e4b82ad3ce7171a24afc.svg#i-10067"></use></svg></span>
            <div data-v-5842af23="" class="form__topic-header-name">Городская территория</div>
            <div data-v-5842af23="" class="ui-icon icon-action icon-action-open">
              <svg data-v-5842af23="" xmlns="http://www.w3.org/2000/svg" class="open-icon icon sprite-action">
                <use data-v-5842af23="" href="/_nuxt/e0cf1c7b0fe8c0dcca9a08c83087883f.svg#i-dropdown" xlink:href="/_nuxt/e0cf1c7b0fe8c0dcca9a08c83087883f.svg#i-dropdown"></use></svg></div></div>
        </div><div data-v-5842af23="" data-v-6fd6978e="" class="form__topic"><div data-v-5842af23="" id="topic-10062" class="form__topic-header list-themes__item"><span data-v-5842af23="" class="ui-icon icon-theme"><svg data-v-5842af23="" xmlns="http://www.w3.org/2000/svg" class="icon sprite-themes"><use data-v-5842af23="" href="/_nuxt/a79fddc87941e4b82ad3ce7171a24afc.svg#i-10062" xlink:href="/_nuxt/a79fddc87941e4b82ad3ce7171a24afc.svg#i-10062"></use></svg></span> <div data-v-5842af23="" class="form__topic-header-name">Государственные учреждения</div> <div data-v-5842af23="" class="ui-icon icon-action icon-action-open"><svg data-v-5842af23="" xmlns="http://www.w3.org/2000/svg" class="open-icon icon sprite-action"><use data-v-5842af23="" href="/_nuxt/e0cf1c7b0fe8c0dcca9a08c83087883f.svg#i-dropdown" xlink:href="/_nuxt/e0cf1c7b0fe8c0dcca9a08c83087883f.svg#i-dropdown"></use></svg></div></div> </div><div data-v-5842af23="" data-v-6fd6978e="" class="form__topic"><div data-v-5842af23="" id="topic-10544" class="form__topic-header list-themes__item"><span data-v-5842af23="" class="ui-icon icon-theme"><svg data-v-5842af23="" xmlns="http://www.w3.org/2000/svg" class="icon sprite-themes"><use data-v-5842af23="" href="/_nuxt/a79fddc87941e4b82ad3ce7171a24afc.svg#i-10544" xlink:href="/_nuxt/a79fddc87941e4b82ad3ce7171a24afc.svg#i-10544"></use>
        </svg></span> <div data-v-5842af23="" class="form__topic-header-name">Торговля и реклама</div>
          <div data-v-5842af23="" class="ui-icon icon-action icon-action-open">
            <svg data-v-5842af23="" xmlns="http://www.w3.org/2000/svg" class="open-icon icon sprite-action">
              <use data-v-5842af23="" href="/_nuxt/e0cf1c7b0fe8c0dcca9a08c83087883f.svg#i-dropdown" xlink:href="/_nuxt/e0cf1c7b0fe8c0dcca9a08c83087883f.svg#i-dropdown"></use></svg></div></div> </div></div> */}
    </div>
  );
}

