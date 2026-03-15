'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation } from 'swiper/modules';
import { useRef } from 'react';
import { HiArrowLongLeft, HiArrowLongRight } from 'react-icons/hi2';
import 'swiper/css';
import 'swiper/css/free-mode';
import styles from '../styles/AdditionalServices.module.css';

const services = [
  { title: 'Religious Tourism', image: 'Religious Tourism.jpg' },
  { title: 'Group Tours', image: 'IMG_2948.PNG' },
  { title: 'Conferences & Corporate Travel', image: 'IMG_2959.PNG' },
  { title: 'Jordan Pass Assistance', image: 'Tour Guides.PNG' },
  { title: 'Restaurant & Local Experience Reservations', image: 'PrivateVIP Tours.PNG' },
  { title: '24/7 Travel Support', image: 't.jpeg' },
];

export default function AdditionalServices() {
  const swiperRef = useRef<any>(null);

  return (
    <section className={styles.additionalServices}>
      <div className={styles.header}>
        <div className={styles.headerContent}>
          <div>
            <h2 className={styles.title}>Additional Services</h2>
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
