import React from 'react';
import { Link } from 'react-router-dom';
import NavStyles from './NavStyles';
import { makeStyles } from '@mui/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import GitHubIcon from '@mui/icons-material/GitHub';

const useStyles = makeStyles(NavStyles);

const NavBar = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Button color="inherit" component={Link} to="/">Home</Button>
          <Button color="inherit" component={Link} to="/resume" className={classes.resumeButton}>Resume</Button>
          <div className={classes.grow} />
          <IconButton edge="end" className={classes.githubButton} color="inherit" aria-label="github" href="https://github.com/curtislin7">
            <GitHubIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      
    </div>
  );
}
export default NavBar;