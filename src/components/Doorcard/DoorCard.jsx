import React from 'react';
import './DoorCard.css';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const DoorCard = ({ imageUrl, doorName }) => {
  const cardVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20, zIndex: 0, boxShadow: "none" },
  };

  return (
    <motion.div
      className='Doorcard-container'
      variants={cardVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="door-card">
        <img
          src={imageUrl}
          alt={doorName}
          className="door-image"
        />
        <div className="door-content">
          <h3>{doorName}</h3>
          <div className="button-container">
            <Link to="/">
              <motion.button
                className="btn-customize"
              >
                Customize
              </motion.button>
            </Link>
            <Link to="/">
              <motion.button
                className="btn-add-to-cart"
              >
                Add to Cart
              </motion.button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default DoorCard;
