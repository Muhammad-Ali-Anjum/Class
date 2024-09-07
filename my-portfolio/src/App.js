// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact'
import Footer from './components/Footer';
import Home from './pages/Home';
import Portfolio from "./components/Portfolio/Portfolio"
import Resume from "./components/Resume/Resume"
import Blog from "./components/Blog/Blog"

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Blog" element={<Blog />} />
        
       
      </Routes>
    
      <Portfolio />
      <Resume />
      <Blog />
      
      <Footer />
    </Router>
  );
}

export default App;
