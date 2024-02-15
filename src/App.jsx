import { useState } from 'react'
import './App.css'
import Login from './Pages/Login/Login'
import SignUp from './Pages/SignUp/SignUp'
import Forget from './Pages/ForgetPass/Forget'
import Home from './Pages/Home/Home'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Products from './Pages/Products/Products'
import About from './Pages/About/About'
import Contact from './Pages/Contact/Contact'
import Profile from './Pages/Profile/Profile'
import Account from './Pages/Account/Account'

function App() {

  return (
    <>
    
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/SignUp" element={<SignUp />}/>
        <Route path="/ForgetPass" element={<Forget />}/>
        <Route path="/Products" element={<Products />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/account" element={<Account />}/>
        <Route path="/profile" element={<Profile />}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
