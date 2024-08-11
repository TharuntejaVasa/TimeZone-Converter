import React, { useState } from 'react';
import './Slider.css';

const Slider = ({ min, max, step, initialValue }) => {
  // State to track the current value of the slider
  const [value, setValue] = useState(initialValue || min);

  // Handle the change event for the slider input
  const handleSliderChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="slider-container">
      <label htmlFor="slider" className="slider-label">
        Value: {value}
      </label>
      <input
        type="range"
        id="slider"
        className="slider"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={handleSliderChange}
      />
    </div>
  );
};

export default Slider;
