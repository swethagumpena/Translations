/* eslint-disable react/prop-types */
import React, { Fragment, useState } from 'react';
import { IntlProvider } from 'react-intl';

import { LOCALES } from './locales';
import messages from './messages';

export const Context = React.createContext();

const Provider = ({ children, locale = LOCALES.ENGLISH }) => {
  const currencies = { 'en-us': 'USD', 'de-de': 'GBP', 'fr-ca': 'EUR' };
  const [local, setLocal] = useState(locale);
  const [currency, setCurrency] = useState(currencies[locale]);
  const selectLanguage = (e) => {
    setLocal(e.target.value);
    setCurrency(currencies[e.target.value]);
  };

  return (
    <Context.Provider value={{ local, selectLanguage, currency }}>
      <IntlProvider
        locale={local}
        textComponent={Fragment}
        messages={messages[local]}
      >
        {children}
      </IntlProvider>
    </Context.Provider>
  );
};

export default Provider;
