import React from 'react';
import './DoorCard.css';
<<<<<<< HEAD
import { motion } from 'framer-motion';
=======
>>>>>>> 4306cf5c375e25bc65388225334333380747db3d
import { Link } from 'react-router-dom';

const DoorCard = ({ imageUrl, doorName }) => {
  const cardVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    hover: { scale: 1.05, zIndex: 1, boxShadow: "0 6px 12px rgba(0, 0, 0, 0.1)" },
    exit: { opacity: 0, y: -20, zIndex: 0, boxShadow: "none" },
  };

  const buttonVariants = {
    hover: { scale: 1.1 },
  };

  return (
<<<<<<< HEAD
    <motion.div
      className='Doorcard-container'
      variants={cardVariants}
      initial="initial"
      animate="animate"
      whileHover="hover"
      exit="exit"
    >
      <motion.div
        className="door-card"
        whileHover={{ scale: 1.05, zIndex: 1, boxShadow: "0 6px 12px rgba(0, 0, 0, 0.1)" }}
      >
        <motion.img
          src={imageUrl}
          alt={doorName}
          className="door-image"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        />
        <div className="door-content">
          <motion.h3
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            {doorName}
          </motion.h3>
          <motion.div
            className="buttons"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
          <Link to="/">
            <motion.button
              className="btn-add-to-cart"
              variants={buttonVariants}
              whileHover="hover"
            >
              Add to Cart
            </motion.button>
            </Link>
            <Link to={`customization/${doorName}`} >
              <motion.button
                className="btn-customize"
                variants={buttonVariants}
                whileHover="hover"
              >
                Customize
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
=======
    <div className="door-card">
      <img src={imageUrl} alt={doorName} className="door-image" />
      <div className="door-content">
        <h3>{doorName}</h3>
        <div className="buttons">
          <button className="btn-add-to-cart">Add to Cart</button>
            <Link to={`customization/${doorName}`} >
            <button className="btn-customize">Customize</button>
          </Link>       
         </div>
      </div>
    </div>
>>>>>>> 4306cf5c375e25bc65388225334333380747db3d
  );
};

export default DoorCard;
