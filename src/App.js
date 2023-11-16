import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/Dashboard";
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Home from "./pages/Home";
import Doctoro from "./pages/Doctoro";
import Doctortwo from "./pages/Doctortwo";
import Doctorthree from "./pages/Doctorthree";
import Calco from "./calc/Calco";
import BMI from "./calc/Bmi";
import React from "react";

function App() {
    return ( 
<div className="App">
  <BrowserRouter>
      <Routes>
        <Route path="/register" element={<RegisterPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/dashboard" element={<DashboardPage/>}/>
        <Route path="/doctoro" element={<Doctoro/>}/>
        <Route path="/doctortwo" element={<Doctortwo/>}/>
        <Route path="/doctorthree" element={<Doctorthree/>}/>
        <Route path="/calco" element={<Calco/>}/>
        <Route path="/bmi" element={<BMI/>}/>
        <Route path="/" element={<Home/>}/>
      </Routes>


 </BrowserRouter>
</div>
    );
}

export default App;