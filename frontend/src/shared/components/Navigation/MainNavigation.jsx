import React from "react";
import {Link} from 'react-router-dom';


import MainHeader from './MainHeader';
import NavLinks from "./NavLinks";
import SideDrawer from "./SideDrawer";
import styles from './MainNavigation.module.css';

const MainNavigation = props => {
  return ( 
    <React.Fragment>
      <SideDrawer>
        <nav className={styles['main-navigation__drawer-nav']}>
          <NavLinks/>
        </nav>
      </SideDrawer>
      <MainHeader>
        <button className={styles['main-navigation__menu-btn']} >
          <span/>
          <span/>
          <span/>
        </button>
        <h1 className={styles['main-navigation__title']}>
          <Link to={'/'}>Share-Places</Link>
        </h1>
        <nav className={styles['main-navigation__header-nav']}>
          <NavLinks/>
        </nav>
      </MainHeader>

    </React.Fragment> 
    
  );
}

 
export default MainNavigation;