import React, { useState } from 'react';
import './AddTimeZone.css';

const AddTimeZone = () => {
  // State to track the selected time zone and the list of added time zones
  const [selectedTimeZone, setSelectedTimeZone] = useState('');
  const [timeZones, setTimeZones] = useState([]);

  // Handle the change event for the dropdown
  const handleSelectChange = (event) => {
    setSelectedTimeZone(event.target.value);
  };

  // Handle adding the selected time zone to the list
  const handleAddTimeZone = () => {
    if (selectedTimeZone && !timeZones.includes(selectedTimeZone)) {
      setTimeZones([...timeZones, selectedTimeZone]);
    }
  };

  return (
    <div className="add-timezone-container">
      <label htmlFor="timezone-select">Select a Time Zone:</label>
      <select
        id="timezone-select"
        value={selectedTimeZone}
        onChange={handleSelectChange}
      >
        <option value="">--Select Time Zone--</option>
        <option value="America/New_York">Eastern Time (ET)</option>
        <option value="America/Chicago">Central Time (CT)</option>
        <option value="America/Denver">Mountain Time (MT)</option>
        <option value="America/Los_Angeles">Pacific Time (PT)</option>
        <option value="Europe/London">London</option>
        <option value="Europe/Paris">Paris</option>
        <option value="Asia/Tokyo">Tokyo</option>
        <option value="Australia/Sydney">Sydney</option>
        {/* Add more time zones as needed */}
      </select>
      <button className="add-timezone-btn" onClick={handleAddTimeZone}>
        Add Time Zone
      </button>

      <ul className="timezone-list">
        {timeZones.map((tz, index) => (
          <li key={index}>{tz}</li>
        ))}
      </ul>
    </div>
  );
};

export default AddTimeZone;
