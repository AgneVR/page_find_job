import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NewArticles.module.scss';

const NewArticles = () => {
  return (
    <div className={styles['new-articles']}>
      <h2>Recent News Articles</h2>
      <p>Fresh job related news content posted each day.</p>
      <div className={styles['all-reviews']}>
        <div className={styles['one-review']}>
          <div className={styles.img}>
            <img
              src='https://wordpressmu-470622-2067955.cloudwaysapps.com/classic/wp-content/uploads/sites/2/2016/04/blog-image-327-400x200.jpg'
              alt=''
            />
          </div>
          <h3>The Best (and Worst) Canadian Merchant Account Providers</h3>
          <div>
            March 29, 2016 |<span> 0 Comments</span>
          </div>
          <p>
            A job is a regular activity performed in exchange for payment. A person usually begins a
            job by becoming an employee, volunteering, or starting a business. The duration of a job
            may range from an hour (in the case of odd jobs) to a lifetime (in the case of some
            judges). If a person is
          </p>
          <Link to={`/`}>Continue reading</Link>
        </div>
        <div className={styles['one-review']}>
          <div className={styles.img}>
            <img
              src='https://wordpressmu-470622-2067955.cloudwaysapps.com/classic/wp-content/uploads/sites/2/2016/04/blog-image-432-400x200.jpg'
              alt=''
            />
          </div>
          <h3>The Best (and Worst) Canadian Merchant Account Providers</h3>
          <div>
            March 29, 2016 |<span> 0 Comments</span>
          </div>
          <p>
            A job is a regular activity performed in exchange for payment. A person usually begins a
            job by becoming an employee, volunteering, or starting a business. The duration of a job
            may range from an hour (in the case of odd jobs) to a lifetime (in the case of some
            judges). If a person is
          </p>
          <Link to={`/`}>Continue reading</Link>
        </div>

        <div className={styles['one-review']}>
          <div className={styles.img}>
            <img
              src='https://wordpressmu-470622-2067955.cloudwaysapps.com/classic/wp-content/uploads/sites/2/2016/04/blog-image-345-400x200.jpg'
              alt=''
            />
          </div>
          <h3>The Best (and Worst) Canadian Merchant Account Providers</h3>
          <div>
            March 29, 2016 |<span> 0 Comments</span>
          </div>
          <p>
            A job is a regular activity performed in exchange for payment. A person usually begins a
            job by becoming an employee, volunteering, or starting a business. The duration of a job
            may range from an hour (in the case of odd jobs) to a lifetime (in the case of some
            judges). If a person is
          </p>
          <Link to={`/`}>Continue reading</Link>
        </div>
      </div>
    </div>
  );
};

export default NewArticles;
