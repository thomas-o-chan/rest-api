import styles from "./header.module.css";

export default function Header() {
  return (
    <div className={styles.header}>
      <h1 className={styles.header_title}>Action Queries</h1>
    </div>
  );
}
