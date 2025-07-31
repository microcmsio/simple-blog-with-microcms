import styles from './not-found.module.css';

export default function NotFound() {
  return (
    <div className={styles.container}>
      <dl>
        <dt className={styles.title}>404</dt>
        <dd className={styles.text}>Page Not Found</dd>
      </dl>
    </div>
  );
}
