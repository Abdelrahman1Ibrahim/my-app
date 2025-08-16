// styles
import style from "./todo.module.css";

// types
import { todo as Itodo } from "../../types/index";

export default function Prgress_NotStarted(todo: Itodo) {
  return (
    <div className={style.todo}>
      <p className={style.header}>
        <span className={`${style.status} ${style[todo.status]}`}></span>
        <button className="edit">...</button>
      </p>
      <h2 className={style.title}>{todo.title}</h2>
      <p className={style.description}>{todo.description}</p>
      <p className={style.footer}>
        <span className={style.priority}>
          <span className={style.priorityText}>Priority :</span>
          <span className={`${style.result} ${style[todo.priority ?? ""]}`}>
            {todo.priority}
          </span>
        </span>
        <span className={style.statusTodo}>
          <span className={style.statusText}>Status :</span>
          <span className={`${style.result} ${style[todo.status]} `}>
            {todo.status}
          </span>
        </span>
        <span className={style.date}>
          {todo.updatedAt !== null || undefined || ""
            ? "Updated At :" + todo.updatedAt
            : "Created At :" + todo.createdAt}
        </span>
      </p>
    </div>
  );
}
