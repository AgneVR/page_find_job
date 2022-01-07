import React from 'react';
import { Link } from 'react-router-dom';
import ContentWrapper from '../../components/UI/ContentWrapper/ContentWrapper';
import CompaniesWeHelped from '../../components/homePage/CompaniesWeHelped/CompaniesWeHelped';
import RecruitingAdvantage from '../../components/homePage/RecruitingAdvantage/RecruitingAdvantage';
import OneJobRow from '../../components/homePage/OneJobRow/OneJobRow';
import CandidatesReview from '../../components/homePage/CandidatesReview/CandidatesReview';
import NewArticles from '../../components/homePage/NewArticles/NewArticles';
import Footer from '../../components/Footer/Footer';
import styles from './Home.module.scss';

const Home = ({ jobArr }) => {
  return (
    <>
      <div className={styles['home-container']}>
        <div className={styles['welcome-bg']}>
          <ContentWrapper>
            <div className={styles.content}>
              <h2>The Easiest Way to Get Your New Job</h2>
              <p>Find jobs, create trackable resumes and enrich your applications.</p>
              <Link to={`/find-a-job`}>Search jobs</Link>
            </div>
          </ContentWrapper>
        </div>
      </div>
      <ContentWrapper>
        <CompaniesWeHelped block='upperBlock' />
      </ContentWrapper>

      <RecruitingAdvantage block='upperBlock' />

      <ContentWrapper>
        <div className={styles['all-jobs']}>
          <h3>Hundreds of Jobs From All Over the Globe</h3>
          <ul className={styles['job-listings']}>
            {jobArr.map((job, i) => (
              <OneJobRow key={i} job={job} />
            ))}
          </ul>
        </div>
      </ContentWrapper>

      <RecruitingAdvantage block='downBlock' />

      <ContentWrapper>
        <CompaniesWeHelped block='downBlock' />
      </ContentWrapper>

      <CandidatesReview />

      <ContentWrapper>
        <NewArticles />
      </ContentWrapper>

      <Footer />
    </>
  );
};

export default Home;
