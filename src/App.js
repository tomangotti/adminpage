import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './components/Home/Home';
import ForgotPassword from './components/forgotPassword/ForgotPassword';
import AdminLogin from './components/AdminLogin/AdminLogin';
import AdminDashboard from './components/AdminDashboard/AdminDashboard';


function App() {
  const [admin, setAdmin] = useState(false)


  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/admin-login" element={<AdminLogin admin={admin} setAdmin={setAdmin} />} />
        <Route path='/admin-dashboard' element={<AdminDashboard admin={admin} setAdmin={setAdmin} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
