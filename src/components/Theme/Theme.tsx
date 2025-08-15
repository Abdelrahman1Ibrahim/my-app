// context
import { useContext } from "react";
import { ThemeContext } from "../../store/ThemeProvider";

// styles
import styles from "./theme.module.css";

export default function Theme() {
  const { theme, handelLightTheme, handelDarkTheme } = useContext(ThemeContext);

  return (
    <>
      {theme === "dark" ? (
        <button className={styles.btn} onClick={() => handelLightTheme(theme)}>
          ☀
        </button>
      ) : (
        <button className={styles.btn} onClick={() => handelDarkTheme(theme)}>
          ☾
        </button>
      )}
    </>
  );
}
