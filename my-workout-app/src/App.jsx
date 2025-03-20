import React from 'react'
import{ BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Nav from './frontend/Nav'
import Home from './frontend/Home'
import Macros from './frontend/Macros' 
import SignUp from './frontend/SignUp'
import Workout from './frontend/Workout'
import Profile from './frontend/Profile'





function App() {

  return (
    <>
    <div className="App">
     <Router>
        <Nav/>
        
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Macros" element={<Macros/>} />
          <Route path="/Workout" element={<Workout/>} />
          <Route path="/SignUp" element={<SignUp/>} />
          <Route path="/Profile" element={<Profile/>} />
          
        </Routes>
      </Router>
    </div>
    </>
  )
}

export default App
