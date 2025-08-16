
import Theme from "../Theme/Theme";
import styles from "./Header.module.css";
import { useSidebar } from "../../store/SidebarContext";

export default function Header() {
  const { toggleSidebar } = useSidebar();

  return (
    <header className={styles.header}>
      <div className={styles.leftSection}>
        <button className={styles.sidebarToggle} onClick={toggleSidebar}>
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
