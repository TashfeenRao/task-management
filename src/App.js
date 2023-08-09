import "./App.css";
import { useTaskContext } from "./TaskContext";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Task Management for funfox</h1>
      </header>
      <main>
        <div className='taskForm'>
          <TaskForm />
        </div>
        <div className='taskList'>
          <TaskList />
        </div>
      </main>
    </div>
  );
}

export default App;
