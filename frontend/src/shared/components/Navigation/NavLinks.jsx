import React from "react";
import { NavLink } from "react-router-dom";

import styles from './NavLinks.module.css';

const NavLinks = props => {
  return ( 
    <ul className={styles['nav-links']}>
      <li>
        <NavLink to={'/'}>ALL USERS</NavLink>
      </li>
      <li>
        <NavLink to={'/n1/places'}>MY PLACES</NavLink>
      </li>
      <li>
        <NavLink to={'/places/new'}>ADD PLACE</NavLink>
      </li>
      <li>
        <NavLink to={'/auth'}>AUTHENTICATE</NavLink>
      </li>



    </ul>
   );
}
 
export default NavLinks;