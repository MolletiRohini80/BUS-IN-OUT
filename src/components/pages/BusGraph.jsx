import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register components for Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function Apple() {
  const [busData, setBusData] = useState(null);
  const [filteredBusData, setFilteredBusData] = useState(null); // State for filtered data
  const [timePeriod, setTimePeriod] = useState('daily'); // State for selected time period

  // Load data from localStorage or use default dummy data
  useEffect(() => {
    const storedData = localStorage.getItem('busCountData');
    if (storedData) {
      setBusData(JSON.parse(storedData));
    } else {
      // Initialize default dummy data
      const defaultData = {
        villages: ['Rajmundry', 'Kakinada', 'Peddapuram', 'Ravulapalem', 'Pitapuram', 'Jaggampeta', 'Samarlakota', 'Rangampeta'],
        counts: [35, 29, 38, 45, 65, 29, 59, 36],
      };
      setBusData(defaultData);
      localStorage.setItem('busCountData', JSON.stringify(defaultData));
    }
  }, []);

  // Update filtered data whenever the time period or busData changes
  useEffect(() => {
    if (busData) {
      let filteredCounts;
      switch (timePeriod) {
        case 'weekly':
          filteredCounts = busData.counts.map(count => count * 7); // Dummy weekly data logic
          break;
        case 'monthly':
          filteredCounts = busData.counts.map(count => count * 30); // Dummy monthly data logic
          break;
        case 'daily':
        default:
          filteredCounts = busData.counts; // Daily data (original)
      }

      setFilteredBusData({ ...busData, counts: filteredCounts });
    }
  }, [timePeriod, busData]);

  // Bar chart data for student count, dynamically populated from filtered data
  const data = {
    labels: filteredBusData ? filteredBusData.villages : [],
    datasets: [
      {
        label: 'Student Count',
        data: filteredBusData ? filteredBusData.counts : [],
        backgroundColor: 'rgba(0, 33, 71, 0.6)',
        borderColor: 'rgba(0, 33, 71, 1)',
        borderWidth: 1,
      },
    ],
  };

  // Options for the bar chart with grid lines removed
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Student Count per Bus',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        min: 0, // Start Y-axis at 0
        max: 1500, // Adjusted based on monthly scale (to fit larger values)
        ticks: {
          stepSize: 300, // Set the difference between each tick mark
        },
        grid: {
          display: false, // Remove inner grid lines on Y-axis
        },
      },
      x: {
        grid: {
          display: false, // Remove inner grid lines on X-axis
        },
      },
    },
  };

  // Inline CSS for layout and styling
  const styles = {
    pujiDashboardContainer: {
      height: '100vh',
      padding: '20px',
      backgroundColor: '#ecf0f1',
      fontFamily: 'Arial, sans-serif',
      display: 'flex',
      gap: '20px',
      overflow: 'hidden',
    },
    pujiSummarySection: {
      flexBasis: '20%',
      backgroundColor: '#fff',
      padding: '20px',
      borderRadius: '10px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
      flexShrink: 0,
      overflow: 'hidden',
      // Set height based on time period, you can adjust values as necessary
      height: timePeriod === 'daily' || timePeriod === 'weekly' ? 'auto' : '100%',
    },
    pujiSummaryCard: {
      padding: '10px 20px',
      borderRadius: '5px',
      backgroundColor: '#FD752C',
      color: '#fff',
      fontWeight: 'bold',
      boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
      fontSize: '16px',
      // Retain the font size for all time periods; remove dynamic adjustment
    },
    pujiChartContainer: {
      flexBasis: '75%',
      backgroundColor: '#fff',
      padding: '20px',
      borderRadius: '10px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      overflow: 'hidden',
    },
    pujiFilters: {
      marginBottom: '20px',
    },
  };

  if (!busData) return <div>Loading...</div>;

  return (
    <div style={styles.pujiDashboardContainer}>
      {/* Student Count Summary Section */}
      <div style={styles.pujiSummarySection}>
        <h2>Student Count Summary</h2>
        <div style={styles.pujiSummaryCard}>Total Students: {filteredBusData ? filteredBusData.counts.reduce((a, b) => a + b, 0) : 0}</div>
        {filteredBusData && filteredBusData.villages.map((village, index) => (
          <div key={village} style={styles.pujiSummaryCard}>{village}: {filteredBusData.counts[index]} Students</div>
        ))}
      </div>

      {/* Chart Section */}
      <div style={styles.pujiChartContainer}>
        {/* Filter Options */}
        <div style={styles.pujiFilters}>
          <label htmlFor="timePeriod">Time Period: </label>
          <select
            id="timePeriod"
            value={timePeriod}
            onChange={(e) => setTimePeriod(e.target.value)}
          >
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
          </select>
        </div>
        <Bar data={data} options={options} className='barchart2'/>
      </div>
    </div>
  );
}

export default Apple;
