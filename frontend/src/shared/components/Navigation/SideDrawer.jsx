import React from "react";
import {CSSTransition} from 'react-transition-group';

import styles from './SideDrawer.module.css';


const SideDrawer = props => {
  
  return ( 
    <CSSTransition
      in={props.show}
      nodeRef={'drawer-hook'}
      timeout={200}
      classNames={styles['slide-in-left']}
      mountOnEnter
      unmountOnExit
    >

      <aside className={styles['side-drawer']} onClick={props.onClick}> {props.children} </aside>

    </CSSTransition>
    
   );
}
 
export default SideDrawer;