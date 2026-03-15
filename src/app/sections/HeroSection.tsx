'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from '../styles/herSection.module.css';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const layerRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const { language } = useLanguage();
  const t = translations[language].hero;

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: '+=300%',
          scrub: 1,
          pin: true,
        }
      });

      tl.fromTo(layerRef.current,
        { x: '-18%' },
        { x: '0%', ease: 'none', duration: 1 }
      )
      .fromTo(overlayRef.current,
        { x: '0%' },
        { x: '-90%', ease: 'none', duration: 1 },
        0
      )
      .fromTo(aboutRef.current,
        { x: '-100%', opacity: 0 },
        { x: '0%', opacity: 1, ease: 'none', duration: 1 }
      )
      .to({}, { duration: 1 });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className={styles.heroContainer}>
      <div className={styles.hero}>
        <div className={styles.imageContainer}>
          <div className={styles.slide} style={{ backgroundImage: 'url(/bb.png)' }} />
        </div>
        <div ref={layerRef} className={styles.layer} style={{ backgroundImage: 'url(/layer6.png)' }} />
        <div ref={overlayRef} className={styles.overlay}>
          <h1>
            {t.title.split(' ').map((word, i) => (
              <span key={i}>{word}<br /></span>
            ))}
          </h1>
        </div>
      </div>
      
      <div ref={aboutRef} className={styles.aboutSection}>
        <div className={styles.aboutContainer}>
          <div className={styles.aboutContent}>
            <h2 className={styles.aboutTitle}>{t.aboutTitle}</h2>
            <p className={styles.aboutDescription}>
              {t.aboutDescription}
              <br /><br />
              {t.aboutDescription2}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
