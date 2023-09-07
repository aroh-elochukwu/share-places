import React from 'react';
import { Link } from 'react-router-dom';

import Avatar from '../../shared/components/uiElements/Avatar'
import Card from '../../shared/components/uiElements/Card';
import styles from './UserItem.module.css'

const UserItem = props => {
  return ( 
    <li className={styles['user-item']}> 
      <div className={styles['user-item__content']}>
        <Card>
          <Link to={`/${props.id}`}>
            <div className={styles['user-item__image']}>
              <Avatar image={props.image} alt={props.name} />
            </div>
            <div className={styles['user-item__info']}>
              <h2>{props.name}</h2>
              <h3>{props.placeCount}{props.placeCount === 1 ? 'Place' : 'Places'}</h3>
            </div>
          </Link>
        </Card>
      </div>
    </li>
  );
}
 
export default UserItem;
