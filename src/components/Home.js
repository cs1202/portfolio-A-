import React from 'react'
import { connect } from 'react-redux'
import cookies from 'js-cookie'
import {
   Grid
} from 'material-ui'
import {AboutMe} from './AboutMe'
import {Skills} from './Skills'
import {Projects} from './Projects'
import NavTabs from './NavTabs'
import Navbar from './Navbar'
import Contact from './Contact'
import {SocialIcon} from 'react-social-icons'
import '../styles/home.css'

class Home extends React.Component{

  componentDidMount(){
    const mainComponent = cookies.get('main-component')
    if(mainComponent){
      this.props.changeMainComponent(mainComponent)
    }
  }
  getMainComponent(){
    if(this.props.mainComponent === 'skills')
      return <Skills />
    if(this.props.mainComponent === 'projects')
      return <Projects />
    if(this.props.mainComponent === 'contact')
      return <Contact />
    return <AboutMe />
  }
  render(){
    return(
        <Grid container>
          <Grid item xs={12} >
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

const mapDispatchToProps = (dispatch) => ({
  changeMainComponent: (componentName) => dispatch({
    type: 'CHANGE_MAIN_COMPONENT',
    value: componentName,
  })
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
