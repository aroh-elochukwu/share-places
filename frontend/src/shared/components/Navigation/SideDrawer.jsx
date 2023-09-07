import React from "react";

import styles from './SideDrawer.module.css';


const SideDrawer = props => {
  return ( 
    <aside className={styles['side-drawer']}>
      {props.children}
    </aside>
   );
}
 
export default SideDrawer;