import React from 'react';
import { Link } from 'react-router-dom';
import styles from './RecruitingAdvantage.module.scss';
import ContentWrapper from '../../UI/ContentWrapper/ContentWrapper';

const RecruitingAdvantage = ({ block }) => {
  return (
    <>
      {block === 'upperBlock' ? (
        <div className={styles['recruiting-container']}>
          <ContentWrapper>
            <div className={styles.wrapper}>
              <div className={styles.content}>
                <h2>Make Recruiting Your Competitive Advantage</h2>
                <p>
                  Talent is a top priority for all startup founders and executives. Jobify offers a
                  way to completely optimize your entire recruiting process. Find better candidates,
                  conduct more focused interviews, and make data-driven hiring decisions.
                </p>
                <Link to={`/`}>get started</Link>
              </div>
            </div>
          </ContentWrapper>
        </div>
      ) : (
        <div className={styles['recruiting-containerLeft']}>
          <ContentWrapper>
            <div className={styles.wrapperLeft}>
              <div className={styles.content}>
                <h2>Join Thousands of Companies That Rely on Jobify</h2>
                <p>
                  Jobify offers a way to completely optimize your entire recruiting process. Find
                  better candidates, conduct more focused interviews, and make data-driven hiring
                  decisions.
                </p>
                <Link to={`/`}>get started</Link>
              </div>
            </div>
          </ContentWrapper>
        </div>
      )}
    </>
  );
};

export default RecruitingAdvantage;
