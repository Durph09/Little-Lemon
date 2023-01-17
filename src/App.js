import React from 'react';
import './App.css'
import Nav from './components/Nav';
import HomePage from './components/HomePage';
import Footer from './components/Footer';
import Booking from './components/Booking'
import {Route, Routes} from 'react-router-dom'
import About from './components/About';


function App () {
  return (
    <>
    <Nav />
    <Routes> 
    <Route path="/" element={<HomePage />}></Route>
    <Route path="/booking" element={<Booking/>}></Route>
    <Route path='/About' element={<About/>}></Route>
    
</Routes>
    
  
  
  <Footer />
  
    </>
  );
}

export default App;
