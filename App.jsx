import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DatePicker from './Components/DatePicker';
import TimeSeries from './Components/TimeSeries';
import ColumnChart from './Components/ColumnChart';
import SparklineChart from './Components/SparklineChart';
import parseCSV from './utils/parseCSV';

const App = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    // Load CSV data
    axios.get('/hotel_bookings_1000.csv').then((response) => {
      const parsedData = parseCSV(response.data);
      setData(parsedData);
    });
  }, []);

  const handleDateChange = ({ startDate, endDate }) => {
    const filtered = data.filter((booking) => {
      const bookingDate = new Date(`${booking.arrival_date_year}-${booking.arrival_date_month}-${booking.arrival_date_day_of_month}`);
      return bookingDate >= new Date(startDate) && bookingDate <= new Date(endDate);
    });
    setFilteredData(filtered);
  };

  const aggregateByCountry = (data) => {
    const countryVisitorMap = {};
  
    data.forEach((booking) => {
      const totalVisitors = booking.adults + booking.children + booking.babies;
      if (countryVisitorMap[booking.country]) {
        countryVisitorMap[booking.country] += totalVisitors;
      } else {
        countryVisitorMap[booking.country] = totalVisitors;
      }
    });
  
    return countryVisitorMap;
  };
  

  return (
    <div>
      <DatePicker onDateChange={handleDateChange} />
      <TimeSeries data={filteredData.map(booking => [booking.date, booking.adults + booking.children + booking.babies])} />
      <ColumnChart data={aggregateByCountry(filteredData)} />
      <SparklineChart data={filteredData.map(booking => booking.adults)} title="Adult Visitors" />
      <SparklineChart data={filteredData.map(booking => booking.children)} title="Children Visitors" />
    </div>
  );
};

export default App;
