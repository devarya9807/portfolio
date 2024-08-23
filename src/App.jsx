import React from 'react';
import NavigationBar from './components/NavigationBar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';


function App() {

  return (
    <div>
      <NavigationBar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Experience />
      {/* <Contact /> */}
      <Footer/>
    </div>
  )
}

export default App
