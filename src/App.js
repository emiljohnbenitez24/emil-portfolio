import React from 'react';
import Home from './components/home'
import About from './components/about';
import Projects from './components/projects'
import Skills from './components/skills'
import Footer from './components/footer'
import { Container, Row, Col, Nav, Navbar } from 'react-bootstrap'


function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
