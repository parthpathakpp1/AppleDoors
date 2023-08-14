import React, { useState } from 'react';
import "./Header.css";
import { BiMenuAltRight } from "react-icons/bi";
import {Link} from 'react-router-dom'
import { motion } from 'framer-motion';
import OutsideClickHandler from 'react-outside-click-handler';
import { useCart } from '../../context/cart';
import {Badge} from "antd";
import { useAuth } from '../../context/auth';


const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const [cart] = useCart();
  const [auth,setAuth]=useAuth();
  
  const handleLogout = () => {
    setAuth({
      ...auth,user:null,token:''
    })
    localStorage.removeItem('auth')
  }
  

  const getMenuStyles = (menuOpened) => {
    if (document.documentElement.clientWidth <= 800) {
      return { right: !menuOpened && "-100%" };
    }
  };

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
        <Link to="/">
            <motion.div
              className='logo'
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Apple Doors
            </motion.div>
          </Link>
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

            {
              !auth.user ? (
                <>
                <motion.a
            className='active active-color'
            href=""
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Link to="/register">Signup</Link>
          </motion.a>
          <motion.a
            className='active active-color'
            href=""
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Link to="/login">Login</Link>
          </motion.a>
 
     
              </>):(<>
                <motion.a
            className='active active-color'
            href=""
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Link onClick={handleLogout} to="/login">Logout</Link>
          </motion.a>
              </>)
            }
             
              <motion.a
                href=""
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Apple Studio
              </motion.a>

              <motion.a
                href=""
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Profile
              </motion.a>
              <Badge count={cart?.length} showZero>
  <Link to="/cart" className='cart-link'>
    <motion.a
      href=""
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      Cart
    </motion.a>
  </Link>
</Badge>
              
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
    </>
  );
};

export default Header;
