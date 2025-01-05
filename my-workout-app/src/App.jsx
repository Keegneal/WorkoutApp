import React from 'react'
import{ BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './frontend/Nav'
import Home from './frontend/Home'
import Macros from './frontend/Macros' 
import SignUp from './frontend/SignUp'
import Workout from './frontend/Workout'





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
          
        </Routes>
      </Router>
    </div>
    </>
  )
}

export default App
