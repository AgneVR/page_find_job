import React from 'react';
import { Link } from 'react-router-dom';
import styles from './OneJobRow.module.scss';

const OneJobRow = ({ job }) => {
  return (
    <>
      <li className={styles.oneJob}>
        <Link to={`/job/${job.id}`}>
          <div className={styles.leftSide}>
            <div className={styles.imgBlock}>
              <img
                src={
                  job.img === ''
                    ? 'https://wordpressmu-470622-2067955.cloudwaysapps.com/classic/wp-content/uploads/sites/2/2014/03/company-logo-sspace.jpg'
                    : job.img
                }
                alt='logo'
              />
            </div>
            <div>
              <p>{job.title}</p>
              <h4>{job.category.title}</h4>
            </div>
          </div>
          <div className={styles.rightSide}>
            <div className={styles.place}>
              <p>
                <img
                  className={styles.location}
                  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKDvfDYa7YwUjwuMZyNwDlfL_CL6ZCLa1zaA&usqp=CAU'
                  alt=''
                />
                {job.city.title}
              </p>
            </div>
            <div className={styles.jobsTitle}>
              {job.jobType.id === 1 && <p className={styles.redLight}>{job.jobType.title}</p>}
              {job.jobType.id === 2 && <p className={styles.green}>{job.jobType.title}</p>}
              {job.jobType.id === 3 && <p className={styles.pink}>{job.jobType.title}</p>}
              {job.jobType.id === 4 && <p className={styles.violet}>{job.jobType.title}</p>}
              {job.jobType.id === 5 && <p className={styles.green}>{job.jobType.title}</p>}
              <span className={styles.data}>Posted: {job.posted}</span>
            </div>
          </div>
        </Link>
      </li>
    </>
  );
};

export default OneJobRow;
