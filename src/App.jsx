import { useState } from 'react'
import Navbar from './components/navbar'; 
import Hero from './components/hero';
import About from './components/about';
import './App.css'
import Project from './components/project';
import Services from './components/services';
import Contact from './components/contact';
import Footer from './components/footer';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Project />
        <Services />
        <Contact /> 
      </main>
      <Footer />
    </>
  )
}

export default App
