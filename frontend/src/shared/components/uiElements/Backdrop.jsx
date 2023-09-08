import React from 'react';
import {createPortal} from 'react-dom';

import styles from './Backdrop.module.css';

const Backdrop = props => {
  const content = <div className={styles.backdrop} onClick={props.onClick}></div>

 return (
  createPortal( content , document.getElementById('backdrop-hook'))
 ); 
}

export default Backdrop;


