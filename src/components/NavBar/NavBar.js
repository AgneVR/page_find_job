import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NavBar.module.scss';

const NavBar = () => {
  return (
    <div className={styles['header-container']}>
      <nav className={styles['nav-bar']}>
        <img
          src='https://wordpressmu-470622-2067955.cloudwaysapps.com/classic/wp-content/uploads/sites/2/2016/04/classic-logo-new.svg'
          alt='logo'
        />
        <div>
          <Link to={`/`}>Home</Link>
          <Link to={`/find-a-job`}>Find A Job</Link>
          <Link to={`/post-a-job`}>Post A Job</Link>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
