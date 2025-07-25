import React from 'react'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Registration from './pages/Components/Registration';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Registration />} />
        
     

      </Routes>
    </Router>
  )
}

export default App