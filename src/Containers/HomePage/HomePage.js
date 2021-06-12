/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { FormattedMessage } from 'react-intl';
import { products } from '../../Utils/mockData';
import Card from '../../Components/Card/Card';
import styles from './HomePage.module.css';
import messages from './messages';

const HomePage = () => (
  <div className={styles.sideMenu}>
    <div className={styles.cardWrapper}>
      {products.map((product) => (
        <Card
          name={(
            <FormattedMessage
              {...messages.name}
              values={{ nm: product.name }}
            />
          )}
          price={(
            <FormattedMessage
              {...messages.price}
              values={{ pr: product.price }}
            />
          )}
          quantity={(
            <FormattedMessage
              {...messages.quantity}
              values={{ qt: product.quantity }}
            />
          )}
        />
      ))}
    </div>
  </div>
);

export default HomePage;
