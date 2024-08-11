import React, { useState } from 'react';
import './DatePicker.css';

const DatePicker = () => {
  // State to track the selected date
  const [selectedDate, setSelectedDate] = useState('');

  // Handle the change event for the date input
  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  return (
    <div className="date-picker-container">
      <label htmlFor="date-picker">Select a Date:</label>
      <input
        type="date"
        id="date-picker"
        value={selectedDate}
        onChange={handleDateChange}
      />
      {selectedDate && (
        <p className="date-display">
          Selected Date: {new Date(selectedDate).toLocaleDateString()}
        </p>
      )}
    </div>
  );
};

export default DatePicker;
