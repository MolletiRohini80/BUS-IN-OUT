import React from 'react';
import { useState } from 'react';
import Puji from '../css/fullpage.module.css';
import CottonBhavan from '../pages/CtnBhavan';
import Rtbhavan from '../pages/Rtbhavan';
import Klrao from '../pages/Klrao';
import Viswshbhavan from '../pages/viswshbhavan';
import Cvramanbhavan from '../pages/cvramanbhavan';
import Billigates from '../pages/Billigates';
import { MdElectricCar } from "react-icons/md";
import { FaComputer } from "react-icons/fa6";
import { PiStudentFill } from "react-icons/pi";
import { MdEngineering } from "react-icons/md";
import { MdDevices } from "react-icons/md";
import { GiElectricalResistance } from "react-icons/gi";
function Fullpage(){
  const [activeComponent, setActiveComponent] = useState(null);
  const handleClick = (component) => {
    setActiveComponent(component);
  };
  const closeComponent = () => {
    setActiveComponent(null);
  };
  return (
    <div>
      <div className={Puji.p1}>
        <div className={Puji.p2}>
          <div className={Puji.p3}>
            <div className={Puji.p4}>Our Bhavans</div>
          </div>
        </div>
        <div className={Puji.p5}>
          <div className={Puji.p6}>
            <div className={Puji.p7}>
              <div className={Puji.circle1}><GiElectricalResistance /></div>
              <div className={Puji.bname}>Cotton Bhavan</div>
              <div className={Puji.bmatter}>Cotton Bhavan is where the future is shaped—specifically by the bright minds of the Electronics and Communication Engineering (ECE) students who call it their academic home.</div>
              <div className={Puji.learnmore}>
                <button className={Puji.but1} onClick={()=>handleClick('cotton')}>Read More</button>
                </div>
            </div>
            <div className={Puji.p7}>
            <div className={Puji.circle1}><PiStudentFill /></div>
            <div className={Puji.bname}>Ratan Tata Bhavan</div>
            <div className={Puji.bmatter}>Ratan Tata Bhavan is more than just a building—it is the gateway to the academic journey of every first-year student.Ratan Tata Bhavan is a symbol of resilience, integrity.</div>
            <div className={Puji.learnmore}>
            <button className={Puji.but1} onClick={()=>handleClick('Ratantata')}>Read More</button>
            </div>
            </div>
            <div className={Puji.p7}><div className={Puji.circle1}><MdElectricCar /></div>
            <div className={Puji.bname}>KL Rao Bhavan</div>
            <div className={Puji.bmatter}>KL Rao Bhavan stands as a symbol of strength, precision, and innovation, much like the discipline it nurtures—Mechanical Engineering.</div>
            <div className={Puji.learnmore}>
            <button className={Puji.but1} onClick={()=>handleClick('klrao')}>Read More</button>
              </div>
            </div>
            <div className={Puji.p7}><div className={Puji.circle1}><FaComputer /></div>
            <div className={Puji.bname}>Billigates Bhavan</div>
            <div className={Puji.bmatter}>Cotton Bhavan is where the future is shaped—specifically by the bright minds of the Electronics and Communication Engineering (ECE) students who call it their academic home.</div>
            <div className={Puji.learnmore}>
            <button className={Puji.but1} onClick={()=>handleClick('Billigates')}>Read More</button>
              </div>
            </div>
            <div className={Puji.p7}><div className={Puji.circle1}><MdEngineering /></div>
            <div className={Puji.bname}>Visweswaran Bhavan</div>
            <div className={Puji.bmatter}>Cotton Bhavan is where the future is shaped—specifically by the bright minds of the Electronics and Communication Engineering (ECE) students who call it their academic home.</div>
            <div className={Puji.learnmore}>
            <button className={Puji.but1} onClick={()=>handleClick('viswshbhavan')}>Read More</button>
              </div>
            </div>
            <div className={Puji.p7}><div className={Puji.circle1}><MdDevices /></div>
            <div className={Puji.bname}>CV Raman Bhavan</div>
            <div className={Puji.bmatter}>Cotton Bhavan is where the future is shaped—specifically by the bright minds of the Electronics and Communication Engineering (ECE) students who call it their academic home.</div>
            <div className={Puji.learnmore}>
            <button className={Puji.but1} onClick={()=>handleClick('cvraman')}>Read More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {activeComponent === 'cotton' && (
        <div className={Puji.newdiv} style={{ 
          width: '100%', 
          height: '100vh', 
          position: 'fixed', 
          top: 0, 
          left: 0, 
          backgroundColor: 'rgba(255, 255, 255, 0.9)', 
          zIndex: 999, 
          overflow: 'auto', 
          padding: '20px' 
        }}>
          <CottonBhavan onClose={closeComponent} /> {/* Pass close function */}
        </div>
      )}
      {activeComponent === 'Ratantata' && (
        <div className={Puji.newdiv} style={{ 
          width: '100%', 
          height: '100vh', 
          position: 'fixed', 
          top: 0, 
          left: 0, 
          backgroundColor: 'rgba(255, 255, 255, 0.9)', 
          zIndex: 999, 
          overflow: 'auto', 
          padding: '20px' 
        }}>
          <Rtbhavan onClose={closeComponent} /> {/* Pass close function */}
        </div>
      )}
      {activeComponent === 'klrao' && (
        <div className={Puji.newdiv} style={{ 
          width: '100%', 
          height: '100vh', 
          position: 'fixed', 
          top: 0, 
          left: 0, 
          backgroundColor: 'rgba(255, 255, 255, 0.9)', 
          zIndex: 999, 
          overflow: 'auto', 
          padding: '20px' 
        }}>
          <Klrao onClose={closeComponent} /> {/* Pass close function */}
        </div>
      )}
      {activeComponent === 'Billigates' && (
        <div className={Puji.newdiv} style={{ 
          width: '100%', 
          height: '100vh', 
          position: 'fixed', 
          top: 0, 
          left: 0, 
          backgroundColor: 'rgba(255, 255, 255, 0.9)', 
          zIndex: 999, 
          overflow: 'auto', 
          padding: '20px' 
        }}>
          <Billigates onClose={closeComponent} /> {/* Pass close function */}
        </div>
      )}
      {activeComponent === 'viswshbhavan' && (
        <div className={Puji.newdiv} style={{ 
          width: '100%', 
          height: '100vh', 
          position: 'fixed', 
          top: 0, 
          left: 0, 
          backgroundColor: 'rgba(255, 255, 255, 0.9)', 
          zIndex: 999, 
          overflow: 'auto', 
          padding: '20px' 
        }}>
          <Viswshbhavan onClose={closeComponent} /> {/* Pass close function */}
        </div>
      )}
      {activeComponent === 'cvraman' && (
        <div className={Puji.newdiv} style={{ 
          width: '100%', 
          height: '100vh', 
          position: 'fixed', 
          top: 0, 
          left: 0, 
          backgroundColor: 'rgba(255, 255, 255, 0.9)', 
          zIndex: 999, 
          overflow: 'auto', 
          padding: '20px' 
        }}>
          <Cvramanbhavan onClose={closeComponent} /> {/* Pass close function */}
        </div>
      )}
    </div>
  );
}

export default Fullpage;

