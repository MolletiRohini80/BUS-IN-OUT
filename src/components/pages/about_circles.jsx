import React, { useState, useEffect, useRef } from 'react';
import '../css/AboutUs.css';

const AboutCircles = () => {
  const stats = [
    { number: 310, label: 'Buses in Fleet' },
    { number: 300, label: 'Drivers' },
    { number: 10000, label: 'Daily Passengers', numberClassName: 'third-circle-number' },
    { number: 30, label: 'Routes Covered' },
  ];

  return (
    <div className="stats-whole">
    <div className="stats-container">
      {stats.map((stat, index) => (
        <StatItem
          key={index}
          targetNumber={stat.number}
          label={stat.label}
          numberClassName={stat.numberClassName || ''}
        />
      ))}
    </div>
    </div>
  );
};

const StatItem = ({ targetNumber, label, numberClassName }) => {
  const [count, setCount] = useState(0);
  const statRef = useRef(null);

  useEffect(() => {
    const handleScroll = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setCount(0); // Reset the count when it becomes visible
          startCounting();
        }
      });
    };

    const startCounting = () => {
      const increment = Math.ceil(targetNumber / 100);
      const interval = setInterval(() => {
        setCount((prevCount) => {
          if (prevCount + increment >= targetNumber) {
            clearInterval(interval);
            return targetNumber;
          }
          return prevCount + increment;
        });
      }, 20);
    };

    const observer = new IntersectionObserver(handleScroll);
    if (statRef.current) {
      observer.observe(statRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [targetNumber]);

  return (
    <div className="stat-item" ref={statRef}>
      <div className="circle">
        <div className={`number ${numberClassName}`}>{count}</div>
        <div className="label">{label}</div>
        {/* Small circle with checkmark */}
        <div className="small-circle">
          <div className="checkmark">&#10003;</div>
        </div>
      </div>
    </div>
  );
};

export default AboutCircles;
