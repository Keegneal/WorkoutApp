import React from "react";
import { Link } from "react-router-dom";
import "../frontend/Nav.css"; // Importing the CSS file

const Nav = () => {
    return (
        
            <nav className = "nav-bar"> 
                <ul>
                    <li className="nav-pages"> <Link to = "/"> Home </Link> </li>
                    <li className="nav-pages"> <Link to = "/Macros"> Macros</Link> </li>
                    <li className="nav-pages"> <Link to = "/Workout"> Workouts  </Link> </li>
                    <li className="nav-pages"> <Link to = "/SignUp"> Sign Up  </Link> </li>
                    <li className="user-profile"> <Link to ="/Profile">  Profile </Link> </li>
                </ul>            
                
            </nav>

        
    )}

    export default Nav; // Exporting the Nav component