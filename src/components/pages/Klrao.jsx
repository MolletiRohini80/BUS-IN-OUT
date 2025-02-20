import React from 'react';
import Naga from '../css/CtnBhavan.module.css';
import { RxCross2 } from "react-icons/rx";

const Klrao = ({ onClose }) => {
  return (
    <div>
      <div className={Naga.total}>
        <div className={Naga.wdiv}>
          <div className={Naga.header1}> 
            <div className={Naga.head}><b>KL Rao Bhavan</b></div>
            <div className={Naga.head2} onClick={onClose}>
              <RxCross2 />
            </div>
          </div>
          <div className={Naga.wdiv2}>
            <div className={Naga.photos}>
              <div className={Naga.photo1}>
                <img src="/klrao.jpg" alt="" />
              </div>
              <div className={Naga.photo2}>
                <img src="/cbhavan.webp" alt="" />
              </div>
            </div>
            <div className={Naga.matter}>
              <h1 style={{ marginLeft: '10px' }}>Departments</h1>
              <p style={{ marginLeft: '10px' }}>
                Students of 2nd Year to 4th Year of ECE Department.
              </p>
              <h2 style={{ marginLeft: '10px' }}>Offices</h2>
              <ul>
                <li>Fee Counter</li>
                <li>Admission Cell</li>
                <li>Principal Office</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Klrao;
