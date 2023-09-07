import React from "react";

import styles from './MainHeader.module.css';

const MainHeader = props => {
  return ( 
    <div className={styles.main}> 
      <header className={styles['main-header']}>
        {props.children}
      </header>

    </div>
    
  );
}
 
export default MainHeader;