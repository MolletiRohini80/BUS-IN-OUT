import React from 'react';
import '../css/RouteApplication.css';
import { useNavigate } from "react-router-dom";
const App2Home = () => {
  const navigate=useNavigate();
  return (
    <div className="app2_container" style={{ width: '100%', height: '100svh' }}>
      {/* Left section for images and service box */}
      <div className="app2_leftSection">
        <div className="app2_imagesWrapper">
          {/* Image grid */}
          <div className="app2_image1"></div>
          <div className="app2_image2"></div>
          <div className="app2_image3"></div>
          {/* Service box in the middle of the images */}
          <div className="app2_serviceBox">
            <div className="app2_serviceIcon"></div>
            <div className="app2_serviceText">
              <div className="app2_serviceTitle">Aditya University Excellence</div>
              <div className="app2_serviceDescription">
                Fostering academic excellence and holistic development for future leaders.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right section for heading, description, and additional content */}
      <div className="app2_rightSection">
        <div className="app2_heading">Welcome to Aditya University</div>
        <div className="app2_description">
          Aditya University is committed to providing world-class education and nurturing innovation. Our diverse programs and vibrant campus offer a dynamic environment for students to thrive.
        </div>

        {/* Checklist of features */}
        <div className="app2_checklist">
          <div className="app2_checkItem">
            <div className="app2_squareCheck"></div>
            <div className="app2_checkText">Leading-edge academic programs</div>
          </div>
          <div className="app2_checkItem">
            <div className="app2_squareCheck"></div>
            <div className="app2_checkText">State-of-the-art infrastructure and resources</div>
          </div>
          <div className="app2_checkItem">
            <div className="app2_squareCheck"></div>
            <div className="app2_checkText">A focus on research, innovation, and technology</div>
          </div>
          <div className="app2_checkItem">
            <div className="app2_squareCheck"></div>
            <div className="app2_checkText">Supportive learning community</div>
          </div>
        </div>

        {/* Additional content: campus highlights */}
        <div className="app2_additionalContent">
          <div className="app2_highlight">
            <div className="app2_highlightTitle">International Collaboration</div>
            <div className="app2_highlightDescription">
              Aditya University partners with top universities across the globe to offer students opportunities for international exposure.
            </div>
          </div>

          <div className="app2_highlight">
            <div className="app2_highlightTitle">Innovative Research Programs</div>
            <div className="app2_highlightDescription">
              Our faculty and students engage in cutting-edge research projects that address real-world problems and create lasting impact.
            </div>
          </div>

          <div className="app2_highlight">
            <div className="app2_highlightTitle">World-Class Campus</div>
            <div className="app2_highlightDescription">
              Our campus is designed to foster innovation and collaboration, featuring state-of-the-art labs, libraries, and recreational facilities.
            </div>
          </div>
        </div>

        <div className="app2_discoverButton" onClick={()=>navigate('/attract')}>Discover</div>
      </div>
    </div>
  );
};

export default App2Home;
