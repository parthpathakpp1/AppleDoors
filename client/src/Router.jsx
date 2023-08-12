// Router.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Customization from './pages/Customization';
import {CartProvider} from "./context/cart"
import CartPage from './pages/CartPage';

const Router = () => {
  return (
    <CartProvider>
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/customization/:doorName" element={<Customization />} /> 
        <Route path='/cart' element={<CartPage />} />
      </Routes> 
    </BrowserRouter>
    </CartProvider>
  
  );
};

export default Router;
