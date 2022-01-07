import React from 'react';
import ContentWrapper from '../UI/ContentWrapper/ContentWrapper';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <>
      <div className={styles['footer-container']}>
        <ContentWrapper>
          <h1>Got a question?</h1>
          <p>
            We're here to help. Check out our FAQs, send us an email or call us at 1 800 555 5555
          </p>
          <div className={styles['down-part']}>
            <div>
              <img
                src='https://wordpressmu-470622-2067955.cloudwaysapps.com/classic/wp-content/uploads/sites/2/2016/04/classic-logo-footer.svg'
                alt=''
              />
              <p>
                Job Searching Just Got Easy. Use Jobify to run a hiring site and earn money in the
                process!
              </p>
            </div>
            <div>
              <h3>Site Map</h3>
              <ul>
                <li>Blog</li>
                <li>Bookmarks</li>
                <li>Cart</li>
                <li>Checkout</li>
                <li>Company Dashboard</li>
                <li>Jobify companies</li>
                <li>Manage Jobs</li>
              </ul>
            </div>
            <div>
              <h3>Recent News Articles</h3>
              <div>
                <p>The Best (and Worst) Canadian Merchant Account Providers</p>
                <p className={styles.text}>March 29, 2016</p>
              </div>
              <div>
                <p>The Best (and Worst) Canadian Merchant Account Providers</p>
                <p className={styles.text}>March 29, 2016</p>
              </div>
              <div>
                <p>The Best (and Worst) Canadian Merchant Account Providers</p>
                <p className={styles.text}>March 29, 2016</p>
              </div>
            </div>
            <div>
              <h3>Jobify Offices</h3>
              <p>Jobify Inc. 555 Madison Avenue, Suite F-2 Manhattan, New York 10282</p>
              <p>Jobify Inc. 555 Madison Avenue, Suite F-2 Manhattan, New York 10282</p>
            </div>
          </div>
        </ContentWrapper>
      </div>
      <div className={styles['green-block']}>
        <p> © 2022 Classic — All Rights Reserved </p>
      </div>
    </>
  );
};

export default Footer;
