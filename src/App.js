// src/App.js
import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css'; // Add your styling here

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
