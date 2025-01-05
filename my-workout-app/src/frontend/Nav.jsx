import React from "react";
import { Link } from "react-router-dom";
import "../frontend/Nav.css"; // Importing the CSS file

const Nav = () => {
    return (
        
            <nav className = "nav-bar"> 
                <ul>
                    <li> <Link to = "/"> Home </Link> </li>
                    <li> <Link to = "/Macros"> Macros</Link> </li>
                    <li> <Link to = "/Workout"> Workouts  </Link> </li>
                    <li> <Link to = "/SignUp"> Sign Up  </Link> </li>


                </ul>            
            </nav>

        
    )}

    export default Nav; // Exporting the Nav component