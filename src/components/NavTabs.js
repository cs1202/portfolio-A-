import React from 'react'
import { connect } from 'react-redux'
import Tabs, {Tab} from 'material-ui/Tabs'
import List, {ListItem, ListItemText} from 'material-ui/List'
import {Grid} from 'material-ui'
const styles = {
  listItem: {
    color: 'white',
    fontSize: '24px',
    fontWeight: '800',
    marginTop: '8px',
    marginBottom: '8px',
  }
}

class NavTabs extends React.Component{
  render(){
    return(
      <Grid container>
        <Grid item lg={1} md={1} sm={1} xs={0}> </Grid>
        <Grid item lg={6} md={8} sm={9} xs={12}>
          <List >
            <ListItem button>
              <ListItemText disableTypography primary='About Me' style={styles.listItem} />
            </ListItem>
            <ListItem button>
              <ListItemText disableTypography primary='Skills' style={styles.listItem}/>
            </ListItem>
            <ListItem button>
              <ListItemText disableTypography primary='Projects' style={styles.listItem} />
            </ListItem>
            <ListItem button>
              <ListItemText disableTypography primary='Github' style={styles.listItem} />
            </ListItem>
            <ListItem button>
              <ListItemText disableTypography primary='Education' style={styles.listItem} />
            </ListItem>
            <ListItem button>
              <ListItemText disableTypography primary='Testimonials' style={styles.listItem} />
            </ListItem>
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
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavTabs)
