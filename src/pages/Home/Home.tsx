// images and styles
import taskTodo from "./Pending.png";
import styles from "./home.module.css";

// components
import Button from "../../components/Button/Button";

export default function Home() {
  return (
    <>
      <div className={styles.header}>
        <h1>Welcome back , UserName 👋</h1>
      </div>
      <div className={styles.content}>
        <div className={`${styles.left} ${styles.card}`}>
          <div className={styles.top}>
            <p>
              <img src={taskTodo} alt="Task Todo" />
              <span>To Do</span>
            </p>
            <form>
              <Button type="button" state="primary">
                + Add Task
              </Button>
            </form>
          </div>
          <p className={styles.date}>the date will be here</p>
        </div>
      </div>
    </>
  );
}
