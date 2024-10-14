import React, { useState } from 'react';

const DatePicker = ({ onDateChange }) => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleDateChange = () => {
    onDateChange({ startDate, endDate });
  };

  return (
    <div>
      <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
      <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
      <button onClick={handleDateChange}>Apply Date Range</button>
    </div>
  );
};

export default DatePicker;
