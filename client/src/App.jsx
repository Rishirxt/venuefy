import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Signup from './Signup'
import Login from './Login'
import Home from './Home'
import Dashboard from './Dashboard'
import './styles.css'
import { Routes, Route, BrowserRouter, useLocation } from 'react-router-dom'
function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <AppInner />
    </BrowserRouter>
  )
}

function AppInner(){
  
  const location = useLocation()

  // only allow modals on Dashboard (root path)
  const allowModals = location.pathname === '/'

  return (
    <>
      {/*<NavBar onOpenLogin={() => setShowLogin(true)} onOpenSignup={() => setShowSignup(true)} allowModals={allowModals} />*/}
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  )
}

export default App
