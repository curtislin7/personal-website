import React from 'react';
import ResumePageStyles from './ResumePageStyles';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(ResumePageStyles);

const ResumePage = () => {
  const classes = useStyles();
  return (
    <div className={classes.resume}>
      <div className={classes.content}>
        {/* Header / Contact */}
        <header className={classes.header}>
          <h1 className={classes.name}>Curtis Lin</h1>
          <div className={classes.contact}>
            <span>4332 W 118th Place, Westminster, CO 80031</span>
            <span> • </span>
            <a href="mailto:curtislin7@gmail.com">curtislin7@gmail.com</a>
            <span> • </span>
            <a href="https://www.linkedin.com/in/curtislin" target="_blank" rel="noopener noreferrer">https://www.linkedin.com/in/curtislin</a>
            <span> • </span>
            <span>303-229-2859</span>
          </div>
        </header>

        {/* Professional Summary */}
        <section className={classes.section}>
          <h2 className={classes.sectionTitle}>Professional Summary</h2>
          <p className={classes.summary}>
            Senior Backend Engineer specializing in distributed systems and internal platforms. Designed high-throughput event pipelines, financial transaction systems, and developer tooling in cloud-native environments at scale.
          </p>
        </section>

        {/* Experience */}
        <section className={classes.section}>
          <h2 className={classes.sectionTitle}>Experience</h2>

          <div className={classes.job}>
            <div className={classes.jobHeader}>
              <span className={classes.company}>Acorns</span>
              <span className={classes.location}>Irvine, California</span>
            </div>
            <div className={classes.roleRow}>
              <span className={classes.role}>Senior Software Engineer</span>
              <span className={classes.date}>March 2025–Present</span>
            </div>
            <div className={classes.roleRow}>
              <span className={classes.role}>Software Engineer II</span>
              <span className={classes.date}>October 2021–February 2025</span>
            </div>
            <ul className={classes.bulletList}>
              <li>Architected high-throughput transaction event pipeline powering Acorns' flagship Money Manager product; aligned cross-functional teams and delivered production-grade distributed system.</li>
              <li>Architected backend order processing updates to support T+1 share settlement, introducing fraud-risk prevention logic that mitigated ~$500k/year in losses.</li>
              <li>Architected and shipped a GraphQL microservice for forwarding/tracking millions of user events, fulfilling rewards, and providing relational user data as part of Acorns' new referrals platform.</li>
              <li>Led team to win internal hackathon by designing and implementing a multi-agent on-call support assistant integrating live AWS services, Datadog, and GitHub APIs; enabled team-specific runbook retrieval to assist in debugging alerts and streamline incident triage.</li>
              <li>Designed and built an internal referrals support tool with React for Acorns' customer support team, with functionality to view user's referred friends and the respective campaigns they are involved in.</li>
              <li>Mentored engineers and onboarded a new backend developer to the IP on-call team, boosting productivity and freeing senior engineers for revenue-generating work.</li>
            </ul>
            <div className={classes.roleRow}>
              <span className={classes.role}>Software Engineer I</span>
              <span className={classes.date}>September 2020–September 2021</span>
            </div>
          </div>

          <div className={classes.job}>
            <div className={classes.jobHeader}>
              <span className={classes.company}>Zayo Group</span>
              <span className={classes.location}>Boulder, Colorado</span>
            </div>
            <div className={classes.roleRow}>
              <span className={classes.role}>Software Engineer</span>
              <span className={classes.date}>June 2019–September 2020</span>
            </div>
            <ul className={classes.bulletList}>
              <li>Designed and shipped ML-powered application to categorize emails and process invoices using Python, React, and Node.js leading to a $2000 per week savings.</li>
              <li>Constructed GitLab CI/CD pipelines for automatic testing and deployments in team repositories.</li>
              <li>Implemented the automation of the 'three-way match' process of internal financial teams by developing database interactions between the Salesforce and Oracle systems leading to the reduction of tedious labor.</li>
            </ul>
          </div>
        </section>

        {/* Education */}
        <section className={classes.section}>
          <h2 className={classes.sectionTitle}>Education</h2>
          <div className={classes.jobHeader}>
            <span className={classes.company}>University of Colorado at Boulder</span>
            <span className={classes.date}>May 2019</span>
          </div>
          <p className={classes.educationDetail}>Bachelor's Computer Science • Bachelor's Business Administration</p>
          <p className={classes.educationDetail}>Technical GPA: 3.7</p>
        </section>

        {/* Projects */}
        <section className={classes.section}>
          <h2 className={classes.sectionTitle}>Projects</h2>
          <div className={classes.project}>
            <div className={classes.projectHeader}>
              <span className={classes.projectName}>Popfunnel</span>
              <a href="http://bit.ly/4IO6L4R" target="_blank" rel="noopener noreferrer" className={classes.projectLink}>http://bit.ly/4IO6L4R</a>
            </div>
            <p className={classes.projectDesc}>Built a full-stack Node.js/React application that transforms SQL queries into dashboard-ready charts, with a PostgreSQL backend, Sequelize ORM, and AWS Lightsail deployment.</p>
          </div>
          <div className={classes.project}>
            <div className={classes.projectHeader}>
              <span className={classes.projectName}>Sudoku Solver</span>
              <a href="https://bit.ly/2V9BY7m" target="_blank" rel="noopener noreferrer" className={classes.projectLink}>https://bit.ly/2V9BY7m</a>
            </div>
            <p className={classes.projectDesc}>Implemented a backtracking search algorithm to solve randomly generated Sudoku puzzle boards.</p>
          </div>
        </section>

        {/* Skills */}
        <section className={classes.section}>
          <h2 className={classes.sectionTitle}>Skills</h2>
          <p className={classes.skillsRow}><strong>Programming Languages:</strong> Typescript, Ruby, Python</p>
          <p className={classes.skillsRow}><strong>Technologies:</strong> Node.js, Postgres, DynamoDB, GraphQL, AWS Cloud Infrastructure, Temporal, Rails</p>
        </section>
      </div>
    </div>
  );
};

export default ResumePage;
