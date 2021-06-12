/* eslint-disable no-unused-vars */
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import HomePage from './Containers/HomePage/HomePage';

const App = () => (
  <>
    <NavBar />
    <Switch>
      <Route path="/" exact>
        <HomePage />
      </Route>
    </Switch>
  </>
);

export default App;
