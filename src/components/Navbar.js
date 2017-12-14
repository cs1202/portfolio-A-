import React from 'react'
import { connect } from 'react-redux'

import {
  Button,
  Grid
} from 'material-ui'
import '../styles/navbar.css'

const styles = {
  root: {
    marginTop: '10px'
  },
  button: {
    fontSize: '30px',
    color: 'white',
    fontWeight: '1000',
  }
}


class Navbar extends React.Component{
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
