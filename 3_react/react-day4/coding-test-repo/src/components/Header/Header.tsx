import styles from "./Header.module.css";

interface HeaderProps {
  total: number;
  easy: number;
  medium: number;
  hard: number;
}

function Header({ total, easy, medium, hard }: HeaderProps) {
  return (
    <div className={styles.header}>
      <h1>📚 코딩테스트 학습 기록</h1>
      <div className={styles.statBox}>
        <div className={styles.stat}>
          <span className={styles.statNumber}>{total}</span>
          <span className={styles.statLabel}>전체</span>
        </div>
        <div className={styles.stat}>
          <span className={styles.statNumber}>{easy}</span>
          <span className={styles.statLabel}>쉬움</span>
        </div>
        <div className={styles.stat}>
          <span className={styles.statNumber}>{medium}</span>
          <span className={styles.statLabel}>보통</span>
        </div>
        <div className={styles.stat}>
          <span className={styles.statNumber}>{hard}</span>
          <span className={styles.statLabel}>어려움</span>
        </div>
      </div>
    </div>
  );
}
export default Header;
