import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from './Navigation.jsx';
import Login from "./Admin/Login.jsx"
import Dashboard from './Admin/Dashboard.jsx';
import SLogin from "./Student/SLogin.jsx";
import SRegister from './Student/SRegister.jsx';
import SDashboard from './Student/SDashboard.jsx';
import TLogin from "./Teacher/TLogin.jsx";
import TDashboard from './Teacher/TDashboard.jsx';
import Page from './Admin/Page.jsx';
import Homepage from './Homepage.jsx';
import Teacher from './Teacher/Teacher.jsx';
import Student  from "./Student/Student.jsx";
function App() {
  return (
    <div className="App">
    <Navigation />
      <Router>
        <Routes>
          <Route exact path="/" element={<Homepage/>} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/tlogin" element={<TLogin />} />
          <Route exact path="/tdashboard" element={<TDashboard />} />
          <Route exact path="/slogin" element={<SLogin />} />
          <Route exact path="/sregister" element={<SRegister />} />
          <Route exact path="/sdashboard" element={<SDashboard />} />
          <Route exact path="/page" element={<Page />} />
           <Route exact path="/teacher" element={<Teacher />} />
          <Route exact path="/student" element={<Student />} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
