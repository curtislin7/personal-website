import React from 'react';
import HomeStyles from './HomePageStyles';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import PopoverHoverWord from '../../components/PopoverHoverWord';
import ProfilePic from './profile-pic.png';

const useStyles = makeStyles(HomeStyles);
const HomePage = () => {
  const classes = useStyles();
  const [isPicLoaded, setIsPicLoaded] = React.useState(false);
  React.useEffect(()=>{
    const headShot = new Image();
    headShot.src = ProfilePic;
    headShot.onload = () => setIsPicLoaded(true);
  }, [])

  return (
    <div>
      {
        isPicLoaded ?
        <> 
          <div className={classes.header}>
          <div><img height='125'src={ProfilePic} alt="profile pic"/></div>
          <h1 className={classes.headerTitle}>Curtis Lin</h1>
          <div className={classes.headerSubtitle}><span role="img" aria-label="mountain">Boulder, Colorado ⛰</span></div>
          <div className={classes.links}>
            <IconButton edge="end" color="inherit" aria-label="github" href="https://github.com/curtislin7">
              <GitHubIcon />
            </IconButton>
            <IconButton edge="end" color="inherit" aria-label="linkedin" href="https://www.linkedin.com/in/curtislin/">
              <LinkedInIcon />
            </IconButton>
            <IconButton edge="end" color="inherit" aria-label="github" href="mailto:curtislin7@gmail.com">
              <EmailIcon />
            </IconButton>
          </div>
          </div>
          <div>
            <div className={classes.resume}>
              <div className={classes.section}>
                  <div className={classes.sectionTitle}>Experience</div>
                  <hr className={classes.line}/>
                  <div className={classes.sectionHeader}>
                    <div className={classes.company}>Acorns,&nbsp;</div>
                    <div className={classes.location}>Irvine, California</div>
                    <div className={classes.date}>September 2020-August 2018</div>
                  </div>
                  <div className={classes.role}>Software Engineer</div>
                  <ul className={classes.points}>
                    <li>Architected and shipped a GraphQL microservice for forwarding/tracking user events, fulfilling rewards, and providing relational user data as part of Acorns’ new referrals platform</li>
                    <li>Designed and built an internal referrals support tool with React for Acorns’ customer support team, with functionality to view user’s referred friends and the respective campaigns they are involved in  </li>
                  </ul>
                  <div className={classes.sectionHeader}>
                    <div className={classes.company}>Zayo Group,&nbsp;</div>
                    <div className={classes.location}>Boulder, Colorado</div>
                    <div className={classes.date}>June 2019-September 2020</div>
                  </div>
                  <div className={classes.role}>Software Engineer</div>
                  <ul className={classes.points}>
                    <li>Architected and shipped a machine-learning app to automatically categorize emails and pay invoices using Python, React, and Node.js leading to a $2000 per week savings</li>
                    <li>Implemented the automation of the ‘three-way match’ process of internal financial teams by developing database interactions between the Salesforce and Oracle systems leading to the reduction of tedious labor</li>
                    <li>Constructed GitLab CI/CD pipelines for automatic testing and deployments in team repositories</li>
                  </ul>
                  <div className={classes.sectionHeader}>
                    <div className={classes.company}>University of Colorado at Boulder,&nbsp;</div>
                    <div className={classes.location}>Boulder, Colorado</div>
                    <div className={classes.date}>January 2019-May 2019</div>
                  </div>
                  <div className={classes.role}>Course Assistant – CSCI 3202 Artificial Intelligence</div>
                  <ul className={classes.points}>
                    <li>Provided support for students who have questions about artificial intelligence course material</li>
                    <li>Assisted instructor with planning of course materials, activities, and other projects regarding the class</li>
                    <li>Provided guidance for student questions via written explanations through email and Piazza class forum</li>
                  </ul>
                </div>
                <div className={classes.section}>
                  <div className={classes.sectionTitle}>Recent Projects</div>
                  <hr className={classes.line}/>
                  <ul className={classes.points}>
                    <li><a className={classes.pointHeader} href={'https://bit.ly/2WsF9L9'}>Olfactory Search Strategy Simulations:&nbsp;</a>Simulated a target (human) with an odor moving on a path and an agent (dog) who searched for the target using different methods to find an optimal search strategy</li>
                    <li><a className={classes.pointHeader} href={'https://sun-tracker.herokuapp.com/'}>Sunset Tracker:&nbsp;</a>Created a Node.js/React app that finds user location via the Google Maps API, sunrise-sunset.org API, and Twilio SMS API to text users when a sunset is about to happen</li>
                    <li><a className={classes.pointHeader} href={'https://bit.ly/2V9BY7m'}>Sudoku Solver:&nbsp;</a>– Implemented a backtracking search algorithm to solve randomly generated Sudoku puzzle boards</li>
                    <li><span className={classes.pointHeader}>Open Source Contributions:&nbsp;</span>Resolved issues in Base Web, Uber’s React UI Framework, as well as Material-UI, a popular React UI Framework</li>
                  </ul>
                </div>
                <div className={classes.section}>
                  <div className={classes.sectionTitle}>Education</div>
                  <hr className={classes.line}/>
                  <div className={classes.sectionHeader}>
                    <div className={classes.company}>University of Colorado at Boulder</div>
                    <div className={classes.date}>May 2019</div>
                  </div>
                  <div className={classes.degree}>Bachelor’s Computer Science</div>
                  <div className={classes.degree}>Bachelor’s Business Administration</div>
                  <ul className={classes.points}>
                    <li><span className={classes.pointHeader}>Technical GPA:&nbsp;</span>3.7</li>
                    <li><span className={classes.pointHeader}>Coursework:&nbsp;</span>Algorithms, Data Structures, Principles of Programming Languages, Artificial Intelligence, Computer Systems, Discrete Structures, Data Science, Dynamic Algorithms for Molecular Biology </li>
                  </ul>
                </div>
                <div className={classes.section}>
                  <div className={classes.sectionTitle}>Volunteering</div>
                  <hr className={classes.line}/>
                  <div className={classes.sectionHeader}>
                    <div className={classes.company}>Horizons Summer Enrichment Program,&nbsp;</div>
                    <div className={classes.location}>Denver, Colorado</div>
                  </div>
                  <ul className={classes.points}>
                    <li>Volunteer for Horizons Summer Enrichment Program, a non-profit organization that provides an educational summer experience for underprivileged students in elementary and middle school</li>
                    <li>Led small group and individual classroom curriculum for English, Reading, and Math</li>
                  </ul>
                </div>
                <div className={classes.section}>
                  <div className={classes.sectionTitle}>Skills</div>
                  <hr className={classes.line}/>
                  <ul className={classes.points}>
                    <li>Programming: Javascript, Python, Apex</li>
                    <li>Technologies: Heroku, Git, Salesforce, React, Gitlab CI/CD, Docker</li>
                  </ul>
                </div>
                <div className={classes.section}>
                  <div className={classes.sectionTitle}>Additional Information</div>
                  <hr className={classes.line}/>
                  <ul className={classes.points}>
                    <li>Languages: Chinese (Mandarin)</li>
                    <li><div className={classes.lineContent}>Interests: Basketball,&nbsp;<PopoverHoverWord text='Horology' content='horology: a fancy word for watch enthusiasts!'/></div></li>
                    <li><a href={'https://www.youtube.com/watch?v=j8Bxhls5r7k'}>Winner of the 2013 CSMTA concerto competition for violin</a></li>
                  </ul>
                </div>
            </div>
          </div> 
        </> : 
        <div/>
      }
    </div> 
  );
}
export default HomePage;
