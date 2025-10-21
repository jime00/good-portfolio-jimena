

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import About from "./components/About";  
import Projects from './components/Project';
import Contact from './components/Contact';
import Chatbots from './components/Chatbots';
import Home from './components/Home';

export default function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />  
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/chatbot" element={<Chatbots />} />
          </Routes>
        </main>
        <footer style={{ textAlign: 'center', padding: '2rem 0', color: '#777' }}>
          © {new Date().getFullYear()} — Jimena Bello
        </footer>
      </div>
    </Router>
  );
}
