import React from 'react';
import '../css/RouteApplication.css'; 
import { useNavigate } from "react-router-dom";
const App2Route = () => {
  const navigate=useNavigate();
  return (
    <div className="app2_route_container">
      <div className="app2_left">
        <div className="app2_image_background"></div>
      </div>

      <div className="app2_right">
        <div className="app2_subtitle">EXPLORE OUR CAMPUS ROUTES</div>
        <div className="app2_title">Your Journey Starts Here</div>
        <div className="app2_description">
          Our college is strategically located, ensuring that students, faculty, and visitors can easily navigate to and from campus. 
          With multiple transport options available, reaching us has never been easier!
        </div>

        <div className="app2_features">
          <div className="app2_feature">
            <div className="app2_icon">🗺️</div>
            <div className="app2_boxtext">Interactive Navigation</div>
            <div>Navigate our campus with ease. Click on any building to get directions and important information.</div>
          </div>
          <div className="app2_feature">
            <div className="app2_icon">📍</div>
            <div className="app2_boxtext">Real-Time Location Tracking</div>
            <div>Always know your location on campus with GPS integration for an easy route finding experience.</div>
          </div>
          <div className="app2_feature">
            <div className="app2_icon">🏢</div>
            <div className="app2_boxtext">Building Information</div>
            <div>Get detailed information about each building, including contact details and purpose.</div>
          </div>
        </div>

        <button className="app2_explore_button" onClick={()=>navigate('/Map')}>Explore</button>
      </div>
    </div>
  );
};

export default App2Route;
