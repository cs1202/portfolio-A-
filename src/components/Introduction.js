import React from 'react'
import {Grid, Typography, Paper} from 'material-ui'


export const Intro = ({name, spec}) => (
  <Grid container>
    <Grid item lg={12} md={12} sm={12} xs={12}>
      {name}
    </Grid>
    <Grid item lg={12} md={12} sm={12} xs={12}>
      {spec}
    </Grid>
  </Grid>
)

export const AboutMe = (props) => 
  <Paper style={{padding: '10px'}}>
    <Grid container>
      <Grid item lg={12} md={12} sm={12} xs={12}>
        <Typography type='headline' component='h2'>
          About Me
        </Typography>
      </Grid>
      <Grid item lg={12} md={12} sm={12} xs={12}>
        <Typography type='body' component='p'>
          I am a passionate full-stack developer and graduate of the NorthWestern University Web Development Coding Bootcamp.

          I love utilizing my strong foundation in modern web development to build robust and meaningful applications utilizing the latest technologies.
        </Typography>
      </Grid>
    </Grid>
  </Paper>
