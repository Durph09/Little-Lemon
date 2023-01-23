import React from 'react';
import './App.css'
import Nav from './components/Nav';
import HomePage from './components/HomePage';
import Footer from './components/Footer';
import BookingForm from './components/BookingForm'
import {Route, Routes} from 'react-router-dom'
import About from './components/About';
import { useReducer } from 'react';


  function App () {

    const formReducer = (state, action) => {
      switch (action.type) {
        case "HANDLE INPUT CHOICE":
          return {
            ...state,
            [action.field]: action.payload,
          };
        case "DATE CHOICE":
          return {
            ...state,
            availableTimes: fetchTimesAvailable(action.payload),
          };
        default:
          return state;
      }
    };
  
    const fetchTimesAvailable = (date) => {
      // logic to determine available times based on selected date
      // for now, it returns the same available times regardless of the date
      return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
    };
  
    const initialFormState = {
      date: "",
      availableTimes: ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"],
      time: "",
      guest: "",
      occasion: "",
    };
  
    const [formState, dispatch] = useReducer(formReducer, initialFormState);
  
    const handleInputChange = (e) => {
      dispatch({
        type: "HANDLE INPUT CHOICE",
        field: e.target.name,
        payload: e.target.value,
      });
    };
  
    const handleDateChange = (e) => {
      dispatch({
        type: "DATE CHOICE",
        payload: e.target.value,
      });
    };
  return (
    <>
    <Nav />
    <div className='app'>
    <Routes> 
    <Route path="/" element={<HomePage />}></Route>
    <Route path="/booking" element={<BookingForm formState={formState} handleInputChange={handleInputChange} handleDateChange={handleDateChange} />}></Route>
    <Route path='/About' element={<About/>}></Route>
    
</Routes>
    
  
  </div>
  <Footer />
  </>
    
  );
}

export default App;
