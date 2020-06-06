import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import * as profileActions from '../redux/actions/actions';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
import AppList from './List';
import MyFriendsList from './MyFriendsList';
import AddIcon from '@material-ui/icons/Add';
import { IconButton } from '@material-ui/core';

class MyProfile extends Component {
  componentWillMount() {
    this.props.getFriends(this.state.user.username);
    this.props.loadPresents(this.state.user.username);
  }
  state = {
    user: JSON.parse(localStorage.Auth).user,
    checked: [0],
  };

  shouldComponentUpdate(nextProps) {
    console.log(nextProps.presents);
    console.log(this.props.presents);
    if (this.props.presents.length !== nextProps.presents.length) {
      return true;
    }
    return false;
  }

  componentDidUpdate() {
    this.props.loadPresents(this.state.user.username);
    console.log(this.props.presents);
  }

  handleListItemClick = (event) => {
    console.log('clicked');
    console.log(this.props.user);
  };

  addPresentHandle = () => {
    var presentName = prompt('Enter present name');
    this.props.createPresent({
      name: presentName,
      cost: 10,
      address: 'msk',
      state: false,
    });
    console.log('llll');

    this.props.loadPresents(this.props.user.username);
  };
  deletePresentHandle = (slug) => {
    this.props.deletePresent(slug);

    this.props.loadPresents(this.props.user.username);
  };

  render() {
    const classes = makeStyles((theme) => ({
      root: {
        width: '100%',
        minWidth: 300,
        marginTop: '2vh',
        margitLeft: '2vh',
        backgroundColor: theme.palette.background.paper,
      },

      gridContainer: {
        paddingLeft: '20px',
        paddingRight: '20px',
        marginTop: '20px',
        width: '40vh',
      },
    }));

    return (
      <React.Fragment>
        <Grid
          container
          spacing={4}
          className={classes.gridContainer}
          style={{ marginTop: '100px' }}
          justify={'center'}
        >
          <Grid item xs={6} md={3}>
            <Card className={classes.root}>
              <CardContent>
                <Typography
                  variant="h5"
                  component="h2"
                  style={{
                    justifyContent: 'center',
                    marginLeft: '15px',
                    marginTop: '5px',
                  }}
                >
                  Username: {this.state.user.username}
                </Typography>
                <Typography
                  variant="h5"
                  component="h2"
                  style={{
                    justifyContent: 'center',
                    marginLeft: '15px',
                    marginTop: '5px',
                  }}
                >
                  Name: {this.state.user.name}
                </Typography>
                <Typography
                  variant="h5"
                  component="h2"
                  style={{
                    justifyContent: 'center',
                    marginLeft: '15px',
                    marginTop: '5px',
                  }}
                >
                  Email: {this.state.user.email}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={6} md={3}>
            <Card className={classes.root}>
              <CardContent>
                <Typography
                  variant="h5"
                  component="h2"
                  style={{
                    justifyContent: 'center',
                    marginLeft: '15px',
                    marginTop: '5px',
                  }}
                >
                  My friends
                </Typography>
                <MyFriendsList history={this.props.history} />
                <CardActions>
                  <Button
                    size="small"
                    type="submit"
                    onClick={() => {
                      this.props.history.push('/friends');
                    }}
                    color="secondary"
                  >
                    <IconButton color="primary" aria-label="add friend">
                      <AddIcon />
                    </IconButton>
                  </Button>
                </CardActions>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={6} md={3}>
            <Card className={classes.root}>
              <CardContent>
                <Typography
                  variant="h5"
                  component="h2"
                  style={{
                    justifyContent: 'center',
                    marginLeft: '15px',
                    marginTop: '5px',
                  }}
                >
                  My presents
                </Typography>
                <AppList
                  presents={this.props.presents}
                  deletePresent={(slug) => this.deletePresentHandle(slug)}
                />

                <CardActions>
                  <Button
                    size="small"
                    type="submit"
                    onClick={this.addPresentHandle}
                    color="secondary"
                  >
                    <IconButton color="primary" aria-label="add present">
                      <AddIcon />
                    </IconButton>
                  </Button>
                </CardActions>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}
function mapStateToProps(state) {
  return {
    user: state.authUser.user,
    friends: state.authUser.friends,
    presents: state.presents.presents,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadPresents: (username) => dispatch(profileActions.loadPresents(username)),
    getCurrentProfile: () => dispatch(profileActions.getCurrentProfile()),
    unfollow: (username) => dispatch(profileActions.unfollow(username)),
    createPresent: (newPresent) =>
      dispatch(profileActions.createPresent(newPresent)),
    getFriends: (username) => dispatch(profileActions.getFriends(username)),
    deletePresent: (slug) => dispatch(profileActions.deletePresent(slug)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MyProfile);
