import React from 'react';
import Chart from 'react-apexcharts';

const SparklineChart = ({ data, title }) => {
  const chartOptions = {
    chart: { type: 'line', sparkline: { enabled: true } },
    series: [{ name: title, data: data }],
  };

  return (
    <div>
      <h5>{title}</h5>
      <Chart options={chartOptions} series={chartOptions.series} type="line" height={100} />
    </div>
  );
};

export default SparklineChart;
