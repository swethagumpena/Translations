/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FormattedDate, FormattedTime } from 'react-intl';
import styles from './NavBar.module.css';
import { Context } from '../../i18n/provider';

const NavBar = () => {
  const context = useContext(Context);
  return (
    <nav>
      <ul>
        <div className={styles.leftContent}>
          <Link to="/home">
            E-Shopper
          </Link>
        </div>
        <div className={styles.rightContent}>
          <div className={styles.time}>
            <FormattedTime
              value={new Date()}
              hour="numeric"
              minute="numeric"
              timeZoneName="long"
            />
          </div>
          <div className={styles.date}>
            <FormattedDate
              value={Date.now()}
              year="numeric"
              month="long"
              day="numeric"
              weekday="long"
            />
          </div>
          <select value={context.local} onChange={context.selectLanguage}>
            <option value="en-in">English</option>
            <option value="de-de">German</option>
            <option value="fr-ca">French</option>
          </select>
        </div>
      </ul>
    </nav>
  );
};

export default NavBar;
