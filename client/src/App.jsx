import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import {  useEffect } from 'react'
import Home from './Pages/Home'
import Login from './Pages/Login'

import './App.css'


function App() {

const getApi = async () => {
   const response = await fetch('http://localhost:3000/api/')
    const data = await response.json()
    console.log(data)
  }
  useEffect(() => {
    getApi()
  }, []) 

  return (
    <div className="wrapper">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
      
    </div>
  )
}

export default App
