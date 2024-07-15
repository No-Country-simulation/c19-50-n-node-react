import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';

const Router = () => {
  return (
    <Routes>
        <Route path='*' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
    </Routes>
  )
}

export default Router