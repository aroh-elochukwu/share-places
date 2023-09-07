import React from "react";
import { createPortal } from "react-dom";

import styles from './SideDrawer.module.css';


const SideDrawer = props => {
  const content = <aside className={styles['side-drawer']}> {props.children} </aside>;


  return ( 
    createPortal(content, document.getElementById('drawer-hook'))
   );
}
 
export default SideDrawer;