import React, { useState } from 'react';
import "./Header.css";
import { BiMenuAltRight } from "react-icons/bi";
import { motion } from 'framer-motion';
import OutsideClickHandler from 'react-outside-click-handler';
import CarouselSection from '../CarouselSection';



const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);

  const getMenuStyles = (menuOpened) => {
    if (document.documentElement.clientWidth <= 800) {
      return { right: !menuOpened && "-100%" };
    }
<<<<<<< HEAD
  };
=======
    return (
        <section className='h-wrapper'>
            <div className='container'>
                <img src='../../../public/logo.png' alt='logo' className='logo' width={150} />
                <OutsideClickHandler
                    onOutsideClick={() => {
                        setMenuOpened(false);
                    }}
                >
>>>>>>> 4306cf5c375e25bc65388225334333380747db3d


  const menuVariants = {
    open: {
      right: 0,
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 40,
      },
    },
    closed: {
      right: '-100%',
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 40,
      },
    },
  };

  return (
    <>
    <header className='h-wrapper'>
      <div className='container'>
        <motion.img
          src='/logo.png'
          alt='logo'
          className='logo'
          width={150}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        />
        <OutsideClickHandler
          onOutsideClick={() => {
            setMenuOpened(false);
          }}
        >
          <motion.div
            className='flexCenter h-menu'
            style={getMenuStyles(menuOpened)}
            variants={menuVariants}
            initial="closed"
            animate={menuOpened ? "open" : "closed"}
          >
            <motion.a
              className='active active-color'
              href=""
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Login/Signup
            </motion.a>
            <motion.a
              href=""
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Profile
            </motion.a>
            <motion.a
              href=""
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Apple Studio
            </motion.a>
          </motion.div>
        </OutsideClickHandler>
        <div
          className='menu-icon'
          onClick={() => setMenuOpened((prev) => !prev)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </header>
      <CarouselSection />
      </>
  );
};

export default Header;
