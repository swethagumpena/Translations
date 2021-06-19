/* eslint-disable no-unused-vars */
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import HomePage from './Containers/HomePage/HomePage';

import { I18nProvider, LOCALES } from './i18n';

const App = () => (
  <I18nProvider>
    <NavBar />
    <Switch>
      <Route path="/" exact>
        <HomePage />
      </Route>
    </Switch>
  </I18nProvider>
);

export default App;
