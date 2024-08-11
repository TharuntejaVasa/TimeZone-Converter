import React, { useState, useEffect } from 'react';

const TimeZoneConverter = () => {
  const [selectedTimeZone, setSelectedTimeZone] = useState('UTC');
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval); // Clean up on unmount
  }, []);

  const handleChangeTimeZone = (event) => {
    setSelectedTimeZone(event.target.value);
  };

  const convertTime = (date, timeZone) => {
    return new Intl.DateTimeFormat('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      timeZone,
    }).format(date);
  };

  return (
    <div>
      <h1>Time Zone Converter</h1>
      <TimeSelector selectedTimeZone={selectedTimeZone} onChange={handleChangeTimeZone} />
      <TimeDisplay currentTime={currentTime} selectedTimeZone={selectedTimeZone} convertTime={convertTime} />
    </div>
  );
};

const TimeSelector = ({ selectedTimeZone, onChange }) => {
  const timeZones = ['UTC', 'America/New_York', 'Europe/London', 'Asia/Tokyo', 'Australia/Sydney'];

  return (
    <select value={selectedTimeZone} onChange={onChange}>
      {timeZones.map((zone) => (
        <option key={zone} value={zone}>
          {zone}
        </option>
      ))}
    </select>
  );
};

const TimeDisplay = ({ currentTime, selectedTimeZone, convertTime }) => {
  return (
    <div>
      <p>Current Time: {currentTime.toLocaleTimeString()}</p>
      <p>
        Time in {selectedTimeZone}: {convertTime(currentTime, selectedTimeZone)}
      </p>
    </div>
  );
};

export default TimeZoneConverter;
