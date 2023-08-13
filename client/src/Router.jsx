// Router.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Customization from './pages/Customization';
import {CartProvider} from "./context/cart"
import CartPage from './pages/CartPage';
import Register from './pages/Auth/register/Register';
import Login from './pages/Auth/login/Login';
import { AuthProvider } from './context/auth.jsx';

const Router = () => {
  return (
    <CartProvider>
    <AuthProvider>
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/customization/:doorName" element={<Customization />} /> 
        <Route path='/cart' element={<CartPage />} />
      </Routes> 
    </BrowserRouter>
    </AuthProvider>
    </CartProvider>
  
  );
};

export default Router;
