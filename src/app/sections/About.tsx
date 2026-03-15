'use client';

import { forwardRef } from 'react';
import styles from '../styles/about.module.css';

const About = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div 
      ref={ref}
      className={styles.wrapper}
    >
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>Oriental Glimpses</h2>
          <p className={styles.description}>
            Welcome to Oriental Glimpses, where we celebrate the <span className={styles.highlight}>rich tapestry</span> of Eastern culture, art, and heritage. 
            Our journey began with a passion for showcasing the <span className={styles.highlight}>timeless beauty</span> and profound wisdom of the Orient.
            <br /><br />
            We believe in preserving cultural authenticity while embracing modern storytelling. Each piece we present 
            is carefully selected to reflect the depth, <span className={styles.highlight}>elegance</span>, and diversity of Eastern civilizations.
          </p>
        </div>
      </div>
    </div>
  );
});

About.displayName = 'About';

export default About;
