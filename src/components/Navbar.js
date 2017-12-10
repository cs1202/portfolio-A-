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


class Navbar extends React.Component{
  constructor(props){
    super(props)
  }
  
  render(){
    return (
      <AppBar position="static" id='appbar' color='white'>
        <Toolbar disableGutters>
          <Grid container>
            <Grid item lg={2} md={2} sm={12} xs={12}>
              <Avatar alt='Alina Anam' src='./alina_dp_sm.jpg' id='avatar' style={{width: '200px', height: '20px'}} />
            </Grid>
            <Grid item lg={4} md={4} sm={4} xs={4}>
              <Grid container>
                <Grid item lg={12} md={12} sm={12} xs={12}>
                  <Intro name="Alina Anam" spec="Web App Developer"/>
                </Grid>
              </Grid>
            </Grid>
            <Grid item lg={4} md={4} sm={4} xs={4}>
              
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
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
