import React, { useState, useEffect } from 'react';
import './DarkModeToggle.css';

const DarkModeToggle = () => {
  // State to track dark mode status
  const [darkMode, setDarkMode] = useState(() => {
    // Check local storage for the user's preference
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark-mode';
  });

  // Effect to apply dark mode class to the body and save preference
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light-mode');
    }
  }, [darkMode]);

  // Toggle dark mode on checkbox change
  const handleToggle = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="container">
      <h1>Dark Mode Toggle 🌙</h1>
      <label className="switch">
        <input
          type="checkbox"
          checked={darkMode}
          onChange={handleToggle}
        />
        <span className="slider round"></span>
      </label>
    </div>
  );
};

export default DarkModeToggle;
