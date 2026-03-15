'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import 'swiper/css';
import 'swiper/css/free-mode';
import styles from '../styles/OurServices.module.css';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

gsap.registerPlugin(ScrollTrigger);



const OurServices = () => {
  const [activeTab, setActiveTab] = useState(0);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const tabsRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const leftIconRef = useRef<HTMLImageElement>(null);
  const rightIconRef = useRef<HTMLImageElement>(null);
  const { language } = useLanguage();
  const t = translations[language].services;

  const servicesData = [
    {
      id: 1,
      title: t.transportation,
      fullTitle: t.transportationFull,
      image: 'Transportation Services.png',
      description: t.transportationDesc
    },
    {
      id: 2,
      title: t.hotels,
      fullTitle: t.hotelsFull,
      image: '/Hotels & Resorts.png',
      description: t.hotelsDesc
    },
    {
      id: 3,
      title: t.guides,
      fullTitle: t.guidesFull,
      image: '/Tour Guides2.PNG',
      description: t.guidesDesc
    },
    {
      id: 4,
      title: t.cultural,
      fullTitle: t.culturalFull,
      image: 'CulturalHistorical Tours.jpg',
      description: t.culturalDesc
    },
    {
      id: 5,
      title: t.desert,
      fullTitle: t.desertFull,
      image: 'Adventure Desert Experiences.JPEG',
      description: t.desertDesc
    },
    {
      id: 6,
      title: t.vip,
      fullTitle: t.vipFull,
      image: 'PrivateVIP Tours.PNG',
      description: t.vipDesc
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        }
      });

      tl.fromTo(headerRef.current,
        { 
          y: 50,
          opacity: 0
        },
        { 
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out'
        }
      )
      .fromTo(leftIconRef.current,
        { 
          x: -50,
          opacity: 0
        },
        { 
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out'
        },
        '-=0.8'
      )
      .fromTo(rightIconRef.current,
        { 
          x: 50,
          opacity: 0
        },
        { 
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out'
        },
        '-=0.8'
      )
      .fromTo(tabsRef.current,
        { 
          y: 30,
          opacity: 0
        },
        { 
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: 'power2.out'
        },
        '-=0.4'
      )
      .fromTo(contentRef.current,
        { 
          y: 40,
          opacity: 0
        },
        { 
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out'
        },
        '-=0.3'
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const container = imageContainerRef.current;
    if (container) {
      container.classList.remove(styles.animating);
      void container.offsetWidth;
      container.classList.add(styles.animating);
    }
  }, [activeTab]);

  const splitTextToLines = (text: string | string[]) => {
    if (Array.isArray(text)) return text;
    return text.split('.').filter(line => line.trim()).map(line => line.trim() + '.');
  };

  return (
    <section ref={sectionRef} className={styles.ourServices}>
      <div ref={headerRef} className={styles.header}>
        <div className={styles.titleWrapper}>
          <Image ref={leftIconRef} src="/left.svg" alt="Decoration" width={50} height={50} className={styles.leftIcon} />
          <h2 className={styles.title}>{t.title}</h2>
          <Image ref={rightIconRef} src="/right.svg" alt="Decoration" width={50} height={50} className={styles.rightIcon} />
        </div>
        <p className={styles.subtitle}>{t.subtitle}</p>
      </div>

      <nav ref={tabsRef} className={styles.tabsNav}>
        <Swiper
          slidesPerView={'auto'}
          spaceBetween={30}
          freeMode={true}
          modules={[FreeMode]}
          className={styles.tabsSwiper}
        >
          {servicesData.map((service, index) => (
            <SwiperSlide key={service.id} className={styles.tabSlide}>
              <button
                className={`${styles.tabButton} ${activeTab === index ? styles.active : ''}`}
                onClick={() => setActiveTab(index)}
              >
                {service.title}
              </button>
            </SwiperSlide>
          ))}
        </Swiper>
      </nav>

      <div ref={contentRef} className={styles.tabContent}>
        <div className={styles.contentWrapper}>
          <div ref={imageContainerRef} className={styles.imageContainer}>
            <img 
              key={activeTab}
              src={servicesData[activeTab].image} 
              alt={servicesData[activeTab].fullTitle}
              className={styles.serviceImage}
            />
          </div>
          <div className={styles.descriptionContainer}>
            <h3 className={styles.serviceTitle} key={`title-${activeTab}`}>
              {servicesData[activeTab].fullTitle.split('&').map((part, i, arr) => (
                <span key={i}>
                  {i > 0 && '&'}{part}{i < arr.length - 1 ? '' : ''}
                </span>
              ))}
            </h3>
            <p className={styles.serviceDescription} key={`desc-${activeTab}`}>
              {splitTextToLines(servicesData[activeTab].description).map((line, index) => (
                <span key={index} className={styles.lineWrapper}>
                  <span>{line}</span>
                </span>
              ))}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
