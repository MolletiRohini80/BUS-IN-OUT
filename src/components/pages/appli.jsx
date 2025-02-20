import React, { useEffect, useRef, useState } from "react";
import Fstyle from "../css/appli.module.css"; 
import { useNavigate } from "react-router-dom";

function F2() {
  // Refs for all the elements to animate
  const busTitleRef = useRef(null);
  const busDescriptionRef = useRef(null);
  const busButtonRef = useRef(null);
  const routeTitleRef = useRef(null);
  const routeDescriptionRef = useRef(null);
  const routeButtonRef = useRef(null);

  const [animationTriggered, setAnimationTriggered] = useState(false);
  const navigate=useNavigate()
  useEffect(() => {
    // Function to trigger animations
    const runAnimation = () => {
      if (busTitleRef.current) {
        busTitleRef.current.classList.add(Fstyle.animate);
      }
      if (busDescriptionRef.current) {
        busDescriptionRef.current.classList.add(Fstyle.animate);
      }
      if (busButtonRef.current) {
        busButtonRef.current.classList.add(Fstyle.animate);
      }
      if (routeTitleRef.current) {
        routeTitleRef.current.classList.add(Fstyle.animate);
      }
      if (routeDescriptionRef.current) {
        routeDescriptionRef.current.classList.add(Fstyle.animate);
      }
      if (routeButtonRef.current) {
        routeButtonRef.current.classList.add(Fstyle.animate);
      }
    };

    // IntersectionObserver to detect visibility of the page
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animationTriggered) {
          runAnimation();
          setAnimationTriggered(true); // Run animation only once
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the element is in the viewport
    );

    const mainElement = document.querySelector(`.${Fstyle.main1}`);
    if (mainElement) {
      observer.observe(mainElement);
    }

    return () => {
      if (mainElement) {
        observer.unobserve(mainElement); // Cleanup observer on unmount
      }
    };
  }, [animationTriggered]);

  return (
    <div className={Fstyle.main1}>
      <div className={Fstyle.part1}>
        <div className={Fstyle.part11}></div>
        <div className={Fstyle.part21}>
          <div className={Fstyle.des11}>
            {/* Ref for Title and Description */}
            <div className={Fstyle.p11} ref={busTitleRef}>BUS IN/OUT</div>
            <div className={Fstyle.p12} ref={busDescriptionRef}>
              This application is designed to automatically scan and log bus numbers as they enter the college campus. The system ensures efficient monitoring and improves security by keeping a digital record of all buses entering the premises. This solution reduces the need for manual entries, minimizing human error and speeding up the process. It also provides real-time data for better campus management and reporting.
            </div>
            <div className={Fstyle.p13}>
              {/* Ref for the Button */}
              <button className={Fstyle.but1} ref={busButtonRef} onClick={()=>navigate('/Application')}>Click Here</button> 
            </div>
          </div>
        </div>
      </div>
      <div className={Fstyle.part2}>
        <div className={Fstyle.part22}>
          <div className={Fstyle.des21}>
            {/* Ref for Title and Description */}
            <div className={Fstyle.p11} ref={routeTitleRef}>ROUTE MAP OF COLLEGE</div>
            <div className={Fstyle.p12} ref={routeDescriptionRef}>
              Easily search for any location on campus and view the best routes to get there. Our interactive map highlights pathways, ensuring quick navigation for students and visitors alike. With real-time updates, users can avoid crowded areas and choose the fastest routes. The map is accessible on all devices, making navigation convenient from anywhere on campus.
            </div>
            <div className={Fstyle.p13}>
              {/* Ref for the Button */}
              <button className={Fstyle.but1} ref={routeButtonRef} onClick={()=>navigate('/App2')}>Click Here</button>
            </div>
          </div>
        </div>
        <div className={Fstyle.part12}></div>
      </div>
    </div>
  );
}

export default F2;
