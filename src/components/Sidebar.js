import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Sidebar = () => {
  return (
    <nav className="sidebar">
      <ul>
        <li><Link to="/"><div>About Us</div></Link></li>
        <li><Link to="/templates">Templates</Link></li>
        <li><Link to="/subscriptions">Subscriptions</Link></li>
      </ul>
    </nav>
  );
};

export default Sidebar;
