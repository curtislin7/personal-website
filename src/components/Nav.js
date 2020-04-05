import React from 'react';
import NavStyles from './NavStyles';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import GitHubIcon from '@material-ui/icons/GitHub';
const useStyles = makeStyles(NavStyles);
const NavBar = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar className = {classes.appBar} position ="static">
        <Toolbar>
          <IconButton edge="start"className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Button color="inherit" href="/">Home</Button>
          <Button color="inherit" href="/resume" className={classes.resumeButton}>Resume</Button>
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