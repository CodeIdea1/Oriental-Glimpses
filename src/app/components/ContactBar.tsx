import styles from '../styles/contactBar.module.css';

export default function ContactBar() {
  return (
    <div className={styles.contactBar}>
      <div className={styles.phone}>+962 (0) 7 9123 4567</div>
      <div className={styles.divider}>|</div>
      <div className={styles.email}>INFO@ORIENTAL.COM</div>
    </div>
  );
}
