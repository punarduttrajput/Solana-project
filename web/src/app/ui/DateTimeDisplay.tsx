import React, { useState, useEffect } from 'react';

const DateTimeDisplay: React.FC = () => {
  const [currentDateTime, setCurrentDateTime] = useState<string>('');

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      const formattedDateTime = formatDate(now) + ' ' + formatTime(now);
      setCurrentDateTime(formattedDateTime);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formatDate = (date: Date): string => {
    const day = ('0' + date.getDate()).slice(-2);
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const formatTime = (date: Date): string => {
    const hours = ('0' + date.getHours()).slice(-2);
    const minutes = ('0' + date.getMinutes()).slice(-2);
    const seconds = ('0' + date.getSeconds()).slice(-2);
    return `${hours}:${minutes}:${seconds}`;
  };

  return (
    <div className="mt-5">
      <p className="text-center date-time mx-10">{currentDateTime}</p>
    </div>
  );
};

export default DateTimeDisplay;
