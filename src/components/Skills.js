import React from 'react'

import {
  Grid, Typography
} from 'material-ui'
import {LinearProgress} from 'material-ui/Progress'
import '../styles/skills.css'

const skillsList = [
  {name: 'Firebase & Ajax', proficiency: 85},
  {name: 'Javascript & jQuery', proficiency: 92},
  {name: 'HTML5 & CSS3', proficiency: 85},
  {name: 'Responsive Bootstrap', proficiency: 90},
  {name: 'C++', proficiency: 60},
  {name: 'Rust', proficiency: 40}

]

export const Skills = (props) => (
  <Grid container>
    <Grid item lg={12} md={12} sm={12} xs={12}>
      <Typography component='h1' type='headline' id='title'>
        Skills
      </Typography>
    </Grid>
    <Grid item lg={12} md={12} sm={12} xs={12}>
      <Typography className='narration' component='p' type='body'>
        The web design and development industry is a growing professional that is attractive for a number of reasons. With so many companies and organizations depending on their online presence these days, the people who design, develop, and manage their websites are in high demand - a trend that is unlikely to change anytime soon.
      </Typography>
      <hr/>
      <Typography className='narration' component='p' type='body'>
        Whether you are just starting out as a web designer or web developer or are looking to change careers and become a web professional. The following list of skills, both technical and otherwise, represent some of these key areas of knowledge that I had worked on and added in my repositeries as I began down the path to become a website designer.
      </Typography>
    </Grid>
    <Grid item lg={12} md={12} sm={12} xs={12}>
      {skillsList.map(skill => (
        <Skill name={skill.name} proficiency={skill.proficiency} />
      ))}
    </Grid>
    <Grid item lg={12} md={12} sm={12} xs={12} style={{marginBottom:'50px'}}>
      <hr/>
    </Grid>
  </Grid>
)

class Skill extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      proficiency: 0,
      level: '',
    }
  }
  componentDidMount(){
    if(this.props.proficiency >= 90) this.setState({level:'Expert'})
    else if(this.props.proficiency >= 75) this.setState({level:'Advanced'})
    else if(this.props.proficiency >= 50) this.setState({level:'Intermediate'})
    else this.setState({level:'Beginner'})
    var intervalId = setInterval(() => {
      if(this.state.proficiency < this.props.proficiency){
        if(this.state.proficiency+10 >= this.props.proficiency){
          this.setState({proficiency: this.props.proficiency})
        } else{
          this.setState({proficiency: this.state.proficiency + Math.random()*10})
        }
      }
      if(this.state.proficiency >= this.props.proficiency){
        clearInterval(intervalId)
      }
    }, 50)
  }
  render(){
    return(
      <Grid container>
        <Grid item lg={6} md={6} sm={6} xs={6}>
          <h3 className='skill-name'>{this.props.name}</h3>
        </Grid>
        <Grid item lg={6} md={6} sm={6} xs={6}>
          <h4 className='skill-level'>{this.state.level}</h4>
        </Grid>
        <Grid item lg={12} md={12} sm={12} xs={12}>
          <LinearProgress mode='determinate' value={this.state.proficiency} 
            color='accent'/>
        </Grid>
      </Grid>
    )
  }
}
