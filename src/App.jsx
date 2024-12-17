import styles from "./App.module.css";
import NewTask from "./components/NewTask";
import Tasks from "./components/Tasks";
import { TasksCtxProvider } from "./contexts/TasksCtx.jsx";

function App() {
  return (
    <main className={styles.main}>
      <TasksCtxProvider>
        <NewTask />
        <Tasks />
      </TasksCtxProvider>
    </main>
  );
}

export default App;
