import React from 'react'
import { connect } from 'react-redux'
import {
  Paper, Grid
} from 'material-ui'
import {AboutMe} from './Introduction'

class Home extends React.Component{
  render(){
    return(
      <Paper style={{marginTop: '200px', backgroundColor: '#e2d2d2'}}>
        <Grid container>
          <Grid item lg={1} md={1} sm={1} xs={1}> </Grid>
          <Grid item lg={6} md={6} sm={6} xs={6}>
            <Grid container>
              <Grid item lg={12} md={12} sm={12} xs={12}>
                <AboutMe />
              </Grid>
            </Grid>
          </Grid>
          <Grid item lg={4} md={4} sm={4} xs={4}>
            
          </Grid>
          <Grid item lg={1} md={1} sm={1} xs={1}> </Grid>
        </Grid>
      </Paper>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    first: state.first,
  }
}

const second = ''
const mapDispatchToProps = (dispatch) => {
  return {
    second: () => dispatch(second),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
