import React from 'react'
import { Route, Switch } from 'react-router-dom'
import HomePage from './Pages/Home/HomePage'
import { ThemeProvider } from '@material-ui/core/styles';
import { theme } from './AppTheme';


const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Switch>
        <Route exact path="/" component={HomePage}/>
      </Switch>
    </ThemeProvider>
  )
}

export default App;