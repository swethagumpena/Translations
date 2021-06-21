/* eslint-disable no-unused-vars */
/* eslint-disable react/style-prop-object */
import React, { useState, useEffect } from 'react';
import { products } from '../../Data/mockData';
import Card from '../../Components/Card/Card';
import Cart from '../../Components/Cart/Cart';
import styles from './HomePage.module.css';

const HomePage = () => {
  const [cartQuantity, setCartQuantity] = useState({});
  const [cartItems, setCartItems] = useState(0);

  useEffect(() => {
    const quantity = products.reduce((prevValue, item) => ({
      ...prevValue,
      [item.id]: 0,
    }), {});
    setCartQuantity(quantity);
  }, []);

  const addItem = (id) => {
    const updatedQuantity = cartQuantity[id] + 1;
    const updatedCartQuantity = { ...cartQuantity, [id]: updatedQuantity };
    setCartQuantity(updatedCartQuantity);
    const totalItems = Object.values(updatedCartQuantity).reduce(
      (acc, item) => acc + item,
      0,
    );
    setCartItems(totalItems);
  };

  const removeItem = (id) => {
    if (cartQuantity[id] > 0) {
      const updatedQuantity = cartQuantity[id] - 1;
      const updatedCartQuantity = { ...cartQuantity, [id]: updatedQuantity };
      setCartQuantity(updatedCartQuantity);
      const totalItems = Object.values(updatedCartQuantity).reduce(
        (acc, item) => acc + item,
        0,
      );
      setCartItems(totalItems);
    }
  };
  return (
    <div className={styles.homePageWrapper}>
      <div className={styles.sideMenu}>
        <div className={styles.cardWrapper}>
          {products.map((product) => (
            <Card
              name={product.name}
              price={product.price}
              unit={product.unit}
              quantity={cartQuantity[product.id]}
              addItem={() => addItem(product.id)}
              removeItem={() => removeItem(product.id)}
            />
          ))}
        </div>
      </div>
      <div className={styles.bodyWrapper}>
        <Cart cartItems={cartItems} />
      </div>
    </div>
  );
};

export default HomePage;
