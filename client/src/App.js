import React, { useEffect, useState } from 'react';
import './App.css'
import HomePage from './Pages/HomePage'
import LoginPage from './Pages/LoginPage';
import RegisterPage from './Pages/RegisterPage';
import ProtectedRoute from './Components/Routes/ProtectedRoute'

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import UserPage from './Pages/UserPage';
function App() {
  return (
    <Router>
      <Routes>
        <Route path = "/register" exact element={<RegisterPage/>}/>
        <Route path = "/" exact element = {<HomePage/>}/>
        <Route path = "/login" exact element={<LoginPage/>}/>
        <Route path = "/home" exact element = {<UserPage/>}/>
      </Routes>   
    </Router>
    

  );
}

export default App;

