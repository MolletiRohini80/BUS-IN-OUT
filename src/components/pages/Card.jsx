// import React from 'react';
// import './CardCS.css';

// function Card() {
//   // Array to generate 9 cards
//   const cards = Array.from({ length: 9 }, (_, index) => ({
//     id: index + 1,
//     title: 'Btech',
//     buttonLabel: 'Go Ahead',
//   }));

//   return (
//     <div className="card-container">
//       {cards.map((card) => (
//         <div key={card.id} className="card">
//           <h2>{card.title}</h2>
//           <button>{card.buttonLabel}</button>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Card;

import React from 'react';
import '../css/CardCS.css';
import { useNavigate } from "react-router-dom"; 

function Carder() {
  const navigate=useNavigate()
  // Updated array for card titles
  const cardTitles = [
    'Btech',
    'Mtech',
    'BBA',
    'MBA',
    'Bpharmacy',
    'Forensic Science',
    'Polytechnic',
    'Business School',
    // 'Arts'
  ];

  const cards = cardTitles.map((title, index) => ({
    id: index + 1,
    title: title,
    buttonLabel: 'Go Ahead',
  }));
  return (
    <div className="outer-container">
      <h1 className="heading">Courses Offered</h1>
      <div className="card-container">
        {cards.map((card) => (
          <div key={card.id} className="card">
            <h2>{card.title}</h2>
            <button onClick={()=>navigate('/incard')}>{card.buttonLabel}</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Carder;


