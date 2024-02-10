import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './Pages/Login/Login'
import SignUp from './Pages/SignUp/SignUp'
import Forget from './Pages/ForgetPass/Forget'
import Home from './Pages/Home/Home'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

function App() {

  return (
    <>
    
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/Login" element={<Login />}/>
        <Route path="/SignUp" element={<SignUp />}/>
        <Route path="/ForgetPass" element={<Forget />}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
