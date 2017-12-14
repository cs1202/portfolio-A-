import React from 'react'
import {
  Grid, Typography,
} from 'material-ui'
import Card, {CardContent, CardMedia, CardHeader} from 'material-ui/Card'
export const AboutMe = (props) => (
  <Grid container>
    <Grid item lg={12} md={12} sm={12} xs={12}>
      <Card>
        <CardMedia title='Alina Anam'>
          <img src='alina_dp_sm.jpg' alt='dp' style={{width: '100%', height: '100%', maxHeight: '300px'}}/>
        </CardMedia>
        <CardContent>
          <CardHeader title='Alina Anam' subheader='Web Applications Developer | Computer Programmer' />
          <Typography type='body' component='p' style={{ fontWeight: '900', fontFamily: '"Courier New", Courier, monospace'}}>
            I am a passionate full-stack developer and graduate of the NorthWestern University Web Development Coding Bootcamp.
            <br/>
            I love utilizing my strong foundation in modern web development to build robust and meaningful applications utilizing the latest technologies.
          </Typography>
        </CardContent>
      </Card>
      <br/>
      <hr/>
      <br/>
      <br/>
      <br/>
    </Grid>
    <Grid item lg={12} md={12} sm={12} xs={12}>
      
    </Grid>
  </Grid>
)
