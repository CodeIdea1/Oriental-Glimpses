'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from '../styles/OurExperience.module.css';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

gsap.registerPlugin(ScrollTrigger);

const OurExperience = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const line1Ref = useRef<HTMLSpanElement>(null);
  const line2Ref = useRef<HTMLSpanElement>(null);
  const line3Ref = useRef<HTMLSpanElement>(null);
  const icon1Ref = useRef<HTMLDivElement>(null);
  const icon2Ref = useRef<HTMLDivElement>(null);
  const icon3Ref = useRef<HTMLDivElement>(null);
  const leftLineRef = useRef<HTMLDivElement>(null);
  const rightLineRef = useRef<HTMLDivElement>(null);
  const { language } = useLanguage();
  const t = translations[language].experience;
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth <= 768);
  }, []);

  useEffect(() => {
    if (isMobile) {
      // في الموبايل لا نحتاج أنيميشن معقد
      const ctx = gsap.context(() => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          }
        });

        tl.fromTo(logoRef.current,
          { 
            scale: 0.8,
            opacity: 0
          },
          { 
            scale: 1,
            opacity: 1,
            duration: 0.8,
            ease: 'power2.out'
          }
        )
        const descElement = sectionRef.current?.querySelector(`.${styles.description}`);
        if (descElement) {
          tl.fromTo(descElement,
            { 
              y: 50,
              opacity: 0
            },
            { 
              y: 0,
              opacity: 1,
              duration: 0.8,
              ease: 'power3.out'
            },
            '-=0.4'
          );
        }
        
        tl.fromTo([icon1Ref.current, icon2Ref.current, icon3Ref.current],
          { 
            opacity: 0,
            scale: 0.3
          },
          { 
            opacity: 1,
            scale: 1,
            duration: 0.8,
            stagger: 0.2,
            ease: 'power2.out'
          },
          '-=0.3'
        );
      }, sectionRef);

      return () => ctx.revert();
    }

    // أنيميشن الشاشات الكبيرة
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        }
      });

      tl.fromTo(logoRef.current,
        { 
          scale: 0.8,
          opacity: 0
        },
        { 
          scale: 1,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out'
        }
      )
      .fromTo([line1Ref.current, line2Ref.current, line3Ref.current],
        { 
          y: 100,
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
      )
      .fromTo(leftLineRef.current,
        { 
          scaleX: 0
        },
        { 
          scaleX: 1,
          duration: 0.8,
          ease: 'power2.out',
          transformOrigin: 'left'
        },
        '-=0.5'
      )
      .fromTo(icon1Ref.current,
        { 
          opacity: 0,
          scale: 0.3
        },
        { 
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: 'power2.out'
        },
        '-=0.3'
      )
      .fromTo(icon2Ref.current,
        { 
          opacity: 0,
          scale: 0.3
        },
        { 
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: 'power2.out'
        },
        '-=0.6'
      )
      .fromTo(icon3Ref.current,
        { 
          opacity: 0,
          scale: 0.3
        },
        { 
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: 'power2.out'
        },
        '-=0.6'
      )
      .fromTo(rightLineRef.current,
        { 
          scaleX: 0
        },
        { 
          scaleX: 1,
          duration: 0.8,
          ease: 'power2.out',
          transformOrigin: 'left'
        },
        '-=0.8'
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className={styles.ourExperience}>
      <div ref={logoRef} className={styles.logoContainer}>
        <Image 
          src="/logo6.png" 
          alt="Oriental Glimpses Logo" 
          width={200} 
          height={200}
          className={styles.logo}
        />
      </div>
      <div className={styles.textContainer}>
        <p className={styles.description}>
          {isMobile ? (
            `${t.line1} ${t.line2} ${t.line3}`
          ) : (
            <>
              <span className={styles.lineWrapper}>
                <span ref={line1Ref} className={styles.line}>{t.line1}</span>
              </span>
              <span className={styles.lineWrapper}>
                <span ref={line2Ref} className={styles.line}>{t.line2}</span>
              </span>
              <span className={styles.lineWrapper}>
                <span ref={line3Ref} className={styles.line}>{t.line3}</span>
              </span>
            </>
          )}
        </p>
      </div>
      
      <div className={styles.iconsContainer}>
        <div ref={leftLineRef} className={styles.iconLine}></div>
        <div ref={icon1Ref} className={styles.iconWrapper}>
          <Image src="/icon1.svg" alt="Icon 1" width={80} height={80} className={styles.icon} priority />
        </div>
        <div ref={icon2Ref} className={styles.iconWrapper}>
          <Image src="/icon2.svg" alt="Icon 2" width={80} height={80} className={styles.icon} priority />
        </div>
        <div ref={icon3Ref} className={styles.iconWrapper}>
          <Image src="/icon3.svg" alt="Icon 3" width={80} height={80} className={styles.icon} priority />
        </div>
        <div ref={rightLineRef} className={styles.iconLine}></div>
      </div>
    </section>
  );
};

export default OurExperience;
