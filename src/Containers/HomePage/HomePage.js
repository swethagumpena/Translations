/* eslint-disable react/style-prop-object */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useContext } from 'react';
import { FormattedMessage, FormattedNumber } from 'react-intl';
import { products } from '../../Utils/mockData';
import Card from '../../Components/Card/Card';
import Cart from '../../Components/Cart/Cart';
import styles from './HomePage.module.css';
import messages from './messages';
import { Context } from '../../i18n/provider';

const HomePage = () => {
  const context = useContext(Context);
  return (
    <div className={styles.homePageWrapper}>
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
                <FormattedNumber
                  value={product.price}
                  style="currency"
                  currencyDisplay="symbol"
                  currency={context.currency}
                />
          )}
              quantity={(
                <FormattedMessage
                  {...messages.quantity}
                  values={{ count: product.quantity }}
                />
          )}
            />
          ))}
        </div>
      </div>
      <div className="bodyWrapper">
        <Cart />
      </div>
    </div>
  );
};

export default HomePage;
