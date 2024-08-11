import React from 'react';
import './ScheduleMeetButton.css';

const ScheduleMeetButton = ({ onClick }) => {
  return (
    <button className="schedule-meet-button" onClick={onClick}>
      Schedule a Meeting
    </button>
  );
};

export default ScheduleMeetButton;
