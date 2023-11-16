import { isAuthenticated } from "../services/Auth";
import {Link} from "react-router-dom";
import '../pages/main.css';
import '../pages/normalize.css';
import pic1 from '../pages/hos.png';
import pic2 from '../pages/ham-menu-icon.png';
import pic3 from '../pages/close-icon.png';
import pic4 from '../pages/user.png';
import React from "react";


export default function NavBar(props){
    return(<nav className="navbar navbar-expand-md navbar-white bg-blue">
           
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <button type = "button" class = "navbar-show-btn">
                    <img src = {pic2}/>
                </button>

            <div className="collapse navbar-collapse" id="navbarsExampleDefault">
                    <button type = "button" class = "navbar-hide-btn">
                        <img src = {pic3}/>
                    </button>
                <ul className="navbar-nav mr-auto">
                <li  className="nav-item"><img src = {pic1} height={40}/></li>
                <li className="nav-item"><Link className="nav-link" to='/'>Home</Link></li>
                    {!isAuthenticated()?<li className="nav-item"><Link className="nav-link" to="/register">Register</Link></li>:null}
                    {!isAuthenticated()?<li className="nav-item"><Link className="nav-link" to="/login">Login</Link></li>:null}
                    {isAuthenticated()?<li className="nav-item"><Link className="nav-link" to="dashboard">Dashboard</Link></li>:null}
                    {isAuthenticated()?<li className="nav-item"><Link className="nav-link" href="#" onClick={props.logoutUser} style={{cursor:"pointer"}}>Logout</Link></li>:null}
                        <li class = "nav-item">
                            <a href = "#about" class = "nav-link">About</a>
                        </li>
                        <li class = "nav-item">
                            <a href = "#services" class = "nav-link">Service</a>
                        </li>
                        <li class = "nav-item">
                            <a href = "#doc-panel" class = "nav-link">Doctors</a>
                        </li>
                        <li class = "nav-item">
                            <a href = "#package-service" class = "nav-link">Departments</a>
                        </li>
                        <li class = "nav-item">
                            <a href = "#posts" class = "nav-link">Blog</a>
                        </li>
                        <li class = "nav-item">
                            <a href = "#bmi" class = "nav-link">BMI</a>
                        </li>
                        <li class = "nav-item">
                            <a href = "#contact" class = "nav-link">Contact</a>
                        </li>
                </ul>
        <div class="imag"> <img class="imag" src = {pic4} height={20}/></div>
        -KECHospital254&nbsp;&nbsp;
            </div>
           
        </nav>
    )
}