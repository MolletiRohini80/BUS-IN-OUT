import React from 'react';
import '../css/Bhavans.css';
import { RxCross2 } from "react-icons/rx";
const CottonBhavan = ({ onClose }) => {
  return (
    <div>
      <div className='total'>
      <div className='wdiv'>
      <div className='header'> 
      <div className='head'><b>Cotton Bhavan</b></div>
      <div className='head2'onClick={onClose}><RxCross2 /></div>
      </div>
      <div className='wdiv2'>
      <div className='photos'>
      <div className='photo1'></div>
      <div className='photo2'></div></div>
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

export default CottonBhavan;
