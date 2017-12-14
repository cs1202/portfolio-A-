import React from 'react'

import {
  Grid, Typography, Button
} from 'material-ui'
import Card, {CardHeader, 
  CardContent, 
} from 'material-ui/Card'
import {Collapse} from 'material-ui/transitions'
import List, {ListItem} from 'material-ui/List'
import {projectList} from '../data/projects'

export const Projects = (props) => (
  <div>
    <List>
      {projectList.map(project => (
        <ListItem button style={{
          padding: '0px',
          marginBottom: '5px',
        }}>
          <Project {...project} />
        </ListItem>
      ))}
    </List>
    <hr/>
    <br/>
    <br/>
    <br/>
  </div>

) 

class Project extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      expanded: false,
    }
  }
  handleExpandClick = () => this.setState({expanded: !this.state.expanded})
  render(){
    return(
      <div onClick={this.handleExpandClick} style={{ width: '100%', margin: '0px'}}>
        <Card >
          <CardHeader title={this.props.title} />
          <CardContent>
            <Typography component="p">
              {this.props.shortd}
            </Typography>
          </CardContent>
          <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Grid container>
                <Grid item xs={5}>
                  <img src={this.props.image} style={{
                    width: '100%',
                    height: '100%',
                  }}/>
                </Grid>
                <Grid item xs={7}>
                  <Typography paragraph type="body2">
                    {this.props.longd}
                  </Typography>
                  <Button color='primary' href={this.props.website}>
                    Go to website
                  </Button>
                  <Button color='primary' href={this.props.source_url}>
                    Source
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Collapse>
        </Card>
      </div>
    );
  }
}
