import React from 'react'
import './Orders.css'
import '../Admin/AdminDashboard.css'
import LandingFooter from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import AdminMenu from '../../components/AdminMenu/AdminMenu';
const Users= () => {
  return (
    <>
    <Header />
     <div className='dashboard'>
     <div className='col-md-3'>
      <AdminMenu />
     </div>
     <div className='col-md-9'>
    <h1>Users</h1>
     </div>
     </div>
     <LandingFooter />
 
  
   </>
  )
}

export default Users