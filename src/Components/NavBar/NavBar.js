import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NavBar.module.css';

const NavBar = () => (
  <nav>
    <ul>
      <div className={styles.leftContent}>
        <Link to="/home">
          My App
        </Link>
      </div>
      <div className={styles.rightContent}>
        <div>HI</div>
      </div>
    </ul>
  </nav>
);

export default NavBar;
