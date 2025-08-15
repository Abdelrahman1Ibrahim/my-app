// components
import Button from "../../components/Button/Button";

// navigation
import { NavLink, useLocation } from "react-router";

// styles
import styles from "./authHeader.module.css";

export default function AuthHeader() {
  const location = useLocation();
  const loginActive = location.pathname === "/login" ? "active" : "";

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <span className={styles.logo}>
          {loginActive ? (
            <NavLink to="/login"> login </NavLink>
          ) : (
            <NavLink to="/register"> register </NavLink>
          )}
        </span>
        <nav className={styles.nav}>
          <Button type="button" state={loginActive ? "primary" : "secondary"}>
            <NavLink to="/login">login</NavLink>
          </Button>
          <Button type="button" state={!loginActive ? "primary" : "secondary"}>
            <NavLink to="/register">register</NavLink>
          </Button>
        </nav>
      </div>
    </header>
  );
}
