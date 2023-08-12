  import React from 'react';
  import './DoorCard.css';
  import { motion } from 'framer-motion';
  import { Link } from 'react-router-dom';
  import { useCart } from '../../context/cart';
  import { toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

  const DoorCard = ({ imageUrl, doorName,price }) => {
    const [cart, setCart] = useCart();

    const isInCart = cart.some(item => item.doorName === doorName); 
    const cardVariants = {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: -20, zIndex: 0, boxShadow: "none" },
    };

    const handleCartAction = () => {
      if (isInCart) {
        const updatedCart = cart.filter(item => item.doorName !== doorName);
        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        toast.error('Removed from Cart', {
          position: toast.POSITION.BOTTOM_RIGHT
        });
      } else {
        const updatedCart = [...cart, { imageUrl, doorName }];
        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        toast.success('Added to Cart', {
          position: toast.POSITION.BOTTOM_RIGHT
        });
      }
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
            <p className="door-price">${price}</p>
            <div className="button-container">
              <Link to={`/customization/${encodeURIComponent(doorName)}`}>
                <motion.button className="btn-customize">Customize</motion.button>
              </Link>
              <motion.button
                className="btn-add-to-cart"
                onClick={handleCartAction} 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {isInCart ? 'Remove' : 'Add to Cart'}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.div>
    );
  };

  export default DoorCard;
