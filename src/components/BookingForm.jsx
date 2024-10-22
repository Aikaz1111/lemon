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
        const newDate = event.target.value;
        setSelectedDate(newDate);
        props.updateTimes(newDate);
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

    const [name, setName] = useState('');
    const handleNameChange = (event) => {
        setName(event.target.value);
        setFormData({
            ...formData,
            name: event.target.value,
        });
    };

    const [contact, setContact] = useState('');
    const handleContactChange = (event) => {
        setContact(event.target.value);
        setFormData({
            ...formData,
            contact: event.target.value,
        });
        setErrors({ ...errors, contact: '' });
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
        if (!contact) newErrors.contact = 'Contact data is required.';
        if (!guests) {
            newErrors.guests = 'Number of guests is required.';
        } else if (guests < 1 || guests > 10) {
            newErrors.guests = 'Number of guests must be between 1 and 10.';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (validateForm()) {
            const formData = { selectedDate, selectedTime, guests, occasion };
            props.submitForm(formData);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="form">
            <div className="form__item">
                <label htmlFor="res-date">Choose date</label>
                <input type="date" id="res-date" value={selectedDate} onChange={handleDateChange} aria-describedby="date-error" />
                {errors.date && <p className="error" id="date-error" role="alert">{errors.date}</p>}
            </div>
            <div className="form__item">
                <label htmlFor="res-time">Choose time</label>
                <select value={selectedTime} onChange={handleTimeChange} aria-describedby="time-error">
                    {props.availableTimes && props.availableTimes.length > 0 ? (
                        props.availableTimes.map(time => (
                            <option key={time} value={time}>{time}</option>
                        ))
                    ) : (
                        <option>Choose date first</option>
                    )}
                </select>
                {errors.time && <p id="time-error" className="error" role="alert">{errors.time}</p>}
            </div>
            <div className="form__item">
                <label htmlFor="guests">Number of guests</label>
                <input type="number" placeholder="1" id="guests" value={guests} onChange={handleGuestsChange}  aria-describedby="guests-error"/>
                {errors.guests && <p id="guests-error" className="error" role="alert">{errors.guests}</p>}
            </div>
            <div className="form__item">
                <label htmlFor="occasion">Occasion</label>
                <select id="occasion" value={occasion} onChange={handleOccasionChange}>
                    <option>Occasion</option>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </select>
            </div>
            <div className="form__title">
                Personal info
            </div>
            <div className="form__item">
                <label htmlFor="name">Your name</label>
                <input type="text" id="name" value={name} onChange={handleNameChange} />
            </div>
            <div className="form__item">
                <label htmlFor="contact">Your phone number or email</label>
                <input type="text" id="contact" value={contact} onChange={handleContactChange}  aria-describedby="guests-error"/>
                {errors.contact && <p id="contact-error" className="error" role="alert">{errors.contact}</p>}
            </div>
            <div className="form__item">
                <button type="submit" className="btn btn_yellow" aria-label="Make reservation">Make Your reservation</button>
            </div>
        </form>
    );
}

export default BookingForm;