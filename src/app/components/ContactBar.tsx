import styles from '../styles/contactBar.module.css';

export default function ContactBar() {
  return (
    <div className={styles.contactBar}>
      <div className={styles.phone}>+962 (0) 79 535 664 1</div>
      <div className={styles.divider}>|</div>
      <div className={styles.email}>orientalglimpse@gmail.com</div>
    </div>
  );
}
