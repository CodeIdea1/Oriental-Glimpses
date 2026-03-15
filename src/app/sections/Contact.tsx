'use client';
import { FaInstagram, FaPhone, FaEnvelope } from 'react-icons/fa';
import styles from '../styles/Contact.module.css';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

export default function Contact() {
  const { language } = useLanguage();
  const t = translations[language].contact;

  return (
    <section className={styles.contact}>
      <div className={styles.footerContent}>
        <div className={styles.footerGrid}>
          <div className={styles.footerColumn}>
            <h3 className={styles.columnTitle}>{t.quickLinks}</h3>
            <ul className={styles.linkList}>
              <li><a href="#home">{t.home}</a></li>
              <li><a href="#experience">{t.experience}</a></li>
              <li><a href="#services">{t.services}</a></li>
              <li><a href="#packages">{t.packages}</a></li>
              <li><a href="#contact">{t.contact}</a></li>
            </ul>
          </div>

          <div className={styles.footerColumn}>
            <h3 className={styles.columnTitle}>{t.contactUs}</h3>
            <div className={styles.contactInfo}>
              <a href="tel:+962795356641" className={styles.contactLink}>
                <FaPhone className={styles.icon} />
                <span>079 535 664 1</span>
              </a>
              <a href="tel:+962793577079" className={styles.contactLink}>
                <FaPhone className={styles.icon} />
                <span>079 357 707 9</span>
              </a>
              <a href="mailto:orientalglimpse@gmail.com" className={styles.contactLink}>
                <FaEnvelope className={styles.icon} />
                <span>orientalglimpse@gmail.com</span>
              </a>
            </div>
          </div>

          <div className={styles.footerColumn}>
            <h3 className={styles.columnTitle}>{t.followUs}</h3>
            <a href="https://instagram.com/Oriental_glimpses" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
              <FaInstagram className={styles.socialIcon} />
              <span>Oriental_glimpses</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
