import React from 'react';
import './App.css'
import HomePage from '../Pages/HomePage'
import LoginPage from '../Pages/LoginPage';
import RegisterPage from '../Pages/RegisterPage';

import {BrowserRouter as Router, Route} from 'react-router-dom'
function App() {
  return (
    <Router>
      <ScrollToTop/>
      <Route path = "/" exact component = {HomePage}/>
      <Route path = "/register" exact component={RegisterPage}/>
      <Route path = "/login" exact component={LoginPage}/>

    </Router>

  );
}

export default App;

