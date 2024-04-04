import React from 'react'
import "./App.css"
import Home from './Components/Home';
import About from './Components/About';
import Navbar from './Components/Navbar';
import Work from './Components/Work';
import Testimonial from './Components/Testimonial';
import Contact from './Components/Contact';
import Footer from './Components/Footer';


const App = () => {
  return (
    <>
    {/* <Navbar/> */}
    <Home/>
    <About/>
    <Work/>
    <Testimonial/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App