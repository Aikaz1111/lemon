import { useState } from "react";
import React, { useReducer } from 'react';

function BookingForm(props) {

    const [formData, setFormData] = useState(
        { 
            date: '', 
            time: '',
            guests: '',
            occasion: ''
        }
    );

    const [errors, setErrors] = useState({
        date: '',
        time: '',
        guests: ''
    });

    const [selectedDate, setSelectedDate] = useState('');

    const handleDateChange = (event) => {
        const newDate = event.target.value; // Получите значение как строку
        setSelectedDate(newDate); // Установите состояние как строку
        props.updateTimes(newDate); // Передайте строку в updateTimes
        setSelectedTime('');
        setErrors({ ...errors, date: '' });
    };

    const [selectedTime, setSelectedTime] = useState('');
    const handleTimeChange = (event) => {
        setSelectedTime(event.target.value);
        setFormData({
            ...formData,
            time: event.target.value,
        });
        setErrors({ ...errors, time: '' });
    };

    const [guests, setGuests] = useState('');
    const handleGuestsChange = (event) => {
        setGuests(event.target.value);
        setFormData({
            ...formData,
            guests: event.target.value,
        });
        setErrors({ ...errors, guests: '' });
    };

    const [occasion, setOccasion] = useState('');
    const handleOccasionChange = (event) => {
        setOccasion(event.target.value);
        setFormData({
            ...formData,
            occasion: event.target.value,
        });
    };

    const validateForm = () => {
        const newErrors = {};
        if (!selectedDate) newErrors.date = 'Date is required.';
        if (!selectedTime) newErrors.time = 'Time is required.';
        if (!guests) {
            newErrors.guests = 'Number of guests is required.';
        } else if (guests < 1 || guests > 10) {
            newErrors.guests = 'Количество гостей должно быть от 1 до 10.';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0; // Возвращает true, если нет ошибок
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (validateForm()) {
            const formData = { selectedDate, selectedTime, guests, occasion };
            props.submitForm(formData);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label for="res-date">Choose date</label>
            <input type="date" id="res-date" value={selectedDate} onChange={handleDateChange} aria-describedby="date-error" />
            {errors.date && <p className="error" id="date-error" role="alert">{errors.date}</p>}
            
            <label for="res-time">Choose time</label>
            <select value={selectedTime} onChange={handleTimeChange} aria-describedby="time-error">
                {props.availableTimes.map((time) => (
                    <option key={time} value={time}>
                        {time}
                    </option>
                ))}
            </select>
            {errors.time && <p id="time-error" className="error" role="alert">{errors.time}</p>} {/* Сообщение об ошибке */}

            <label for="guests">Number of guests</label>
            <input type="number" placeholder="1" id="guests" value={guests} onChange={handleGuestsChange}  aria-describedby="guests-error"/>
            {errors.guests && <p id="guests-error" className="error" role="alert">{errors.guests}</p>} {/* Сообщение об ошибке */}
            
            <label for="occasion">Occasion</label>
            <select id="occasion" value={occasion} onChange={handleOccasionChange}>
                <option>Occasion</option>
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>
            <input type="submit" className="btn btn_yellow" value="Make Your reservation" aria-label="Make reservation"/>
        </form>
    );
}

export default BookingForm;