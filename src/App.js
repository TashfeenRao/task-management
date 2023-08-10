import "./App.css";
import GroupSelection from "./GroupSelection";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TaskPage from "./TaskPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import the default styles

function App() {
  return (
    <div>
      <ToastContainer />
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
