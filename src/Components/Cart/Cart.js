/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from 'react';
import { FormattedMessage } from 'react-intl';
import styles from './Cart.module.css';
import messages from './messages';

const Cart = ({ cartItems }) => (
  <div className={styles.cartContent}>
    <FormattedMessage
      {...messages.quantity}
      values={{ count: cartItems }}
    />
  </div>
);

export default Cart;
