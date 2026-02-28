import React from 'react';
import ResumePageStyles from '../Resume/ResumePageStyles';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(ResumePageStyles);

const HomePage = () => {
  const classes = useStyles();
  return (
    <div className={classes.resume}>
      <div className={classes.content}>
        {/* Header / Contact */}
        <header className={classes.header}>
          <img src={`${process.env.PUBLIC_URL}/profile.png`} alt="Curtis Lin" className={classes.profilePic} />
          <h1 className={classes.name}>Curtis Lin</h1>
          <div className={classes.contact}>
            <span>New York, NY</span>
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
          <p className={classes.summary}>
            Senior Backend Engineer with a track record of shipping high-stakes financial infrastructure on time: T+1 SEC settlement, $500k fraud prevention, and distributed event pipelines at scale.
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
            <div className={classes.roleRow}>
              <span className={classes.role}>Software Engineer I</span>
              <span className={classes.date}>September 2020–September 2021</span>
            </div>
            <ul className={classes.bulletList}>
              <li>Owned end-to-end delivery of T+1 SEC-mandated share settlement ahead of the May 2024 regulatory deadline; designed fraud-risk prevention logic to close exploitation windows introduced by the new settlement timeline, saving $1m/year in losses.</li>
              <li>Architected the event pipeline powering Acorns' Money Manager, enabling paycheck splitting across product offerings via SQS, Lambda, and EventBridge; drove cross-functional alignment across Data Engineering, Banking, and external vendor stakeholders to ship a net-new distributed system from scratch.</li>
              <li>Built a multi-agent AI on-call assistant using agentic tool-calling to dynamically query AWS, Datadog, and GitHub APIs in real time, surfacing team-specific runbooks and triaging alerts autonomously; won internal hackathon.</li>
              <li>Designed an operational tasks framework enabling Investment Operations to self-serve common data fixes without engineering involvement, eliminating a class of support tickets and saving ~1,000 engineering hours annually.</li>
              <li>Tech Lead for Advisory team. Set technical direction across Core, Early, and Later products and grew two engineers to independent contributors.</li>
            </ul>
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
          <ul className={classes.bulletList}>
            <li>Technical GPA – 3.7</li>
          </ul>
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
        </section>

        {/* Skills */}
        <section className={classes.section}>
          <h2 className={classes.sectionTitle}>Skills</h2>
          <p className={classes.skillsRow}><strong>Languages:</strong> Typescript, Ruby, Python</p>
          <p className={classes.skillsRow}><strong>Technologies:</strong> Node.js, PostgreSQL, DynamoDB, GraphQL, AWS (SQS, Lambda, EventBridge, CloudWatch), Temporal, Rails, Sidekiq, Databricks</p>
          <p className={classes.skillsRow}><strong>Observability:</strong> Datadog, CloudWatch, Databricks notebooks</p>
          <p className={classes.skillsRow}><strong>Domains:</strong> Financial transaction systems, SEC-regulated settlement, fraud prevention, distributed event pipelines, internal developer tooling</p>
        </section>
      </div>
    </div>
  );
};

export default HomePage;
