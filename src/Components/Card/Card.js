/* eslint-disable no-unused-vars */
/* eslint-disable react/style-prop-object */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */

import React, { useContext, useState } from 'react';
import { FormattedMessage, FormattedNumber } from 'react-intl';
import styles from './Card.module.css';
import messages from './messages';
import { Context } from '../../i18n/provider';
import { currencyConversion } from '../../i18n/utils/currencyConversion';
import { localeToMeasurementMapper } from '../../i18n/utils/measurementMapper';

const Card = ({
  name, price, unit, quantity, addItem, removeItem,
}) => {
  const context = useContext(Context);
  return (
    <div className={styles.wrapper}>
      <div>
        <div className={styles.data}>
          <FormattedMessage
            {...messages.name}
            values={{ nm: name }}
          />
        </div>
        <div className={styles.data}>
          <FormattedMessage
            {...messages.price}
          />
          <FormattedNumber
            value={currencyConversion(price, context.currency)}
            style="currency"
            currencyDisplay="symbol"
            currency={context.currency}
          />
        </div>
        <div className={styles.count}>
          <button type="button" className={styles.quantityBtns} onClick={removeItem}>-</button>
          <div>
            {unit !== 'numeric' ? (
              <FormattedNumber
                value={quantity}
                style="unit"
                unit={localeToMeasurementMapper[context.local][unit]}
                unitDisplay="narrow"
              />
            ) : (
              <div>
                {quantity >= 0 ? (
                  <FormattedMessage
                    {...messages.quantity}
                    values={{ count: quantity }}
                  />
                ) : null}
              </div>
            )}
          </div>
          <button className={styles.quantityBtns} type="button" onClick={addItem}>+</button>
        </div>

      </div>
    </div>
  );
};
export default Card;
