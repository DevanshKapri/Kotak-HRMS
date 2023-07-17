import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import TitleBar from "./components/TitleCard/TitleBar";
import Container from "./components/Charts/chartContainer";
import Example from "./components/Charts/charts";
import Topbar from "./components/Topbar/Topbar";
import Signin from "./components/SignIn/Signin";
import Register from "./components/SignIn/Signup";
import Profile from "./components/Profile/profile";
import { Hiring } from "./components/Hiring/Hiring";
import Employees from "./components/Employees/Employees";
import Landing from "./components/Landing/Landing";
import DataTable from "./components/ProfileTables.jsx/DataTable";
import { Vacancies } from "./components/Vacancies/vacancies";
import UserProf from "./components/Profile/UserProfile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Userprofile" element={<UserProf />} />
        <Route path="/signup" element={<Signin />} />
        <Route path="/register" element={<Register />} />
        <Route path="/employees/table" element={<DataTable />} />
        <Route
          index
          exact
          path="/"
          element={
            <>
              <Landing />
            </>
          }
        />
        <Route path="/dashboard" element={<Topbar />} />
        <Route path="/hiring" element={<Hiring />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/employees" element={<Employees />} />
        <Route path="/vacancies" element={<Vacancies />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
