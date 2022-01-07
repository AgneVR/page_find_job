import React, { useState } from 'react';
import ContentWrapper from '../../components/UI/ContentWrapper/ContentWrapper';
import styles from './PostAJob.module.scss';

const PostAJob = ({ jobTypes, categories, jobArr, cities, onSubmit }) => {
  const currentDate = () => {
    let currentMonth = new Date().getMonth();
    let currentDay = new Date().getDate();
    if (parseInt(currentMonth) < 10) {
      currentMonth = `0${currentMonth + 1}`;
    }
    if (parseInt(currentDay) < 10) {
      currentDay = `0${currentDay}`;
    }
    return `${new Date().getFullYear()}-${currentMonth}-${currentDay}`;
  };

  const [filterfieldsValues, setFilterfieldsValues] = useState({
    email: '',
    password: '',
    company: '',
    title: '',
    city_id: '',
    web_url: '',
    job_type_id: '',
    category: '',
    img: '',
    description: '',
    logo_url: '',
    company_description: '',
    company_facebook: '',
    company_linkedIn: '',
    id: new Date().getTime(),
    posted: currentDate(),
  });

  const onChangeHandler = (e) => {
    let targetValue = '';
    if (
      e.target.name === 'city_id' ||
      e.target.name === 'job_type_id' ||
      e.target.name === 'category'
    ) {
      if (e.target.value === '') {
        targetValue = e.target.value;
      } else {
        targetValue = Number(e.target.value);
      }
    } else {
      targetValue = e.target.value;
    }
    setFilterfieldsValues({ ...filterfieldsValues, [e.target.name]: targetValue });
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    onSubmit(filterfieldsValues);
    //console.log(filterfieldsValues);
  };

  return (
    <ContentWrapper>
      <div className={styles['post-job-container']}>
        <form onSubmit={formSubmitHandler}>
          <div className={styles['input-style']}>
            <label>your email</label>
            <input
              onChange={onChangeHandler}
              name='email'
              type='email'
              placeholder='you@yourdomain.com'
              required
            />
          </div>
          <div className={styles['input-style']}>
            <label>your password</label>
            <input
              onChange={onChangeHandler}
              name='password'
              placeholder=''
              type='password'
              required
            />
          </div>
          <div className={styles['input-style']}>
            <label>company</label>
            <input
              onChange={onChangeHandler}
              name='company'
              placeholder='enter company'
              type='text'
              required
            />
          </div>
          <div className={styles['input-style']}>
            <label>job title</label>
            <input onChange={onChangeHandler} name='title' placeholder='' type='text' required />
          </div>
          <div className={styles['input-style']}>
            <label>location</label>
            <select
              onChange={onChangeHandler}
              name='city_id'
              id='city_id'
              value={filterfieldsValues.city_id}
              required
            >
              <option value=''>Select city</option>
              {cities.map((el, i) => (
                <option key={`${i}-city`} value={el.id}>
                  {el.title}
                </option>
              ))}
            </select>
            <span>Leave this blank if the location is not important</span>
          </div>
          <div className={styles['input-style']}>
            <label>aplication email/url</label>
            <input
              onChange={onChangeHandler}
              name='web_url'
              placeholder='Enter an email address or website URL'
              type='text'
              required
            />
          </div>
          <div className={styles['input-style']}>
            <label>job type</label>
            <select
              onChange={onChangeHandler}
              name='job_type_id'
              id='job_type_id'
              value={filterfieldsValues.job_type_id}
              required
            >
              <option value=''>Job types</option>
              {jobTypes.map((el, i) => (
                <option key={`${i}-jobType`} value={el.id}>
                  {el.title}
                </option>
              ))}
            </select>
          </div>
          <div className={styles['input-style']}>
            <label>job category</label>
            <select
              onChange={onChangeHandler}
              name='category'
              id='category'
              value={filterfieldsValues.category}
              required
            >
              <option value=''>Choose a category...</option>
              {categories.map((el, i) => (
                <option key={`${i}-category`} value={el.id}>
                  {el.title}
                </option>
              ))}
            </select>
          </div>
          <div className={styles['input-style']}>
            <label>featured image</label>
            <input
              onChange={onChangeHandler}
              name='img_url'
              placeholder='Enter image URL'
              type='text'
              required
            />
          </div>
          <div className={styles['input-style']}>
            <label>Description</label>
            <textarea
              onChange={onChangeHandler}
              name='description'
              rows='10'
              placeholder=''
              type='text'
              required
            />
          </div>
          <div className={styles['input-style']}>
            <label>logo</label>
            <input
              onChange={onChangeHandler}
              name='logo_url'
              placeholder='Enter logo URL'
              type='text'
              required
            />
          </div>
          <h3>Company details</h3>
          <div className={styles['input-style']}>
            <label>Description</label>
            <textarea
              onChange={onChangeHandler}
              name='company_description'
              rows='10'
              placeholder=''
              type='text'
              required
            />
          </div>
          <div className={styles['input-style']}>
            <label>facebook username (optional)</label>
            <input
              onChange={onChangeHandler}
              name='company_facebook'
              placeholder='your company'
              type='text'
            />
          </div>
          <div className={styles['input-style']}>
            <label>linkedin username (optional)</label>
            <input
              onChange={onChangeHandler}
              name='company_linkedIn'
              placeholder='your company'
              type='text'
            />
          </div>
          <div>
            <button type='button' className={styles.preview}>
              preview
            </button>
            <button type='submit' className={styles.save}>
              Save job
            </button>
          </div>
        </form>
      </div>
    </ContentWrapper>
  );
};

export default PostAJob;
