import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMapMarkerAlt,
  faCalendar,
  faHome,
  faTag,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faGooglePlusG, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import ContentWrapper from '../../components/UI/ContentWrapper/ContentWrapper';
import Footer from '../../components/Footer/Footer';
import styles from './OneJob.module.scss';

const OneJob = ({ jobArr }) => {
  const [oneJob, setOneJob] = useState(null);

  let { jobID } = useParams();

  useEffect(() => {
    const currentJob = jobArr.find((el) => Number(el.id) === Number(jobID));
    if (currentJob !== undefined) {
      setOneJob(currentJob);
    }
  }, [jobID]);

  return (
    <>
      {oneJob === null ? (
        <p>Job do not exist</p>
      ) : (
        <div className={styles['one-job']}>
          <div className={styles.header}>
            <h1>{oneJob.title}</h1>
            <ul>
              <li>{oneJob.jobType.title}</li>
              <li>
                <FontAwesomeIcon icon={faMapMarkerAlt} />
                {oneJob.city.title}
              </li>
              <li>
                <FontAwesomeIcon icon={faCalendar} />
                Posted: {oneJob.posted}
              </li>
              <li>
                <FontAwesomeIcon icon={faHome} />
                {oneJob.title}
              </li>
            </ul>
          </div>
          <ContentWrapper>
            <div className={styles.content}>
              <div className={styles['upper-section']}>
                <div className={styles['right-side']}>
                  <div className={styles.img}>
                    <img
                      src={
                        oneJob.img === ''
                          ? 'https://wordpressmu-470622-2067955.cloudwaysapps.com/classic/wp-content/uploads/sites/2/2014/03/company-logo-sspace.jpg'
                          : oneJob.img
                      }
                      alt=''
                    />
                  </div>
                  <div>
                    <h3>Job Categories</h3>
                    <p>
                      <FontAwesomeIcon icon={faTag} />
                      {oneJob.category.title}
                    </p>
                    <h3>Share Posting</h3>
                    <div className={styles['icons-container']}>
                      <div className={styles.icons}>
                        <FontAwesomeIcon className={styles.darkBlue} icon={faFacebookF} />
                      </div>
                      <div className={styles.icons}>
                        <FontAwesomeIcon className={styles.red} icon={faGooglePlusG} />
                      </div>
                      <div className={styles.icons}>
                        <FontAwesomeIcon className={styles.lightBlue} icon={faLinkedinIn} />
                      </div>
                      <div className={styles.icons}>
                        <FontAwesomeIcon className={styles.grey} icon={faEnvelope} />
                      </div>
                    </div>
                  </div>
                </div>

                <div className={styles['left-side']}>
                  <h3>Company Social Profiles</h3>
                  <p>
                    <FontAwesomeIcon icon={faFacebookF} /> Facebook
                  </p>
                  <div>
                    <button className={styles.apply}>Apply for job</button>
                    <button className={styles.login}>Login to bookmark this job</button>
                  </div>
                </div>
              </div>
              <div className={styles['text-container']}>
                <h2>Overview</h2>

                <img
                  src='https://wordpressmu-470622-2067955.cloudwaysapps.com/classic/wp-content/uploads/sites/2/2014/03/hero-job-image.jpg'
                  alt=''
                />

                <h3>Company Description</h3>
                <p>
                  Company is a 2016 Iowa City-born start-up that develops consectetuer adipiscing
                  elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque,
                  aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin
                  laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh.
                  Nullam mollis. Ut justo. Suspendisse potenti.
                </p>
                <p>
                  Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus
                  libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida
                  id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at
                  felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu
                  pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et,
                  dapibus sed, urna.
                </p>
                <p>
                  Company is a 2016 Iowa City-born start-up that develops consectetuer adipiscing
                  elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque,
                  aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin
                  laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh.
                  Nullam mollis. Ut justo. Suspendisse potenti.
                </p>
                <p>
                  Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus
                  libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida
                  id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at
                  felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu
                  pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et,
                  dapibus sed, urna.
                </p>
                <h3>Job Description</h3>
                <p>
                  As Marketing Graphic Designer, your primary responsibility is to assist the
                  Marketing and Social Media team with a variety of graphic design tasks ranging
                  from email, ads, print, and website design. You will be responsible to take a set
                  of instructions, or a stated problem, and produce clean, modern design assets that
                  are within the brand requirements of our company and our products. As part of the
                  process, this person will collaborate with members of the marketing, design and
                  product teams to gain a clear understanding of the campaign expectations, target
                  audience, and product positioning.
                </p>
                <p>
                  The right candidate will possess video production and editing skills. You will
                  work with the marketing and social media team in the video production cycle from
                  pre-production planning through post-production editing (video training
                  available).
                </p>
                <p>
                  Design work will be completed in a timely fashion, largely unsupervised short of
                  regular design feedback, and meet the stated requirements of the
                  requestor/stakeholder.
                </p>
                <p>
                  For website design, a basic level of coding is required in order to turn designs
                  into live websites.
                </p>
                <h3>Key Objectives</h3>
                <ul>
                  <li>
                    Take a set of instructions or a stated problem and produce clean, modern design
                    assets that are within the brand requirements of our company and our products.
                  </li>
                </ul>
                <h3>Primary Areas of Accountability</h3>
                <ul>
                  <li>
                    Collaborate with the Marketing Manager to deliver effective, direct response
                    e-mail designs for marketing campaigns
                  </li>
                  <li>
                    Work with stakeholders from sales and marketing to design print materials,
                    including sales brochures and mailers
                  </li>
                  <li>
                    Work closely with the CMO and in-house design team, taking direction on our new
                    website design for corporate and product sites, including writing HTML and CSS
                  </li>
                  <li>
                    Work closely with the CMO and in-house design team to compile the corporate and
                    product family branding style guides (icons, color palettes, etc)
                  </li>
                  <li>
                    Develop design assets for new product launches, including screenshots and icons
                    for app store listings
                  </li>
                </ul>
                <h3>Required Knowledge, Skills, and Abilities</h3>
                <ul>
                  <li>
                    Ability to write code – HTML & CSS (SCSS flavor of SASS preferred when writing
                    CSS)
                  </li>
                  <li>
                    Proficient in Photoshop, Illustrator, bonus points for familiarity with Sketch
                    (Sketch is our preferred concepting tool)
                  </li>
                  <li>Cross-browser and platform testing as standard practice</li>
                </ul>
                <h3>Education + Experience</h3>
                <ul>
                  <li>Advanced degree or equivalent experience in graphic and web design</li>
                  <li>3 or more years of professional design experience</li>
                  <li>Direct response email experience</li>
                  <li>Ecommerce website design experience</li>
                  <li>
                    Excellent communication skills, most notably a demonstrated ability to solicit
                    and address creative and design feedback
                  </li>
                </ul>
                <div>
                  <button className={styles.apply}>Apply for job</button>
                </div>
              </div>
            </div>
          </ContentWrapper>
          <Footer />
        </div>
      )}
    </>
  );
};

export default OneJob;
