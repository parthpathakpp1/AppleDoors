import './UserMenu.css';
import { NavLink } from "react-router-dom";

const UserMenu = () => {
  return (
    <div className="user-dashboard-menu">
      <h4 className='dashboard-menu-heading'>Dashboard</h4>
      <NavLink
        to="/dashboard/user/orders"
        className="user-list-group-item"
        activeClassName="user-active-link"
      >
        Orders
      </NavLink>
      {/* Add more NavLink items here */}
    </div>
  );
}

export default UserMenu;
