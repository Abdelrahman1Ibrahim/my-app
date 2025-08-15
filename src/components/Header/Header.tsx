
import Theme from "../Theme/Theme";
import styles from "./Header.module.css";

interface HeaderProps {
  onToggleSidebar: () => void;
}

export default function Header({ onToggleSidebar }: HeaderProps) {
  return (
    <header className={styles.header}>
      <div className={styles.leftSection}>
        <button className={styles.sidebarToggle} onClick={onToggleSidebar}>
          ☰
        </button>
        <div className={styles.logo}>
          <h1>Task Manager</h1>
        </div>
      </div>
      <div className={styles.themeToggle}>
        <Theme />
      </div>
    </header>
  );
}
