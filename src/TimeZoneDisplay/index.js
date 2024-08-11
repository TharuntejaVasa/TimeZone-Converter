import React from 'react';

const TimeZoneDisplay = ({ currentTime, selectedTimeZone, convertTime }) => {
  return (
    <div className="time-zone-display">
      <p>Local Time: <span>{currentTime.toLocaleTimeString()}</span></p>
      <p>
        Time in <strong>{selectedTimeZone}</strong>: <span>{convertTime(currentTime, selectedTimeZone)}</span>
      </p>
    </div>
  );
};

export default TimeZoneDisplay;
