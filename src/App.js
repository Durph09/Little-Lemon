import React from 'react';
import './App.css'
import Nav from './components/Nav';
import Hero from './components/Hero';
import Highlights from './components/Highlights'
import Testimonials from './components/Testimonials'
import About from './components/About'
import Footer from './components/Footer';


function App () {
  return (
    <>
    <div className='app'>
    {/*<img src={require('./components/images/greekSalad.jpg')}/>*/}
  <Nav />
  <Hero />
  <Highlights />
  <Testimonials />
  <About />
  <Footer />
  </div>
    </>
  );
}

export default App;
