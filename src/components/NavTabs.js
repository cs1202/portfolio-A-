import React from 'react'
import { connect } from 'react-redux'
import List, {ListItem, ListItemText} from 'material-ui/List'
import {Grid} from 'material-ui'
import '../styles/navtabs.css'
class NavTabs extends React.Component{
  render(){
    const navTabsList = [
      {component: 'aboutMe', itemText: 'AboutMe'},
      {component: 'skills', itemText: 'Skills'},
      {component: 'projects', itemText: 'Projects'},
      {component: 'github', itemText: 'Github'},
      {component: 'education', itemText: 'Education'},
      {component: 'testimonials', itemText: 'Testimonials'},
    ]
    return(
      <Grid container>
        <Grid item lg={1} md={1} sm={1} xs={0}> </Grid>
        <Grid item lg={6} md={8} sm={9} xs={12}>
          <List >
            { navTabsList.map(item => (
              <ListItem button
                className='list-item'
                onClick={()=>this.props.changeMainComponent(item.component)}>
                <ListItemText disableTypography 
                  className='list-item-text'
                  primary={item.itemText} />
              </ListItem>
            ))}
          </List>
        </Grid>
        <Grid item lg={5} md={3} sm={2} xs={0}> </Grid>
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
    changeMainComponent: (value) => dispatch({
      type: 'CHANGE_MAIN_COMPONENT',
      value: value
    })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavTabs)
