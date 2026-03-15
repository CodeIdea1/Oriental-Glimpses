'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from '../styles/herSection.module.css';

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const layerRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);

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
            Oriental<br />Glimpses
          </h1>
        </div>
      </div>
      
      <div ref={aboutRef} className={styles.aboutSection}>
        <div className={styles.aboutContainer}>
          <div className={styles.aboutContent}>
            <h2 className={styles.aboutTitle}>Oriental Glimpses</h2>
            <p className={styles.aboutDescription}>
              Welcome to Oriental Glimpses, where we celebrate the <span className={styles.highlight}>rich tapestry</span> of Eastern culture, art, and heritage. 
              Our journey began with a passion for showcasing the <span className={styles.highlight}>timeless beauty</span> and profound wisdom of the Orient.
              <br /><br />
              We believe in preserving cultural authenticity while embracing modern storytelling. Each piece we present 
              is carefully selected to reflect the depth, <span className={styles.highlight}>elegance</span>, and diversity of Eastern civilizations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
