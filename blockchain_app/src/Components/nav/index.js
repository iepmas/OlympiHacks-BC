import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div style={{display: "flex"}}>
      <nav className="navbar" style={{width:"100%"}}>
        <ul className="navbar-list">
          <li>
            <div className='logo' style={{margin:"12px"}}>
              <img src="dc-logo.png" alt="logo"></img>
            </div>
          </li>
          <li className="navbar-item"> 
              <NavLink 
                  to='/' 
                  className="navbar-link">
                  Home
              </NavLink>
          </li>
          <li className="navbar-item"> 
              <NavLink 
                  to='/resources' 
                  className="navbar-link">
                  Resources
              </NavLink>
          </li>
          <li className="navbar-item"> 
              <NavLink 
                  to='/people' 
                  className="navbar-link">
                  People
              </NavLink>
          </li>
          <li className="navbar-item"> 
              <NavLink 
                  to='/reports' 
                  className="navbar-link">
                  Reports
              </NavLink>
          </li>
        </ul>
      </nav>
    </div>
    
  );
};

export default Navbar;