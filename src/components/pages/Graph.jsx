// App.js
import React from 'react';
import BusStudentsChart from './BusStudentsChart';
import '../css/Graph.css';

const Graph = () => {
  // Example data for distance traveled on each day of the week
  const distanceData = [40, 30, 20, 50, 30, 70]; // Corresponding to Monday, Tuesday, etc.

  return (
    <div className="container">
      <h5>STUDENTS COUNT IN COLLEGE BUS </h5>
      <div className="chart-container">
        <BusStudentsChart data={distanceData} />
      </div>
    </div>
  );
};

export default Graph;