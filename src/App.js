import React from 'react';
import './App.css'
import Nav from './components/Nav';
import HomePage from './components/HomePage';
import Footer from './components/Footer';
import BookingForm from './components/BookingForm'
import {Route, Routes, useNavigate} from 'react-router-dom'
import About from './components/About';
import { useReducer, useEffect } from 'react';
import { seededRandom, fetchAPI, submitAPI } from './components/APItemp';
import { ConfirmedBooking } from './components/ConfirmedBooking';


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
            availableTimes: fetchTimesAvailable(state.date),
            time: fetchTimesAvailable(state.date)[0]
          };
        default:
          return state;
      }
    };
  
    const fetchTimesAvailable = (date) => {
      return fetchAPI(new Date(date));
    }

    const today = new Date();
const isoToday = today.toISOString().slice(0, 10);
  
    const initialFormState = {
      date: isoToday,
      availableTimes: fetchTimesAvailable(new Date()),
      time: fetchTimesAvailable(new Date())[0],
      guest: 1,
      occasion: "Birthday",
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


    const navigate = useNavigate();
    const submitForm = (formState) =>{
      const isSubmitted = submitAPI(formState);
      if (isSubmitted)  {
        const {date, time, guest, occasion } = formState;
        const reservationData = {date, time,guest, occasion};
        navigate('/ConfirmedBooking', {state: { reservationData: reservationData }
      });
      }
    }

    



   
  return (
    <>
    <Nav />
    <div className='app'>
    <Routes> 
    <Route path="/" element={<HomePage />}></Route>
    <Route path="/booking" element={<BookingForm formState={formState} handleInputChange={handleInputChange} handleDateChange={handleDateChange} submitForm={submitForm} />}></Route>
    <Route path='/About' element={<About/>}></Route>
    <Route path='/ConfirmedBooking' element={<ConfirmedBooking />}></Route>
    
</Routes>
    
  
  </div>
  <Footer />
  </>
    
  );
}

export default App;
