import React, { useState, useEffect } from 'react';

const Clock = () => {
  // Initialize time state with the current time
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  // This runs after every render
  useEffect(() => {
    // Set an interval that updates the time every second
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    // This is called a cleanup function, which runs when the component is removed from the UI or before the component re-renders
    // We use it here to clear our interval when it's no longer needed
    return () => clearInterval(timer);
  }, []); // Empty array means this effect will only run once, right after the first render

  return <h1>Current time: {time}</h1>;
}

export default Clock;