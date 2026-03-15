'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation } from 'swiper/modules';
import { useRef } from 'react';
import { HiArrowLongLeft, HiArrowLongRight } from 'react-icons/hi2';
import 'swiper/css';
import 'swiper/css/free-mode';
import styles from '../styles/AdditionalServices.module.css';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';



export default function AdditionalServices() {
  const swiperRef = useRef<any>(null);
  const { language } = useLanguage();
  const t = translations[language].additionalServices;

  const services = [
    { title: t.religious, image: 'Religious Tourism.jpg' },
    { title: t.group, image: 'IMG_2948.PNG' },
    { title: t.conferences, image: 'IMG_2959.PNG' },
    { title: t.jordanPass, image: 'Tour Guides.PNG' },
    { title: t.restaurants, image: 'PrivateVIP Tours.PNG' },
    { title: t.support, image: 't.jpeg' },
  ];

  return (
    <section className={styles.additionalServices}>
      <div className={styles.header}>
        <div className={styles.headerContent}>
          <div>
            <h2 className={styles.title}>{t.title}</h2>
          </div>
          <img src="/right.svg" alt="" className={styles.headerIcon} />
        </div>
        <div className={styles.headerLine}></div>
        <div className={styles.navigationButtons}>
          <button 
            className={styles.navButton} 
            onClick={() => swiperRef.current?.slidePrev()}
            aria-label="Previous"
          >
            <HiArrowLongLeft />
          </button>
          <button 
            className={styles.navButton} 
            onClick={() => swiperRef.current?.slideNext()}
            aria-label="Next"
          >
            <HiArrowLongRight />
          </button>
        </div>
      </div>

      <Swiper
        modules={[FreeMode]}
        slidesPerView={3.5}
        spaceBetween={30}
        freeMode={true}
        className={styles.servicesSwiper}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        breakpoints={{
          320: { slidesPerView: 1.2, spaceBetween: 15 },
          640: { slidesPerView: 2.2, spaceBetween: 20 },
          1024: { slidesPerView: 3.5, spaceBetween: 30 },
        }}
      >
        {services.map((service, index) => (
          <SwiperSlide key={index}>
            <div className={styles.card}>
              <div className={styles.imageWrapper}>
                <img src={service.image} alt={service.title} />
              </div>
              <h3 className={styles.cardTitle}>{service.title}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
