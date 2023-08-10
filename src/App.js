import "./App.css";
import GroupSelection from "./GroupSelection";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TaskPage from "./TaskPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import the default styles2
import FoxAnimation from "./fox-animation.json";
import Lottie from "lottie-react";
const logoImage = process.env.PUBLIC_URL + "/funfox_logo.png";

function App() {
  return (
    <div>
      <ToastContainer />
      <Router>
        <header className='App-header'>
          <Lottie animationData={FoxAnimation} style={{ width: "10%" }} />
          <div className='title'>
            <h1>Task Management</h1>
            <img src={logoImage} alt='Logo' style={{ width: "150px" }} />
          </div>
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
