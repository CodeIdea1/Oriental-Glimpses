import React from 'react';
import styles from '../styles/PackageDetails.module.css';

const PackageDetails = () => {
  return (
    <section className={styles.packageDetails}>
      <div className={styles.container}>
      <div className={styles.column}>
        <h3 className={styles.columnTitle}>Included</h3>
        <ul className={styles.list}>
          <li>Transportation</li>
          <li>Hotels</li>
          <li>Breakfast / Lunch / Dinner</li>
          <li>Tour Guide</li>
        </ul>
      </div>
      
      <div className={styles.column}>
        <h3 className={styles.columnTitle}>Not Included</h3>
        <ul className={styles.list}>
          <li>Flights</li>
          <li>Personal expenses</li>
          <li>Entrance tickets</li>
          <li>Insurance</li>
        </ul>
      </div>
      </div>
    </section>
  );
};

export default PackageDetails;
