import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Home from './pages/Home/Home';
import FindAJob from './pages/FindAJob/FindAJob';
import NavBar from './components/NavBar/NavBar';
import PostAJob from './pages/PostAJob/PostAJob';
import OneJob from './pages/OneJob/OneJob';
import styles from './App.module.scss';

const categories = [
  {
    id: 1,
    title: 'Design',
  },
  {
    id: 2,
    title: 'Development',
  },
  {
    id: 3,
    title: 'Marketing',
  },
];
const cities = [
  {
    id: 1,
    title: 'Vilnius',
  },
  {
    id: 2,
    title: 'Kaunas',
  },
  {
    id: 3,
    title: 'Klaipeda',
  },
];
const jobTypes = [
  {
    id: 1,
    title: 'Freelance',
  },
  {
    id: 2,
    title: 'Full Time',
  },
  {
    id: 3,
    title: 'Intership',
  },
  {
    id: 4,
    title: 'Part Time',
  },
  {
    id: 5,
    title: 'Temporary',
  },
];

function App() {
  const [jobs, setJobs] = useState([
    {
      id: 1,
      img: 'https://wordpressmu-470622-2067955.cloudwaysapps.com/classic/wp-content/uploads/sites/2/2014/03/company-logo-shopify.jpg',
      title: 'Art Director',
      category: {
        id: 1,
        title: 'Design',
      },
      city: {
        id: 1,
        title: 'Vilnius',
      },
      jobType: {
        id: 1,
        title: 'Freelance',
      },
      posted: '2020-03-03',
      email: '',
      password: '',
      company: '',
      web_url: '',
      img_url: '',
      description: '',
      logo_url: '',
      company_description: '',
      company_facebook: '',
      company_linkedIn: '',
    },
    {
      id: 2,
      img: 'https://wordpressmu-470622-2067955.cloudwaysapps.com/classic/wp-content/uploads/sites/2/2014/03/company-logo-sspace.jpg',
      title: 'Web Developer',
      category: {
        id: 2,
        title: 'Development',
      },
      city: {
        id: 2,
        title: 'Kaunas',
      },
      jobType: {
        id: 2,
        title: 'Full Time',
      },
      posted: '2020-04-04',
      email: '',
      password: '',
      company: '',
      web_url: '',
      img_url: '',
      description: '',
      logo_url: '',
      company_description: '',
      company_facebook: '',
      company_linkedIn: '',
    },
    {
      id: 3,
      img: 'https://wordpressmu-470622-2067955.cloudwaysapps.com/classic/wp-content/uploads/sites/2/2014/03/company-logo-okcupid.jpg',
      title: 'Marketing Director',
      category: {
        id: 3,
        title: 'Marketing',
      },
      city: {
        id: 3,
        title: 'Klaipeda',
      },
      jobType: {
        id: 2,
        title: 'Full Time',
      },
      posted: '2020-05-05',
      email: '',
      password: '',
      company: '',
      web_url: '',
      img_url: '',
      description: '',
      logo_url: '',
      company_description: '',
      company_facebook: '',
      company_linkedIn: '',
    },
    {
      id: 4,
      img: 'https://wordpressmu-470622-2067955.cloudwaysapps.com/classic/wp-content/uploads/sites/2/2014/03/company-logo-codepen.jpg',
      title: 'Marketing Director',
      category: {
        id: 3,
        title: 'Marketing',
      },
      city: {
        id: 1,
        title: 'Vilnius',
      },
      jobType: {
        id: 3,
        title: 'Intership',
      },
      posted: '2020-06-06',
      email: '',
      password: '',
      company: '',
      web_url: '',
      img_url: '',
      description: '',
      logo_url: '',
      company_description: '',
      company_facebook: '',
      company_linkedIn: '',
    },
  ]);

  const addHandler = (job) => {
    let city = cities.find((el) => el.id === job.city_id);
    let category = categories.find((el) => el.id === job.category);
    let jobType = jobTypes.find((el) => el.id === job.job_type_id);
    setJobs([...jobs, { ...job, city: city, category: category, jobType: jobType }]);
  };

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <>
          <Routes>
            <Route path='/' element={<Home jobArr={jobs} />} />
            <Route
              path='/find-a-job'
              element={
                <FindAJob
                  jobArr={jobs}
                  jobTypes={jobTypes}
                  cities={cities}
                  categories={categories}
                />
              }
            />
            <Route
              path='/post-a-job'
              element={
                <PostAJob
                  cities={cities}
                  jobTypes={jobTypes}
                  categories={categories}
                  jobArr={jobs}
                  onSubmit={addHandler}
                />
              }
            />
            <Route path='/job/:jobID' element={<OneJob jobArr={jobs} />} />
          </Routes>
        </>
      </BrowserRouter>
    </>
  );
}

export default App;
