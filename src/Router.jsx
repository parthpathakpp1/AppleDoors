// Router.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Customization from './pages/Customization';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/customization/:doorName" element={<Customization />} /> {/* Add this route */}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
