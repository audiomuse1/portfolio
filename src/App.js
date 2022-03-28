import React from 'react';
import './App.css';
import {
  HashRouter, BrowserRouter as Router,
  Route,
} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './contents/Home';
import About from './contents/About';
import Education from './contents/Education';
import Skills from './contents/Skills';
import Contact from './contents/Contact';
import Projects from './contents/Projects';




function App() {
  return (
    <HashRouter>
    <div className="App">
    <Navbar />
    <Route path="/portfolio">
    <Home />
    </Route>
    <Route path="/about">
    <About />
    </Route>
    <Route path="/education">
    <Education />
    </Route>
    <Route path="/skills">
    <Skills />
    </Route>
    <Route path="/projects">
    <Projects />
    </Route>
    <Route path="/contact">
    <Contact />
    </Route>
    </div>
    </HashRouter>
    );
  }
  
  export default App;
  