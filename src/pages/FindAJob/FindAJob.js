import React, { useState } from 'react';
import ContentWrapper from '../../components/UI/ContentWrapper/ContentWrapper';
import OneJobRow from '../../components/homePage/OneJobRow/OneJobRow';
import Footer from '../../components/Footer/Footer';
import styles from './FindAJob.module.scss';

const FindAJob = ({ jobArr, jobTypes, cities, categories }) => {
  const [filterfieldsValues, setFilterfieldsValues] = useState({
    title: '',
    city: '',
    category: '',
    job_type_id: [],
  });

  const [filteredJobs, setFilteredJobs] = useState(jobArr);

  const onChangeHandler = (e) => {
    let targetValue = '';
    if (e.target.name === 'title') {
      targetValue = e.target.value;
    } else {
      if (e.target.value === '') {
        targetValue = e.target.value;
      } else {
        targetValue = Number(e.target.value);
      }
    }

    setFilterfieldsValues({ ...filterfieldsValues, [e.target.name]: targetValue });
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    console.log(filterfieldsValues, 'filterfieldsValues.job_type_id');
    let newArr = [...jobArr];

    if (filterfieldsValues.title !== '') {
      let filteredBytitle = newArr.filter((el) =>
        el.title.toLowerCase().includes(filterfieldsValues.title.toLowerCase()),
      );
      newArr = [...filteredBytitle];
    }

    if (filterfieldsValues.city !== '') {
      let filteredByCity = newArr.filter((el) => el.city.id === filterfieldsValues.city);
      newArr = [...filteredByCity];
    }
    if (filterfieldsValues.category !== '') {
      let filteredByCategory = newArr.filter(
        (el) => el.category.id === filterfieldsValues.category,
      );
      newArr = [...filteredByCategory];
    }

    if (filterfieldsValues.job_type_id.length > 0) {
      let filteredByCategory = newArr.filter((el) =>
        filterfieldsValues.job_type_id.includes(el.jobType.id),
      );
      newArr = [...filteredByCategory];
    }
    console.log(filterfieldsValues, 'filterfieldsValues');
    setFilteredJobs([...newArr]);
  };

  function checkboxes() {
    return jobTypes.map((el, i) => {
      if (filterfieldsValues.job_type_id.length > 0) {
        if (filterfieldsValues.job_type_id.includes(el.id)) {
          return (
            <li key={`${i}-jobtypes`}>
              <label>
                <input
                  onChange={onChangeHandler}
                  type='checkbox'
                  name='job_type_id'
                  value={el.id}
                  checked='checked'
                />
                {el.title}
              </label>
            </li>
          );
        } else {
          return (
            <li key={`${i}-jobtypes`}>
              <label>
                <input
                  onChange={onChangeHandler}
                  type='checkbox'
                  name='job_type_id'
                  value={el.id}
                  checked=''
                />
                {el.title}
              </label>
            </li>
          );
        }
      } else {
        return (
          <li key={`${i}-jobtypes`}>
            <label>
              <input
                onChange={onChangeHandler}
                type='checkbox'
                name='job_type_id'
                value={el.id}
                checked=''
              />
              {el.title}
            </label>
          </li>
        );
      }
    });
  }

  return (
    <>
      <div className={styles.map}></div>
      <ContentWrapper>
        <div className={styles['find-job']}>
          <form onSubmit={formSubmitHandler}>
            <div className={styles.selects}>
              <div>
                <input
                  onChange={onChangeHandler}
                  placeholder='Keywords'
                  name='title'
                  value={filterfieldsValues.title}
                />
              </div>
              <div>
                <select
                  onChange={onChangeHandler}
                  name='city'
                  id='city'
                  value={filterfieldsValues.city}
                >
                  <option value=''>City</option>
                  {cities.map((el, i) => (
                    <option key={`${i}-city`} value={el.id}>
                      {el.title}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <select
                  onChange={onChangeHandler}
                  name='category'
                  id='category'
                  value={filterfieldsValues.category}
                >
                  <option value=''>Choose a category...</option>
                  {categories.map((el, i) => (
                    <option key={`${i}-category`} value={el.id}>
                      {el.title}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <button type='submit'>Search</button>
              </div>
            </div>
            <div className={styles.checkboxes}>
              <ul>{checkboxes()}</ul>
            </div>
          </form>
        </div>
        <div className={styles.filtered}>
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job, i) => <OneJobRow key={i} job={job} />)
          ) : (
            <p className={styles.notFound}>Data not found</p>
          )}
        </div>
      </ContentWrapper>
      <Footer />
    </>
  );
};

export default FindAJob;
