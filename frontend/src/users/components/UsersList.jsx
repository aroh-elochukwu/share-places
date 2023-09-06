import React from 'react';

import UserItem from './UserItem';
import styles from  './UsersList.module.css';

const UsersList = props => {
  if (props.items.length === 0) {
    return (
      <div className={styles.center}>
        <h2>No Users found.</h2>
      </div>
    );
  }

  return (
    <ul className='users-list'>
      {props.items.map(user => (
        <UserItem 
          key={user.id}
          id={user.id}
          image={user.image}
          name={user.name}
          placeCount={user.places}
        />

      ))}

    </ul>
  );

};
 
export default UsersList;