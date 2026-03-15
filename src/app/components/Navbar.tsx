'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ArrowDown } from 'lucide-react';
import styles from '../styles/Navbar.module.css';
import { blinkTransition } from '../utils/blinkTransition';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      // يبدأ التغيير عند 1500px من الأعلى
      setIsScrolled(scrollPosition > 3200);
    };

    handleScroll(); // تشغيل مرة عند التحميل
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCloseMenu = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsMenuOpen(false);
      setIsClosing(false);
    }, 700);
  };

  const handleMenuClick = (section: string) => {
    setIsClosing(true);
    setTimeout(() => {
      blinkTransition(section);
      setIsMenuOpen(false);
      setIsClosing(false);
    }, 700);
  };

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
      <button 
        className={`${styles.menuButton} ${isMenuOpen ? styles.menuOpen : ''}`}
        onClick={() => isMenuOpen ? handleCloseMenu() : setIsMenuOpen(true)}
        aria-label="Menu"
      >
        <span className={styles.menuIcon}></span>
        <span className={styles.menuIcon}></span>
        <span className={styles.menuIcon}></span>
      </button>

      <div className={styles.logoContainer}>
        <Image 
          src="/left.svg" 
          alt="" 
          width={15} 
          height={15}
          className={`${styles.logoDecorLeft} ${isScrolled ? styles.decorScrolled : ''}`}
        />
        <span className={`${styles.logoText} ${isScrolled ? styles.hidden : ''}`}>
          Oriental Glimpses Travel & Tourism
        </span>
        <Image 
          src="/logo6.png" 
          alt="Oriental Glimpses" 
          width={60} 
          height={60}
          className={`${styles.logo} ${isScrolled ? styles.visible : ''}`}
        />
        <Image 
          src="/right.svg" 
          alt="" 
          width={15} 
          height={15}
          className={`${styles.logoDecorRight} ${isScrolled ? styles.decorScrolled : ''}`}
        />
      </div>

      <button className={styles.enquireButton}>
        Enquire
        <span className={styles.arrowIcon}>
          <ArrowDown size={16} strokeWidth={2} />
        </span>
      </button>

      {isMenuOpen && (
        <div className={`${styles.mobileMenu} ${isClosing ? styles.closing : ''}`}>
          <ul className={styles.menuList}>
            <li><a onClick={(e) => { e.preventDefault(); handleMenuClick('home'); }}>Home</a></li>
            <li><a onClick={(e) => { e.preventDefault(); handleMenuClick('experience'); }}>Experience</a></li>
            <li><a onClick={(e) => { e.preventDefault(); handleMenuClick('services'); }}>Services</a></li>
            <li><a onClick={(e) => { e.preventDefault(); handleMenuClick('packages'); }}>Packages</a></li>
            <li><a onClick={(e) => { e.preventDefault(); handleMenuClick('contact'); }}>Contact</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
}
