/* eslint-disable react/prop-types */
import React, { Fragment, useState } from 'react';
import { IntlProvider } from 'react-intl';

import { LOCALES } from './locales';
import messages from './messages';

export const Context = React.createContext();

// default lang -  ENGLISH
const Provider = ({ children, locale = LOCALES.ENGLISH }) => {
  const [local, setLocal] = useState(locale);
  const selectLanguage = (e) => {
    setLocal(e.target.value);
  };
  return (
    <Context.Provider value={{ local, selectLanguage }}>
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
