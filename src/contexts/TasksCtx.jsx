import { createContext, useState, useEffect } from "react";

const TasksCtx = createContext();

export function TasksCtxProvider({ children }) {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(savedTasks);
  }, []);

  function addTaskHandler(task) {
    const newId = Math.random();
    const newTask = {
      id: newId,
      title: task.title,
      description: task.description,
      completed: false,
    };
    setTasks((state) => [newTask, ...state]);

    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    savedTasks.unshift(newTask);
    localStorage.setItem("tasks", JSON.stringify(savedTasks));
  }

  function changeStatus(id) {
    setTasks((state) =>
      state.map((task) => {
        if (task.id === id) {
          return {
            id: task.id,
            title: task.title,
            description: task.description,
            completed: !task.completed,
          };
        }
        return task;
      })
    );

    const savedTasks = JSON.parse(localStorage.getItem("tasks"));
    const newSavedTasks = savedTasks.map((task) => {
      if (task.id === id) {
        return {
          id: task.id,
          title: task.title,
          description: task.description,
          completed: !task.completed,
        };
      }
      return task;
    });
    localStorage.setItem("tasks", JSON.stringify(newSavedTasks));
  }

  function deleteTask(id) {
    setTasks((state) => state.filter((task) => task.id !== id));
    const savedTasks = JSON.parse(localStorage.getItem("tasks"));
    const newSavedTasks = savedTasks.filter((task) => task.id !== id);
    localStorage.setItem("tasks", JSON.stringify(newSavedTasks));
  }

  return (
    <TasksCtx.Provider
      value={{ tasks, addTaskHandler, changeStatus, deleteTask }}
    >
      {children}
    </TasksCtx.Provider>
  );
}

export default TasksCtx;
