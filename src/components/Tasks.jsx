import { useContext } from "react";

import Task from "./Task";
import styles from "./Tasks.module.css";
import TasksCtx from "../contexts/TasksCtx";

export default function Tasks() {
  const { tasks } = useContext(TasksCtx);
  return (
    tasks.length !== 0 && (
      <div className={styles.container}>
        <h2>Tasks</h2>
        <div>
          {tasks.length !== 0 &&
            tasks.map((task) => <Task key={task.id} task={task} />)}
        </div>
      </div>
    )
  );
}
