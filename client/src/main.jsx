import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './Router';
import { AuthProvider } from './context/auth';
import './index.css';
import 'antd/dist/reset.css'


ReactDOM.createRoot(document.getElementById('root')).render(
    
            <React.StrictMode>
            <AuthProvider>
                <Router />
                </AuthProvider>
            </React.StrictMode>
       
   
);
