import React from 'react';
import Naga from '../css/CtnBhavan.module.css';
import { RxCross2 } from "react-icons/rx";
const Billigates = ({ onClose }) => {
  return (
    <div>
      <div className={Naga.total}>
      <div className={Naga.wdiv}>
      <div className={Naga.header1}> 
      <div className={Naga.head}><b>Billigates Bhavan</b></div>
      <div className={Naga.head2} onClick={onClose}><RxCross2 /></div>
      </div>
      <div className={Naga.wdiv2}>
      <div className={Naga.photos}>
        <div className={Naga.photo1}><img src="/billigates.png" alt="" /></div>
      <div className={Naga.photo2}><img src="/Billgates2.png" alt="" /></div></div>
      <div className='matter'>
       <h1 style={{marginLeft:'10px'}}>Departments</h1>
       <p style={{marginLeft:'10px'}}> Students of 2nd Year to 4th Year of Ece Department.</p>
       <h2 style={{marginLeft:'10px'}}>Offices</h2>
       <ul>
        <li>Fee Counter</li>
        <li>Admission Cell</li>
        <li>Principle officce</li>
       </ul>
      </div>
      </div>
    </div>
    </div>
    </div>
  );
};

export default Billigates;