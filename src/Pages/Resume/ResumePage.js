import React from 'react';
import ResumePageStyles from './ResumePageStyles';
import { makeStyles } from '@material-ui/core/styles';
// import Resume from './Resume'

const useStyles = makeStyles(ResumePageStyles);

const ResumePage = () => {
  const classes = useStyles();
  return (
    <div className={classes.resume}>
      {/* <div className={classes.resumeItem}>
          <Resume/>
      </div> */}
      <div className={classes.item}>
        <h1>
         Here is Curtis Lin's Resume
        </h1>
      </div>
    </div>
  );
}

export default ResumePage;
