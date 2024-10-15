import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Register from './Pages/Register'
import './App.css'
import Navbar from './components/Navbar'

function App() {

 

  return (
    <div className="wrapper">

      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<h1>Dashboard</h1>} />
          <Route path="*" element={<h1>Not Found</h1>} />
          
        </Routes>
      </Router>
      
    </div>
  )
}

export default App
