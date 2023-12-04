import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import SignInPage from './pages/SignInPage'
import CreateAccountPage from './pages/CreateAccountPage'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<SignInPage />}/>
      <Route path='create-account' element={<CreateAccountPage />}/>
      <Route path='home' element={<Home />}/>
    </Routes>
    </>
  )
}

export default App
