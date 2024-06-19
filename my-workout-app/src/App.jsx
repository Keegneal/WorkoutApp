import React from 'react'
import{ BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Nav from './Nav'
import Home from './Home'
import Macros from './Macros' 
import SignUp from './SignUp'
import Workout from './Workout'





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
