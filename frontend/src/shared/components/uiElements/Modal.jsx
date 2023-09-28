import React from "react";
import {createPortal} from 'react-dom';
import {CSSTransition} from 'react-transition-group';

import Backdrop from "./Backdrop";
import styles from './Modal.module.css';


// createPortal(content , document.getElementById('backdrop-hook'))

const ModalOverlay = props => {
  const content = (
    <div className={`${styles.modal} ${props.className}`} style={props.style}>
      <header className={`${styles['modal__header']} ${props.headerClass}`}>
        <h2>{props.header}</h2>
      </header>
      <form
        onSubmit={
          props.onSubmit ? props.onSubmit : e => e.preventDefault
        }
      >
        <div className={`${styles['modal__content']} ${props.contentClass}`}>
          {props.children}
        </div>
        <footer className={`${styles['modal__footer']} ${props.footerClass}`}>
          {props.footer}
        </footer>

      </form>

    </div>

  );

  return createPortal(content , document.getElementById('modal-hook'));

};


const Modal = props => {
  return ( 
    <React.Fragment>
      {props.show && <Backdrop onClick={props.onCancel}/>}
      <CSSTransition
        in={props.show}
        mountOnEnter
        unmountOnExit
        timeout={200}
        classNames={styles.modal}
      >
        <ModalOverlay {...props} />

      </CSSTransition>
    </React.Fragment>

   );
}
 
export default Modal;
