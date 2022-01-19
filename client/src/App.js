import React from 'react';
import './App.css'
import HomePage from './Pages/HomePage'
import LoginPage from './Pages/LoginPage';
import RegisterPage from './Pages/RegisterPage';

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
function App() {
  return (
    <Router>
      <Routes>
        <Route path = "/register" exact element={<RegisterPage/>}/>
        <Route path = "/" exact element = {<HomePage/>}/>
        <Route path = "/login" exact element={<LoginPage/>}/>
      </Routes>   
    </Router>
    

  );
}

export default App;

