import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import TextField from '@material-ui/core/TextField';
import { Grid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import CardContent from '@material-ui/core/CardContent';
import { connect } from 'react-redux';
import * as profileActions from '../redux/actions/actions';

class FriendsList extends Component {
  state = {
    username: '',
  };
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSearch = (event) => {
    this.props.findSameProfile(this.state.username);
    console.log(this.props.profiles);
  };

  handleClick = (username) => {
    this.props.history.push('/profile/' + username);
  };

  render() {
    const classes = makeStyles((theme) => ({
      gridContainer: {
        paddingLeft: '20px',
        paddingRight: '20px',
        marginTop: '20px',
      },
      root: {
        minWidth: 100,
        width: '60vh',
        marginLeft: '5px',
        marginTop: '5px',
        backgroundColor: theme.palette.background.paper,
      },
    }));
    return (
      <React.Fragment>
        <Grid
          container
          spacing={3}
          className={classes.gridContainer}
          justify={'center'}
          direction="column"
          alignItems="center"
          style={{ marginTop: '100px' }}
        >
          <Card className={classes.root}>
            <CardContent>
              <Typography
                variant="h5"
                component="h2"
                style={{
                  justifyContent: 'center',
                  marginLeft: '5px',
                  marginTop: '5px',
                }}
              >
                Find new friends
              </Typography>
              <Grid
                container
                direction="row"
                justify="space-between"
                alignItems="flex-end"
                spacing={3}
              >
                <Grid item xs={8}>
                  <TextField
                    fullWidth
                    required
                    name="username"
                    type="username"
                    placeholder="Enter Username"
                    label="Username"
                    autoComplete="username"
                    value={this.state.username}
                    onChange={this.handleChange}
                  />
                </Grid>
                <Grid item xs={'auto'}>
                  <Button
                    size="small"
                    type="submit"
                    onClick={this.handleSearch}
                    aria-label="find"
                  >
                    <SearchIcon />
                  </Button>
                </Grid>
              </Grid>
              <CardContent>
                <Typography paragraph>
                  <div className={classes.root}>
                    <List>
                      {this.props.profiles.map((profile, value) => {
                        return (
                          <ListItem
                            button
                            onClick={() => this.handleClick(profile.username)}
                          >
                            <ListItemIcon>
                              <AccountCircleIcon color="primary" />
                            </ListItemIcon>
                            <ListItemText primary={profile.username} />
                          </ListItem>
                        );
                      })}
                    </List>
                  </div>
                </Typography>
              </CardContent>
            </CardContent>
          </Card>
        </Grid>
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    profiles: state.authUser.profiles,
  };
}

const mapDispatchToProps = (dispatch) => ({
  findSameProfile: (username) =>
    dispatch(profileActions.findSameProfile(username)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FriendsList);
