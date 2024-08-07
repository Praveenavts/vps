import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Logo from './images/paysliplogo.png';

const Header = ({ username, onLogout }) => {
  return (
    <header className="navbar">
      <div className="navbar-left">
        <Link to="/">
          <img src={Logo} alt="Logo" />
        </Link>
      </div>
      <div className="navbar-right">
        <div className="username">{username}</div>
        <button className="logout-button" onClick={onLogout}>Logout</button>
      </div>
    </header>
  );
};

export default Header;
