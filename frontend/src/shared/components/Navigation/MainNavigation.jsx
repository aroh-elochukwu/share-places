import React from "react";
import {Link} from 'react-router-dom';


import MainHeader from './MainHeader';
import styles from './MainNavigation.module.css';

const MainNavigation = props => {
  return (  
    <MainHeader>
      <button className={styles['main-navigation__menu-btn']} >
        <span/>
        <span/>
        <span/>
      </button>
      <h1 className={styles['main-navigation__title']}>
        <Link to={'/'}>Share-Places</Link>
      </h1>
      <nav>
        ...
      </nav>
    </MainHeader>
  );
}

 
export default MainNavigation;