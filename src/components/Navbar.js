import React from 'react'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'

import {
  AppBar, Toolbar, Avatar, Button,
  Grid
} from 'material-ui'
import Menu, { MenuItem } from 'material-ui/Menu'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import '../styles/navbar.css'
import {Intro} from './Introduction'

const styles = {
  root: {
    margin: '10px'
  },
  button: {
    fontSize: '30px',
    color: 'white',
    fontWeight: '1000',
  }
}


class Navbar extends React.Component{
  constructor(props){
    super(props)
  }
  
  render(){
    return (
      <Grid container style={styles.root}>
        <Grid item lg={3} md={4} sm={5} xs={6}>
          <Button style={styles.button}> 
            Portia
          </Button>
        </Grid>
        <Grid item lg={6} md={4} sm={2} xs={0}> </Grid>
        <Grid item lg={3} md={4} sm={5} xs={6}>
          <Button style={styles.button}>
            Contact Me
          </Button>
        </Grid>
      </Grid>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
