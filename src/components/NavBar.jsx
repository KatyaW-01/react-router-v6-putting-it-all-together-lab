import './NavBar.css'
import { NavLink } from "react-router-dom"

function NavBar() {
  return (
    <nav className="navbar">
      <NavLink 
        to="/" 
        style={({isActive}) => ({})}
        >
        Home
      </NavLink>

      <NavLink 
        to="/directors" 
        style={({isActive}) => ({})}
        >
        Directors
      </NavLink>

      <NavLink 
        to="/about" 
        style={({isActive}) => ({})}
        >
        About
      </NavLink>
    </nav>
  );
}

export default NavBar;
