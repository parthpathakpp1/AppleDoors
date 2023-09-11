import React from "react";
import { NavLink } from "react-router-dom";
import "./AdminMenu.css"; // Import the CSS file

const menuItems = [
  { to: "/dashboard/admin/create-category", label: "Create Category" },
  { to: "/dashboard/admin/create-product", label: "Create Product" },
  { to: "/dashboard/admin/products", label: "Products" },
  { to: "/dashboard/admin/users", label: "Users" },
  { to: "/dashboard/admin/orders", label: "Orders" },
];

const AdminMenu = () => {
  return (
    <div className="dashboard-menu">
      <h4>Admin Panel</h4>
      {menuItems.map((item) => (
        <NavLink key={item.to} to={item.to} className="list-group-item">
          {item.label}
        </NavLink>
      ))}
    </div>
  );
};

export default AdminMenu;
