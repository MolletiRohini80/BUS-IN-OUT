import React from 'react';
import AboutInfo from './about_info';
import AboutCircles from './about_circles';
import AboutBoxes from './about_boxes';
import '../css/AboutUs.css'; 

const AboutUs = () => {
  return (
    <div className="about-us">
      <AboutInfo/>
      <AboutCircles/>
      <AboutBoxes/>
    </div>
  );
};

export default AboutUs;