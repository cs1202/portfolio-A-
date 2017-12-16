import React from 'react'
import { connect } from 'react-redux'

import {
  Grid, TextField, Button
} from 'material-ui'

class Contact extends React.Component{
  render(){
    return(
      <Grid container>
        <Grid item xs={12} style={{
          border: 'dashed 2px black',
          padding: '0px 30px 40px 30px',
          textAlign: 'center',
        }}>
          <Grid container >
            <Grid item xs={12}>
              <TextField fullWidth
                value={this.props.name} label='name'
                onChange={this.props.changeName}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth
                value={this.props.email} label='email'
                onChange={this.props.changeEmail}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth
                value={this.props.phone} label='phone'
                onChange={this.props.changePhone}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth
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
