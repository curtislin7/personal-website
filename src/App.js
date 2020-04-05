import React from 'react'
import { Route, Switch } from 'react-router-dom'
import HomePage from './Pages/Home/HomePage'
// import ResumePage from './Pages/Resume/ResumePage'
import Navigation from './components/Nav'
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { theme } from './AppTheme';


const App = () => {
  return (
    <ThemeProvider theme={theme}>
      {/* <Navigation/> */}
      <Switch>
      <Route exact path="/" component={HomePage}/>
        {/* <Route path="/resume" component={ResumePage} /> */}
      </Switch>
    </ThemeProvider>
  )
}

export default App;