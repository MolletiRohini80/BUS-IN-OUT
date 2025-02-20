// BusDistanceChart.js
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import '../css/Graph.css';
// Register ChartJS components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BusStudentsChart = ({ data }) => {
  // Define the data for the bar chart
  const chartData = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'], // Days of the week on X-axis
    datasets: [
      {
        label: 'Students Count',
        data: data, // Distances per day
        backgroundColor: 'rgba(255, 75, 31, 0.6)', 
       borderColor: '#FD752C',
        // backgroundColor: 'rgba(75, 192, 192, 0.6)', 
        // borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 0,
      },
    ],
  };

  // Chart options
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Students Count in Bus Per Day',
      },
    },
    scales: {
      y: {
        beginAtZero: true, // Ensures the Y-axis starts at 0
        title: {
          display: true,
          text: 'Students Count',
        },
        grid: {
          display: false, // Removes Y-axis grid lines
        },
      },
      x: {
        title: {
          display: true,
          text: 'Days of the Week',
        },
        ticks: {
          display: false, // Hides X-axis labels (days of the week)
        },
        grid: {
          display: false, // Removes X-axis grid lines
        },
      },
    },
  };

  return <Bar data={chartData} options={options} className='barchartcanvas' />;
};

export default BusStudentsChart;
