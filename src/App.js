import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import HomePage from './Pages/Home/HomePage'
import { ThemeProvider } from '@material-ui/core/styles';
import { theme } from './AppTheme';


const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={HomePage}/>
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App;