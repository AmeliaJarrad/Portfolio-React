import { NavLink } from 'react-router';
import classes from './NavBar.module.scss';

 function NavBar() {
  const linkStyles = ({ isActive }) =>
    isActive ? `${classes.link} ${classes.active_link}` : classes.link;

  return (
    <nav className={classes.nav}>
      <NavLink className={linkStyles} to="/">
        Home
      </NavLink>
      <NavLink className={linkStyles} to="/about">
        About
      </NavLink>
      <NavLink className={linkStyles} to="/projects">
        Projects
      </NavLink>
    
    </nav>
  );
}

export default NavBar