import React from 'react';
import '../css/AboutUs.css'; 

const AboutInfo = () => {
  return (
    <div className="about-info-container">
      <div className="about-info-content">
        {/* Left side with image */}
        <div className="about-info-left">
          <div className="about-image"></div>
          <div className="about-quote">
            "Ensuring safety and reliability in every ride."
          </div>
          
        </div>

        {/* Right side with main heading, card, and services */}
        <div className="about-info-right">
          <div className="about-us-title">
            <div className="about-us-text">ABOUT US</div>
            <div className="trusted-partners-text">Our Transportation Services</div>
          </div>
          
          {/* Experience and Services */}
          <div className="about-us-info">
            <div className="experience-card">
              <div className="experience-number">27+</div>
              <div className="experience-text">YEARS EXPERIENCES</div>
            </div>
            <div className="about-services">
              <div className="service-item">
                <div className="service-icon">✔</div>
                <div className="service-text">Professionally Trained Drivers</div>
              </div>
              <div className="service-item">
                <div className="service-icon">✔</div>
                <div className="service-text">24/7 Reliable Campus Transportation</div>
              </div>
              <div className="service-item">
                <div className="service-icon">✔</div>
                <div className="service-text">Collaborative Network of Services</div>
              </div>
              <div className="service-item">
                <div className="service-icon">✔</div>
                <div className="service-text">GPS-Enabled Bus Tracking</div>
              </div>
              <div className="service-item">
                <div className="service-icon">✔</div>
                <div className="service-text">Student Safety Monitoring</div>
              </div>
            </div>
          </div>
          
          {/* Safety Commitment Message */}
          <div className="commitment-section">
            <div className="commitment-title">Our Commitment to Safety</div>
            <div className="commitment-text">
              We prioritize the safety and well-being of our students with rigorous safety measures,
              ensuring a secure and comfortable transportation experience.
            </div>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default AboutInfo;