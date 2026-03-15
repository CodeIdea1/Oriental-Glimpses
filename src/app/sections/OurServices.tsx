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

gsap.registerPlugin(ScrollTrigger);

const servicesData = [
  {
    id: 1,
    title: 'Transportation',
    fullTitle: 'Transportation Services',
    image: 'Transportation Services.png',
    description: ['Experience <span class="highlight">seamless travel</span> with our <span class="highlight">premium</span>', 'transportation services.', 'From <span class="highlight">luxury vehicles</span> to comfortable coaches, we ensure', 'your journey is as <span class="highlight">memorable</span> as your destination.']
  },
  {
    id: 2,
    title: 'Hotels & Resorts',
    fullTitle: 'Hotels & Resorts.png',
    image: '/Hotels & Resorts.png',
    description: ['Stay in the <span class="highlight">finest hotels</span> and resorts across Jordan.', 'We handpick accommodations that blend <span class="highlight">comfort, luxury,</span>', 'and <span class="highlight">authentic local experiences.</span>']
  },
  {
    id: 3,
    title: 'Tour Guides',
    fullTitle: 'Licensed Tour Guides',
    image: '/Tour Guides2.PNG',
    description: ['Our <span class="highlight">expert guides</span> bring history to life with their <span class="highlight">deep', 'knowledge</span> and passion for Jordan\'s <span class="highlight">rich cultural heritage</span>', 'and <span class="highlight">archaeological wonders.</span>']
  },
  {
    id: 4,
    title: 'Cultural Tours',
    fullTitle: 'Cultural & Historical Tours',
    image: 'CulturalHistorical Tours.jpg',
    description: ['Explore <span class="highlight">ancient civilizations</span> and <span class="highlight">UNESCO World Heritage</span>', 'sites with our <span class="highlight">immersive</span> cultural and historical tours.']
  },
  {
    id: 5,
    title: 'Desert Adventures',
    fullTitle: 'Adventure & Desert Experiences',
    image: 'Adventure Desert Experiences.JPEG',
    description: ['Discover the <span class="highlight">magic of Wadi Rum</span> and Jordan\'s stunning', 'deserts through <span class="highlight">thrilling adventures</span> and <span class="highlight">authentic Bedouin</span>', 'experiences.']
  },
  {
    id: 6,
    title: 'VIP Tours',
    fullTitle: 'Private & VIP Tours',
    image: 'PrivateVIP Tours.PNG',
    description: ['Enjoy <span class="highlight">exclusive access</span> and <span class="highlight">personalized attention</span> with our', '<span class="highlight">luxury private</span> and VIP tour experiences.']
  }
];

const OurServices = () => {
  const [activeTab, setActiveTab] = useState(0);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const tabsRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const leftIconRef = useRef<HTMLImageElement>(null);
  const rightIconRef = useRef<HTMLImageElement>(null);

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
          <h2 className={styles.title}>Our Services</h2>
          <Image ref={rightIconRef} src="/right.svg" alt="Decoration" width={50} height={50} className={styles.rightIcon} />
        </div>
        <p className={styles.subtitle}>Tailor-made itineraries, crafted by our experts</p>
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
                  <span dangerouslySetInnerHTML={{ __html: line }} />
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
