import React from 'react';

import Avatar from '../../shared/components/uiElements/Avatar'
import styles from './UserItem.module.css'

const UserItem = props => {
  return ( 
    <li className={styles["user-item"]}> 
      <div className='user-item__content'>
        <div className='user-item__image'>
          <Avatar image={props.image} alt={props.name}/>
        </div>
        <div className='user-item__info'>
          <h2>{props.name}</h2>
          <h3>{props.placeCount}{props.placeCount === 1 ? 'Place' : 'Places'}</h3>
        </div>
      </div>
    </li>
  );
}
 
export default UserItem;
