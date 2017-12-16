import React from 'react'
import { connect } from 'react-redux'

import {
  Grid, TextField, Button, Paper
} from 'material-ui'
import '../styles/contact.css'

class Contact extends React.Component{
  render(){
    return(
      <Paper>
        <Grid container>
          <Grid item xs={12} style={{
            padding: '10px 30px 40px 30px',
          }}>
            <Grid container >
              <Grid item xs={12} >
                <TextField fullWidth className='align-left'
                  value={this.props.name} label='name'
                  onChange={this.props.changeName}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth className='align-left'
                  value={this.props.email} label='email'
                  onChange={this.props.changeEmail}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth className='align-left'
                  value={this.props.phone} label='phone'
                  onChange={this.props.changePhone}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth multiline rows={3}
                  className='align-left'
                  value={this.props.message} label='message'
                  onChange={this.props.changeMessage}
                />
              </Grid>
              <Grid item xs={12}>
                <Button color='primary' raised onClick={this.props.submitContactForm}>
                  Contact Me
                </Button>
              </Grid>
            </Grid>
            
          </Grid>
        </Grid>
      </Paper>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    name: state.contactName.name,
    email: state.contactEmail.email,
    phone: state.contactPhone.phone,
    message: state.contactMessage.message,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeName: (event) => dispatch({
      type: 'CONTACT_CHANGE_NAME',
      value: event.target.value,
    }),
    changeEmail: (event) => dispatch({
      type: 'CONTACT_CHANGE_EMAIL',
      value: event.target.value
    }),
    changePhone: (event) => dispatch({
      type: 'CONTACT_CHANGE_PHONE',
      value: event.target.value,
    }),
    changeMessage: (event) => dispatch({
      type: 'CONTACT_CHANGE_MESSAGE',
      value: event.target.value,
    }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Contact)
