import React from 'react';
import Chart from 'react-apexcharts';

const ColumnChart = ({ data }) => {
  const chartOptions = {
    chart: { type: 'bar' },
    plotOptions: { bar: { horizontal: false, dataLabels: { position: 'top' } } },
    xaxis: { categories: Object.keys(data) },
    series: [{ name: 'Visitors', data: Object.values(data) }],
  };

  return <Chart options={chartOptions} series={chartOptions.series} type="bar" height={350} />;
};

export default ColumnChart;
