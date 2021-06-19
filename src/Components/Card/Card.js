/* eslint-disable react/prop-types */

import React from 'react';
import styles from './Card.module.css';

const Card = ({
  name, price, quantity,
}) => (
  <div className={styles.wrapper}>
    <div>
      <div>{name}</div>
      <div>{price}</div>
      <div>{quantity}</div>
    </div>
    <div>
      <div>Count</div>
      <div className={styles.quantityBtns}>
        <button type="button" onClick={() => {}}>-</button>
        <button type="button" onClick={() => {}}>+</button>
      </div>
      <button type="button" onClick={() => {}}>Add</button>
    </div>
  </div>
);

export default Card;
