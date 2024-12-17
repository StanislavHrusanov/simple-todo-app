import { useContext } from "react";

import styles from "./Task.module.css";
import TasksCtx from "../contexts/TasksCtx";

export default function Task({ task }) {
  const { changeStatus, deleteTask } = useContext(TasksCtx);
  return (
    <div className={styles["task-container"]}>
      <div className={styles["status-container"]}>
        <p>Status</p>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => changeStatus(task.id)}
        />
      </div>
      <div className={styles.content}>
        <h3
          className={task.completed ? styles["title-completed"] : styles.title}
        >
          {task.title}
        </h3>
        <p>{task.description}</p>
      </div>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </div>
  );
}
