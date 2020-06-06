import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import * as profileActions from '../redux/actions/actions';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';

class UserCard extends Component {
  componentDidMount() {
    this.props.getProfile(this.props.username);
  }

  render() {
    return (
      <Card
        style={{
          width: '40vh',
        }}
      >
        <CardContent>
          <Typography
            variant="h5"
            component="h2"
            style={{ justifyContent: 'center' }}
          >
            Username: {this.props.profile.username}
          </Typography>
          <Typography
            variant="h5"
            component="h2"
            style={{ justifyContent: 'center' }}
          >
            Email: {this.props.profile.email}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            type="submit"
            color="secondary"
            onClick={() => {
              this.props.follow(this.props.profile.username);
            }}
          >
            Add friend
          </Button>
          <Button
            size="small"
            color="secondary"
            onClick={() => {
              this.props.unfollow(this.props.profile.username);
            }}
          >
            Delete friend
          </Button>
        </CardActions>
      </Card>
    );
  }
}

function mapStateToProps(state) {
  return {
    profile: state.authUser.profile,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    follow: (username) => dispatch(profileActions.follow(username)),
    unfollow: (username) => dispatch(profileActions.unfollow(username)),
    getProfile: (username) => dispatch(profileActions.getProfile(username)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserCard);
