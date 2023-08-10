import "./App.css";
import GroupSelection from "./GroupSelection";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TaskPage from "./TaskPage";

function App() {
  return (
    <div>
      <Router>
        <header className='App-header'>
          <h1>Task Management for funfox</h1>
        </header>
        <main>
          <Routes>
            <Route path='/' element={<GroupSelection />} />
            <Route path='/tasks/:groupId' element={<TaskPage />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
