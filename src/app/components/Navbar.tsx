'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Globe } from 'lucide-react';
import styles from '../styles/Navbar.module.css';
import { blinkTransition } from '../utils/blinkTransition';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const t = translations[language].navbar;

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
          src="/logo3.png" 
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

      <button 
        className={styles.languageButton}
        onClick={() => setIsLangOpen(!isLangOpen)}
      >
        <Globe size={20} />
        <span>{language === 'en' ? 'EN' : language === 'ar' ? 'AR' : language === 'it' ? 'IT' : language === 'he' ? 'HE' : 'ES'}</span>
        {isLangOpen && (
          <div className={styles.languageDropdown}>
            <button onClick={() => { setLanguage('en'); setIsLangOpen(false); }}>English</button>
            <button onClick={() => { setLanguage('ar'); setIsLangOpen(false); }}>العربية</button>
            <button onClick={() => { setLanguage('it'); setIsLangOpen(false); }}>Italiano</button>
            <button onClick={() => { setLanguage('he'); setIsLangOpen(false); }}>עברית</button>
            <button onClick={() => { setLanguage('es'); setIsLangOpen(false); }}>Español</button>
          </div>
        )}
      </button>

      {isMenuOpen && (
        <div className={`${styles.mobileMenu} ${isClosing ? styles.closing : ''}`}>
          <ul className={styles.menuList}>
            <li><a onClick={(e) => { e.preventDefault(); handleMenuClick('home'); }}>{t.home}</a></li>
            <li><a onClick={(e) => { e.preventDefault(); handleMenuClick('experience'); }}>{t.experience}</a></li>
            <li><a onClick={(e) => { e.preventDefault(); handleMenuClick('services'); }}>{t.services}</a></li>
            <li><a onClick={(e) => { e.preventDefault(); handleMenuClick('packages'); }}>{t.packages}</a></li>
            <li><a onClick={(e) => { e.preventDefault(); handleMenuClick('contact'); }}>{t.contact}</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
}
