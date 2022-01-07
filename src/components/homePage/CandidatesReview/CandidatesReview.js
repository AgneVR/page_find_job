import React from 'react';
import ContentWrapper from '../../UI/ContentWrapper/ContentWrapper';
import styles from './CandidatesReview.module.scss';

const CandidatesReview = () => {
  return (
    <div className={styles['review-container']}>
      <ContentWrapper>
        <div className={styles.content}>
          <h2>Kind Words From Happy Candidates</h2>
          <p>What other people thought about the service provided by Jobify</p>
        </div>
        <div className={styles['reviews-block']}>
          <div className={styles['one-review']}>
            <p>
              I’m incredibly pleased with Jobify’s service. They offer quality candidates & super
              quick support, they have turned me into a big fan.
            </p>
            <div className={styles.img}>
              <img
                src='https://wordpressmu-470622-2067955.cloudwaysapps.com/classic/wp-content/uploads/sites/2/2013/07/avatar-image-7-150x150.jpg'
                alt=''
              />
              <h5>Customer #7</h5>
            </div>
          </div>
          <div className={styles['one-review']}>
            <p>
              Without Jobify i’d be homeless, they found me a job and got me sorted out quickly with
              everything! Can’t quite believe the service level that they offer!
            </p>
            <div className={styles.img}>
              <img
                src='https://wordpressmu-470622-2067955.cloudwaysapps.com/classic/wp-content/uploads/sites/2/2013/07/avatar-image-4-150x150.jpg'
                alt=''
              />
              <h5>Customer #6</h5>
            </div>
          </div>
          <div className={styles['one-review']}>
            <p>
              Excellent service offering a personal touch, if I had an issue they were no longer
              than a phone call away and were always quick to respond.
            </p>
            <div className={styles.img}>
              <img
                src='https://wordpressmu-470622-2067955.cloudwaysapps.com/classic/wp-content/uploads/sites/2/2013/07/avatar-image-6-150x150.jpg'
                alt=''
              />
              <h5>Customer #1</h5>
            </div>
          </div>
          <div className={styles['one-review']}>
            <p>
              Jobify offer an amazing service and I couldn’t be happier! They are dedicated to
              helping recruiters find great candidates, wonderful service!
            </p>
            <div className={styles.img}>
              <img
                src='https://wordpressmu-470622-2067955.cloudwaysapps.com/classic/wp-content/uploads/sites/2/2013/07/avatar-image-5-150x150.jpg'
                alt=''
              />
              <h5>Customer #2</h5>
            </div>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default CandidatesReview;
