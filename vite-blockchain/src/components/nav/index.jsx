import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul style={{marginLeft: "12px"}} className="navbar-list">
        <li className="navbar-item"> 
            <NavLink 
                to='/' 
                className="navbar-link">
                Home
            </NavLink>
        </li>
        <li className="navbar-item"> 
            <NavLink 
                to='/aboutus' 
                className="navbar-link">
                About Us
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
  );
};

export default Navbar;