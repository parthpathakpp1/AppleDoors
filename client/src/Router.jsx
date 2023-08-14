// Router.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Customization from './pages/Customization';
import {CartProvider} from "./context/cart"
import CartPage from './pages/CartPage';
import Register from './pages/Auth/register/Register';
import Login from './pages/Auth/login/Login';
import { AuthProvider } from './context/auth';
import ForgotPassword from './pages/Auth/forgot/ForgotPassword';
import Dashboard from './pages/user/Dashboard';
import PrivateRoute from './components/Routes/Private';


const Router = () => {
  return (
    <AuthProvider>
    <CartProvider>
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        
        <Route path="/register" element={<Register />} />
        <Route path='/dashboard' element={<PrivateRoute />}>
         <Route path="" element={<Dashboard />} />
        </Route>
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/customization/:doorName" element={<Customization />} /> 
        <Route path='/cart' element={<CartPage />} />
      </Routes> 
    </BrowserRouter>
    </CartProvider>
    </AuthProvider>
  );
};

export default Router;
