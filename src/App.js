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

function App() {

  const timeReducer = (state, action) => {
    switch (action.type) {
        case 'SET_AVAILABLE_TIMES':
            return action.payload; // Обновляем состояние с доступным временем
        default:
            return state;
    }
  };

  const initialTimeState = [];
  const navigate = useNavigate();

  const [availableTimes, dispatch] = useReducer(timeReducer, initialTimeState);

  const updateTimes = (date) => {
    const times = fetchAPI(date); // Получаем доступные временные слоты на основе выбранной даты
    dispatch({ type: 'SET_AVAILABLE_TIMES', payload: times }); // Обновляем состояние
  };

  const submitForm = (formData) => {
    if (submitAPI(formData)) { // Вызываем submitAPI с переданными данными формы
        navigate('/confirmed'); // Навигируем на страницу подтверждения
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
