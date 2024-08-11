import React from 'react';
import TimeZoneDisplay from './TimeZoneDisplay';
import DarkModeToggle from './DarkModeToggle';
import DatePicker from './DatePicker';
import ScheduleMeetButton from './ScheduleMeetButton';
import Slider from './Slider';
import AddTimeZone from './AddTimeZone';
import TimeZoneConverter from './TimeZoneConverter';

function App() {
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

  // Function to handle the button click event
  const handleScheduleMeeting = () => {
    // Example action: Redirect to Google Calendar
    window.open('https://calendar.google.com/calendar/u/0/r/eventedit', '_blank');
    
    // Or you could trigger a custom scheduling logic
    // Example: show a modal, open a date picker, etc.
  };

  return (
    <div className="App">
      <ScheduleMeetButton onClick={handleScheduleMeeting} />
      <DarkModeToggle />
      <DatePicker />
      <Slider min={0} max={100} step={1} initialValue={50} />
      <AddTimeZone />
      <TimeZoneConverter />
      <select value={selectedTimeZone} onChange={handleChangeTimeZone}>
        {['UTC', 'America/New_York', 'Europe/London', 'Asia/Tokyo', 'Australia/Sydney'].map((zone) => (
          <option key={zone} value={zone}>
            {zone}
          </option>
        ))}
      </select>
      <TimeZoneDisplay
        currentTime={currentTime}
        selectedTimeZone={selectedTimeZone}
        convertTime={convertTime}
      />
    </div>
    
  );
}

export default App;
