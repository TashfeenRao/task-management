import "./App.css";
import { useTaskContext } from "./TaskContext";
import TaskForm from "./TaskForm";

function App() {
  const { tasks, addTask, completeTask, deleteTask } = useTaskContext();
  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Task Management for funfox</h1>
      </header>
      <main>
        <TaskForm addTask={addTask} />
      </main>
    </div>
  );
}

export default App;
