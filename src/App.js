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
  overrides:{
    MuiButton: {
      root: {
        background: 'linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%)',
        borderRadius: 2,
        border: 0,
        height: 40,
        color: 'white',
        padding: '0 20px',
        boxShadow: '0 3px 5px 2px rgba(25, 105, 135, .99)',
      }
    }
  }
})

class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Router>
          <div>
            <Paper>
              <Navbar />
            </Paper>
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
