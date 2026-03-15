'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from '../styles/TourPackages.module.css';

gsap.registerPlugin(ScrollTrigger);

const packages = [
  { tour: '3 Day Tour', price: '$570', destinations: ['Amman', 'Petra', 'Dead Sea'], image: ' Petra2.png' },
  { tour: '5 Day Tour', price: '$900', destinations: ['Amman', 'Madaba', 'Mount Nebo', 'Petra', 'Wadi Rum', 'Dead Sea'], image: 'Wadi Rum.png' },
  { tour: '7 Day Tour', price: '$1225', destinations: ['Amman', 'Jerash', 'Ajloun', 'Madaba', 'Mount Nebo', 'Petra', 'Wadi Rum', 'Dead Sea'], image: 'Dead Sea.jpg' },
  { tour: '10 Day Tour', price: '$1695', destinations: ['Amman', 'Jerash', 'Ajloun', 'Umm Qais', 'Pella', 'Al Salt', 'Madaba', 'Mount Nebo', 'Karak', 'Petra', 'Wadi Rum', 'Aqaba', 'Dead Sea', 'Desert Castles'], image: 'aqaba.png' }
];

export default function TourPackages() {
  const sectionRef = useRef<HTMLElement>(null);
  const triggersRef = useRef<ScrollTrigger[]>([]);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const leftIconRef = useRef<HTMLImageElement>(null);
  const rightIconRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    // Fade in animation
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
      .fromTo(cardsRef.current?.children,
        { 
          y: 60,
          opacity: 0
        },
        { 
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out'
        },
        '-=0.4'
      );
    }, sectionRef);

    // Image parallax animation
    const images = sectionRef.current.querySelectorAll(`.${styles.packageCard} img`);
    
    images.forEach((img) => {
      const trigger = ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1,
        onUpdate: (self) => {
          gsap.set(img, { x: `${-25 + (self.progress * 28)}%` });
        },
      });
      triggersRef.current.push(trigger);
    });

    return () => {
      ctx.revert();
      triggersRef.current.forEach(trigger => trigger.kill());
      triggersRef.current = [];
    };
  }, []);

  return (
    <section ref={sectionRef} className={styles.tourPackages}>
      <div ref={headerRef} className={styles.header}>
        <div className={styles.titleWrapper}>
          <img ref={leftIconRef} src="/left.svg" alt="" className={styles.leftIcon} />
          <h2 className={styles.title}>Tour Packages</h2>
          <img ref={rightIconRef} src="/right.svg" alt="" className={styles.rightIcon} />
        </div>
        <p className={styles.subtitle}>Discover Jordan with our exclusive packages</p>
      </div>

      <div ref={cardsRef} className={styles.packagesGrid}>
        {packages.map((pkg, index) => (
          <div key={index} className={styles.packageCard}>
            <img src={pkg.image} alt={pkg.tour} />
            <div className={styles.cardContent}>
              <h3 className={styles.tourName}>{pkg.tour}</h3>
              <div className={styles.price}>{pkg.price}</div>
              <div className={styles.destinations}>
                {pkg.destinations.map((destination, idx) => (
                  <span key={idx} className={styles.destination}>
                    {destination}
                  </span>
                ))}
              </div>
            </div>
            {/* <button className={styles.bookButton}>Book Now</button> */}
          </div>
        ))}
      </div>
    </section>
  );
}
