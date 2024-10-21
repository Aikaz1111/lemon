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

    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selectedTime, setSelectedTime] = useState('');

    const handleDateChange = (event) => {
        const newDate = new Date(event.target.value);
        setSelectedDate(newDate);
        props.updateTimes(newDate);
        setSelectedTime('');
        setFormData({
            ...formData,
            date: event.target.value,
        });
    };

    const handleTimeChange = (event) => {
        setSelectedTime(event.target.value);
        setFormData({
            ...formData,
            time: event.target.value,
        });
    };

    const [guests, setGuests] = useState('');
    const handleGuestsChange = (event) => {
        setGuests(event.target.value);
        setFormData({
            ...formData,
            guests: event.target.value,
        });
    };

    const [occasion, setOccasion] = useState('');
    const handleOccasionChange = (event) => {
        setOccasion(event.target.value);
        setFormData({
            ...formData,
            occasion: event.target.value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault(); // Предотвращаем стандартное поведение формы
        props.submitForm(formData); // Вызываем submitForm с данными формы
    };

    return (
        <form onSubmit={handleSubmit}>
            <label for="res-date">Choose date</label>
            <input type="date" id="res-date" value={selectedDate} onChange={handleDateChange} />

            <ul>
                {props.availableTimes.map((time) => (
                    <li key={time} value={time}>
                        {time}
                    </li>
                ))}
            </ul>
            <label for="res-time">Choose time</label>
            <select value={selectedTime} onChange={handleTimeChange}>
                {props.availableTimes.map((time) => (
                    <option key={time} value={time}>
                        {time}
                    </option>
                ))}
            </select>
            <label for="guests">Number of guests</label>
            <input type="number" placeholder="1" min="1" max="10" id="guests" value={guests} onChange={handleGuestsChange} />
            <label for="occasion">Occasion</label>
            <select id="occasion" value={occasion} onChange={handleOccasionChange}>
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>
            <input type="submit" value="Make Your reservation" />
        </form>
    );
}

export default BookingForm;