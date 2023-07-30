// components/DoorCard/DoorCard.jsx
import React from 'react';
import './DoorCard.css';

const DoorCard = ({ imageUrl, doorName }) => {
  return (
    <div className="door-card">
      <img src={imageUrl} alt={doorName} className="door-image" />
      <div className="door-content">
        <h3>{doorName}</h3>
        <div className="buttons">
          <button className="btn-add-to-cart">Add to Cart</button>
          <button className="btn-customize">Customize</button>
        </div>
      </div>
    </div>
  );
};

export default DoorCard;
