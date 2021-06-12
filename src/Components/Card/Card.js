/* eslint-disable react/prop-types */

import React from 'react';
import styles from './Card.module.css';

const Card = ({
  name, price, quantity,
}) => (
  <div>
    <div className={styles.wrapper}>
      <div>{name}</div>
      <div>{price}</div>
      <div>{quantity}</div>
    </div>
  </div>
);

export default Card;
