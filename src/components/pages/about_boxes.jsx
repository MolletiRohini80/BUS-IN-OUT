
import React from "react";
import '../css/AboutUs.css';

const InfoBoxes = () => {
  const cardsData = [
    { 
      title: "Timely and Reliable Schedules", 
      description: "Ensure all buses follow a timely and reliable schedule for student transportation.", 
      iconClass: "icon-schedule" 
    },
    { 
      title: "Student Safety", 
      description: "Buses are well-maintained with safety measures to ensure a secure commute for all students.", 
      iconClass: "icon-safety" 
    },
    { 
      title: "Flexible Routes", 
      description: "Our bus routes cover all major university buildings, dorms, and nearby student accommodations.", 
      iconClass: "icon-route" 
    },
    { 
      title: "Real-Time Bus Tracking", 
      description: "Track your bus in real-time through our mobile app to minimize wait times.", 
      iconClass: "icon-tracking" 
    },
    { 
      title: "Sustainable Transportation", 
      description: "We prioritize eco-friendly buses to reduce our carbon footprint.", 
      iconClass: "icon-sustainability" 
    },
    { 
      title: "Emergency Protocols", 
      description: "Established safety protocols ensure swift action during emergencies on the bus.", 
      iconClass: "icon-emergency" 
    },
  ];

  return (
    <div className="info-boxes">
      {cardsData.map((card, index) => (
        <div key={index} className="info-card">
          <div className={`icon-placeholder ${card.iconClass}`}></div>
          <div className="card-title">{card.title}</div>
          <div className="card-description">{card.description}</div>
        </div>
      ))}
    </div>
  );
};

export default InfoBoxes;
