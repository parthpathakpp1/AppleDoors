import React, { useState } from 'react';
import './Header.css';
import { BiMenuAltRight, BiChevronDown, BiChevronUp } from 'react-icons/bi';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import OutsideClickHandler from 'react-outside-click-handler';
import { useCart } from '../../context/cart';
import { Badge } from 'antd';
import { useAuth } from '../../context/auth';
import useCategory from '../../hooks/useCategory';

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const [dropdownOpened, setDropdownOpened] = useState(false);
  const [userMenuOpened, setUserMenuOpened] = useState(false);
  const [categoryMenuOpened, setCategoryMenuOpened] = useState(false);
  const [cart] = useCart();
  const [auth, setAuth] = useAuth();
  const location = useLocation();
  const categories = useCategory();

  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: '',
    });
    localStorage.removeItem('auth');
  };

  const handleCategoryMenuToggle = () => {
    setCategoryMenuOpened((prev) => !prev);
  };


  const handleDropdownToggle = () => {
    setDropdownOpened((prev) => !prev);
  };

  const handleUserMenuToggle = () => {
    setUserMenuOpened((prev) => !prev);
  };

  const isActiveLink = (pathname) => {
    return location.pathname === pathname;
  };

  const getMenuStyles = (menuOpened) => {
    if (document.documentElement.clientWidth <= 800) {
      return { right: !menuOpened && '-100%' };
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
          <Link to='/'>
            <motion.div
              className='logo'
              initial={{ opacity: 0, y: -40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Apple Doors
            </motion.div>
          </Link>
          <OutsideClickHandler
            onOutsideClick={() => {
              setMenuOpened(false);
              setDropdownOpened(false);
              setUserMenuOpened(false); // Close user dropdown on outside click
            }}
          >
            <motion.div
              className='flexCenter h-menu'
              style={getMenuStyles(menuOpened)}
              variants={menuVariants}
              initial='closed'
              animate={menuOpened ? 'open' : 'closed'}
            >
              <Link to='/'>
                <motion.a href='' whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                  Home
                </motion.a>
              </Link>

              <Link to='/profile'>
                <motion.a href='' whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                  Profile
                </motion.a>
              </Link>

              <div className={`dropdown ${categoryMenuOpened ? 'open' : ''}`}>
              <Link to={"/categories"}>
            <span className='dropdown-toggle' onClick={handleCategoryMenuToggle}>
              Categories {categoryMenuOpened ? <BiChevronUp /> : <BiChevronDown />}
            </span>
            </Link>
            <div className='dropdown-menu category-link'>
            <li>
            <Link className='dropdown-item' to={"/categories"}>
                   All Categories
                  </Link>   
               
            </li>
              {categories?.map((c) => (
                <li key={c.slug}>
                  <Link className='dropdown-item' to={`/category/${c.slug}`}>
                    {c.name}
                  </Link>
                </li>
              ))}
            </div>
          </div>

              {/* User dropdown */}
              {auth.user ? (
                <div className={`dropdown ${dropdownOpened ? 'open' : ''}`}>
                  <span className='dropdown-toggle' onClick={handleUserMenuToggle}>
                  {auth?.user?.name} {userMenuOpened ? <BiChevronUp /> : <BiChevronDown />}
                  </span>
                  <div className='dropdown-menu dashboard-link'>
                    <Link to={`/dashboard/${auth?.user?.role === 1 ? 'admin' : 'user'}`}>Dashboard</Link>
                    <motion.a
                      className='active active-color logout-link'
                      href=''
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Link onClick={handleLogout} to='/login'>
                        Logout
                      </Link>
                    </motion.a>
                  </div>
                </div>
              ) : (
                <>
                  <motion.a className='active active-color' href='' whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                    <Link to='/register'>Signup</Link>
                  </motion.a>
                  <motion.a className='active active-color' href='' whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                    <Link to='/login'>Login</Link>
                  </motion.a>
                </>
              )}

              <Badge count={cart?.length} showZero>
                <Link to='/cart' className='cart-link'>
                  <motion.a href='' whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
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
