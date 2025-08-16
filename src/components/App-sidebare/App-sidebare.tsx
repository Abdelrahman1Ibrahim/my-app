import { MENU_ITEMS } from "../../data/Sidebare";
import Button from "../Button/Button";
import styles from "./App-sidebare.module.css";
import { NavLink } from "react-router";
import { useSidebar } from "../../store/SidebarContext";

export function AppSidebar() {
  const { isOpen } = useSidebar();

  const handleLogout = () => {
    // Handle logout logic here
    console.log("Logout clicked");
  };

  return (
    <div
      className={`${styles.sidebar} ${isOpen ? styles.open : styles.closed}`}
    >
      <div className={styles.header}>
        <h2>Menu</h2>
      </div>

      <nav className={styles.nav}>
        <ul className={styles.menuList}>
          {MENU_ITEMS.map((item, index) => (
            <li key={index} className={styles.menuItem}>
              <Button type="button" state="primary">
                <NavLink to={item.url}>
                  <span className={styles.icon}>{item.icon}</span>
                  <span className={styles.title}>{item.title}</span>
                </NavLink>
              </Button>
            </li>
          ))}
        </ul>
      </nav>

      <div className={styles.footer}>
        <Button type="button" state="primary" onClick={handleLogout}>
          Logout
        </Button>
      </div>
    </div>
  );
}
