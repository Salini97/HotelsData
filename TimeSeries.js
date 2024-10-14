import React from 'react';
import Chart from 'react-apexcharts';

const TimeSeriesChart = ({ data }) => {
  const chartOptions = {
    chart: { type: 'line', zoom: { enabled: true } },
    xaxis: { type: 'datetime' },
    series: [{ name: 'Visitors', data: data }],
  };

  return <Chart options={chartOptions} series={chartOptions.series} type="line" height={350} />;
};

export default TimeSeriesChart;
