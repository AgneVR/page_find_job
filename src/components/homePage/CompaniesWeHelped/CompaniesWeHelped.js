import React from 'react';
import styles from './CompaniesWeHelped.module.scss';

const CompaniesWeHelped = ({ block }) => {
  return (
    <>
      {block === 'upperBlock' ? (
        <div className={styles['helped-container']}>
          <h2>Companies We've Helped</h2>
          <p>Some of the companies we've helped recruit excellent applicants over the years.</p>
          <div className={styles.logo}>
            <img
              src='https://wordpressmu-470622-2067955.cloudwaysapps.com/classic/wp-content/uploads/sites/2/2013/07/optimizely-logo-final.svg'
              alt='logo'
            />
            <img
              src='https://wordpressmu-470622-2067955.cloudwaysapps.com/classic/wp-content/uploads/sites/2/2013/07/desk-logo-final.svg'
              alt='logo'
            />
            <img
              src='https://wordpressmu-470622-2067955.cloudwaysapps.com/classic/wp-content/uploads/sites/2/2013/07/dribbble-logo-final.svg'
              alt='logo'
            />
            <img
              src='https://wordpressmu-470622-2067955.cloudwaysapps.com/classic/wp-content/uploads/sites/2/2013/07/disqus-logo-final.svg'
              alt='logo'
            />
            <img
              src='https://wordpressmu-470622-2067955.cloudwaysapps.com/classic/wp-content/uploads/sites/2/2013/07/dolby-logo-final.svg'
              alt='logo'
            />
          </div>
        </div>
      ) : (
        <div className={styles['helped-container']}>
          <h2>Jobify Site Stats</h2>
          <p>
            Here we list our site stats and how many people we’ve helped find a job and companies
            have found recruits. It's a pretty awesome stats area!
          </p>
          <div className={styles['jobify-stats']}>
            <ul>
              <li>
                <span>20</span>
                Jobs Posted
              </li>
              <li>
                <span>0</span>
                Jobs Filled
              </li>
              <li>
                <span>20</span>
                Companies
              </li>
              <li>
                <span>5,298</span>
                Members
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default CompaniesWeHelped;
