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
  const shadowOverlayRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const { language } = useLanguage();
  const t = translations[language].hero;

  useEffect(() => {
    const isMobile = window.innerWidth <= 768;
    const startX = isMobile ? '-100%' : '-15%';
    const endX = isMobile ? '-20%' : '0%';
    const overlayEndX = isMobile ? '-90%' : '-140%';
    const aboutStartX = isMobile ? '-20%' : '-170%';
    const aboutEndX = isMobile ? '0%' : '-20%';
    const bgScale = isMobile ? 0.90 : 0.90;
    const aboutDelay = isMobile ? 0.2 : 0.05;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: '+=200%',
          scrub: 1,
          pin: true,
          pinSpacing: true,
        }
      });

      tl.fromTo(layerRef.current,
        { x: startX },
        { x: endX, ease: 'power2.inOut' },
        0
      )
      .fromTo(backgroundRef.current,
        { scale: 1 },
        { scale: bgScale, ease: 'power2.inOut' },
        0
      )
      .fromTo(overlayRef.current,
        { x: '0%' },
        { x: overlayEndX, ease: 'power2.inOut' },
        0
      )
      .fromTo(aboutRef.current,
        { x: aboutStartX, opacity: 0 },
        { x: aboutEndX, opacity: 1, ease: 'power2.inOut' },
        aboutDelay
      );

      if (isMobile && shadowOverlayRef.current) {
        tl.fromTo(shadowOverlayRef.current,
          { opacity: 0 },
          { opacity: 1, ease: 'power2.inOut' },
          0.2
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className={styles.heroContainer}>
      <div className={styles.hero}>
        <div className={styles.imageContainer}>
          <div ref={backgroundRef} className={styles.slide} style={{ backgroundImage: 'url(/12345.png)' }} />
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
      
      <div ref={shadowOverlayRef} className={styles.shadowOverlay} />
      
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
