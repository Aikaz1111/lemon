import './App.css';
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import BookingPage from "./components/BookingPage";
import ConfirmedBooking from "./components/ConfirmedBooking";
import { useNavigate } from 'react-router-dom';
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useReducer, useEffect  } from 'react';
import { fetchAPI, submitAPI } from './api';
import initializeTimes from './utils/InitializeTimes';

function App() {

  const timeReducer = (state, action) => {
    switch (action.type) {
        case 'SET_AVAILABLE_TIMES':
            return action.payload; 
        default:
            return state;
    }
  };

  const navigate = useNavigate();

  const [availableTimes, dispatch] = useReducer(timeReducer, initializeTimes());

  const updateTimes = (dateString) => {
    const date = new Date(dateString);
    const times = fetchAPI(date);
    dispatch({ type: 'SET_AVAILABLE_TIMES', payload: times });
  };

  const submitForm = (formData) => {
    if (submitAPI(formData)) {
        navigate('/confirmed');
    }
};

  return (
      <div className="App">
        <Header></Header>
          <Routes> 
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/booking" element={<BookingPage 
              updateTimes={updateTimes}
              availableTimes={availableTimes}
              submitForm={submitForm}
            />}></Route>
            <Route path="/confirmed" element={<ConfirmedBooking></ConfirmedBooking>}></Route>
          </Routes>
        <Footer></Footer>
      </div>
  );
};

export default App;
