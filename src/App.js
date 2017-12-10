import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import {Paper} from 'material-ui'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { createMuiTheme } from 'material-ui/styles'
import { purple, green, red } from 'material-ui/colors'
import Navbar from './components/Navbar'
import Home from './components/Home'

const theme = createMuiTheme({
  palette: {
    primary: {
      ...purple,
      500: '#37a000'
    },
    secondary: {
      ...green,
      A400: '#00e677'
    },
    error: red,
    white: {
      500: '#ffffff'
    }
  },
})

class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Router>
          <div>
            <Switch>
              <Route exact path="/" component={Home} />
            </Switch>
          </div>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;
