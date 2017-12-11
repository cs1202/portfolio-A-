import React from 'react'
import { connect } from 'react-redux'
import {
  Paper, Grid
} from 'material-ui'
import {AboutMe} from './AboutMe'
import NavTabs from './NavTabs'
import Navbar from './Navbar'
import {SocialIcon} from 'react-social-icons'
import '../styles/home.css'

class Home extends React.Component{
  getMainComponent(){
    if(this.props.mainComponent === 'aboutMe'){
      return <AboutMe />
    }else{
      return <AboutMe />
    }
  }
  render(){
    return(
        <Grid container>
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <Navbar />
          </Grid>
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <hr/>
          </Grid>
          <Grid item lg={3} md={3} sm={4} xs={5} >
            <NavTabs />
          </Grid>
          <Grid item lg={6} md={6} sm={8} xs={7} 
            id='main-component'
          >
            {this.getMainComponent()}
          </Grid>
          <Grid item lg={3} md={3} sm={6} xs={6} >
            <SocialIcon url="https://twitter.com/laveesingh1" color="#0082ed" /> <br/>
            <SocialIcon url="https://www.facebook.com/lavee.sid" /> <br/>
            <SocialIcon url="https://plus.google.com/u/0/117265626588257147419" /> <br/>
            <SocialIcon url="https://www.linkedin.com/in/lavee/" /> <br/>
            <SocialIcon url="https://github.com/laveesingh" /> <br/>
          </Grid>
        </Grid>
    );
  }
}

const mapStateToProps = (state) => ({
    mainComponent: state.mainReducer.mainComponent,
})

const second = ''
const mapDispatchToProps = (dispatch) => ({
    second: () => dispatch(second),
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
