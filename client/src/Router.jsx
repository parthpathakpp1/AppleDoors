// Router.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Customization from './pages/Customization';
import {CartProvider} from "./context/cart"
import CartPage from './pages/CartPage';
import Register from './pages/Auth/register/Register';
import Login from './pages/Auth/login/Login';
import { useAuth } from './context/auth'; 
import ForgotPassword from './pages/Auth/forgot/ForgotPassword';
import Profile from './pages/user/Profile';
import Dashboard from './pages/user/Dashboard';
import PrivateRoute from './components/Routes/Private';
import AdminRoute from './components/Routes/Admin';
import AdminDashboard from './pages/admin/AdminDashboard';
import CreateCategory from './pages/Admin/CreateCategory';
import CreateProduct from './pages/Admin/CreateProduct';
import Products from './pages/Admin/Products';
import Users from './pages/Admin/Users';
import Orders from './pages/user/Orders';
import UpdateProduct from './pages/Admin/UpdateProduct';
import AdminOrders from './pages/Admin/AdminOrders';
import Categories from './pages/Categories';
import CategoryProduct from './pages/CategoryProduct';
import ProductDetails from './pages/ProductDetails';
import DoorCard from './components/Doorcard/DoorCard';




const Router = () => {
  const [auth] = useAuth(); 
  return (
  <CartProvider>
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/customization" element={<Customization />} />
        <Route path="/product/:slug" element={<ProductDetails/>} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/category/:slug" element={<CategoryProduct />} />

       
        <Route path='/dashboard' element={<PrivateRoute />}>
        <Route path="user" element={<Dashboard />} />
         <Route path="user" element={<Dashboard />} />
        <Route path="user/orders" element={<Orders />} />
        <Route path="user/profile" element={<Profile />} />
        </Route>
        
        <Route path='/dashboard' element={<AdminRoute />}>
        <Route path="admin" element={<AdminDashboard />} />
        <Route path="admin/create-category" element={<CreateCategory />} />
        <Route path="admin/create-product" element={<CreateProduct />} />
        <Route path="admin/product/:slug" element={<UpdateProduct />} />
        <Route path="admin/users" element={<Users/>} />
        <Route path="admin/orders" element={<AdminOrders/>} />
        <Route path="admin/products" element={<Products/>} />
        </Route>
        
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/login" element={<Login />} />
        <Route path="/customization/:doorName" element={<Customization />} /> 
        <Route path='/cart' element={<CartPage />} />
      </Routes> 
    </BrowserRouter>
    </CartProvider>

  );
};

export default Router;
