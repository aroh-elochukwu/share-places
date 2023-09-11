import React from "react";

import Card from "../../shared/components/UIElements/Card";
import styles from './PlaceItem.module.css';


const PlaceItem = props => {
  return ( 
    <li className={styles['place-item']}>
      <Card className={styles['place-item__content']}>
        <div className={styles['place-item__image']}>
          <img src={props.image}  alt={props.title}/>
        </div>
        <div className={styles['place-item__info']}>
          <h2>{props.title}</h2>
          <h3>{props.address}</h3>
          <p>{props.description}</p>
        </div>
        <div className={styles['place-item__actions']}>
          <button>VIEW ON MAP</button>
          <button>EDIT</button>
          <button>DELETE</button>
        </div>
      </Card>
    </li>
   );
}
 
export default PlaceItem;