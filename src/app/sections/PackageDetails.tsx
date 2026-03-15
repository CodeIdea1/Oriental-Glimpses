'use client';
import React from 'react';
import styles from '../styles/PackageDetails.module.css';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

const PackageDetails = () => {
  const { language } = useLanguage();
  const t = translations[language].packageDetails;

  return (
    <section className={styles.packageDetails}>
      <div className={styles.container}>
      <div className={styles.column}>
        <h3 className={styles.columnTitle}>{t.included}</h3>
        <ul className={styles.list}>
          <li>{t.transportation}</li>
          <li>{t.hotels}</li>
          <li>{t.meals}</li>
          <li>{t.guide}</li>
        </ul>
      </div>
      
      <div className={styles.column}>
        <h3 className={styles.columnTitle}>{t.notIncluded}</h3>
        <ul className={styles.list}>
          <li>{t.flights}</li>
          <li>{t.personal}</li>
          <li>{t.tickets}</li>
          <li>{t.insurance}</li>
        </ul>
      </div>
      </div>
    </section>
  );
};

export default PackageDetails;
