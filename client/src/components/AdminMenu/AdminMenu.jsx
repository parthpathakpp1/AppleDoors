import React from "react";
import { NavLink } from "react-router-dom";
import "./AdminMenu.css"; // Import the CSS file

const AdminMenu = () => {
  return (
    <>

      <div className="dashboard-menu">
        <h4>Admin Panel</h4>
        <NavLink to="/dashboard/admin/create-category" className="list-group-item">
          Create Category
        </NavLink>
        <NavLink to="/dashboard/admin/create-product" className="list-group-item">
          Create Product
        </NavLink>
        <NavLink to="/dashboard/admin/products" className="list-group-item">
          Products
        </NavLink>
        <NavLink to="/dashboard/admin/users" className="list-group-item">
          Users
        </NavLink>
        <NavLink to="/dashboard/admin/orders" className="list-group-item">
          Orders
        </NavLink>
      </div>

   
    </>
  );
};

export default AdminMenu;
