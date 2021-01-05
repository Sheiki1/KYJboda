import React from "react";
import {BrowserRouter as Router} from "react-router-dom";
import './App.css';
import  LandingPage  from './components/landingPage';
import Timer from './components/timer'
import Place from './components/place'
import About from './components/about'
import Contact from './components/contact'

function App() {
  return (
    <div className="App">
       <Router>
         <LandingPage/>
        <Timer/>
        <Place/>
        <About/>
        <Contact/>
       </Router>
    </div>
  );
}

export default App;
