import React from 'react';
import './App.css'
import Homepage from './Pages/Homepage'
import ContactPage from './Pages/ContactPage'
import ScrollToTop from './Components/ScrollToTop'

import {BrowserRouter as Router, Route} from 'react-router-dom'
function App() {
  return (
    <Router>
      <ScrollToTop/>
      <Route path = "/" exact component = {Homepage}/>
      <Route path = "/contact" exact component={ContactPage}/>

    </Router>

  );
}

export default App;
