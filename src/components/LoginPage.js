import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { LoginUser } from '../redux/actions/actions';

class LoginCard extends Component {
  state = {
    email: '',
    password: '',
    username: '',
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.LoginUser({ user: { ...this.state } });
  };
  handleClick = (event) => {
    if (localStorage.Auth !== undefined) {
      this.props.history.push('/mypage');
    } else {
      alert('You have to be registered or logged in');
    }
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
      },
      pos: {
        marginBottom: 12,
      },
    }));
    return (
      <React.Fragment>
        <Grid
          container
          spacing={4}
          className={classes.gridContainer}
          justify={'center'}
          style={{ marginTop: '100px' }}
        >
          <Grid item xs={6}>
            <form onSubmit={this.handleSubmit}>
              <Card className={classes.root}>
                <CardContent>
                  <Typography
                    variant="h5"
                    component="h2"
                    style={{ justifyContent: 'center' }}
                  >
                    Welcome to our service!
                  </Typography>
                  <Typography className={classes.pos} color="textSecondary">
                    Please login or register
                  </Typography>
                  <Typography>
                    <TextField
                      fullWidth
                      required
                      name="email"
                      type="email"
                      placeholder="Enter Your E-mail"
                      label="E-mail"
                      autoComplete="email"
                      value={this.state.email}
                      onChange={this.handleChange}
                    />
                    <TextField
                      fullWidth
                      required
                      name="password"
                      type="password"
                      placeholder="Enter Your Password"
                      label="Password"
                      autoComplete="password"
                      value={this.state.password}
                      onChange={this.handleChange}
                      style={{ justifySelf: 'center' }}
                    />
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" type="submit">
                    Login
                  </Button>
                  <Button size="small" component={Link} to="/register">
                    Register
                  </Button>
                  <Button size="small" onClick={this.handleClick}>
                    Go Home
                  </Button>
                </CardActions>
              </Card>
            </form>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  LoginUser: (userInfo) => dispatch(LoginUser(userInfo)),
});

export default connect(null, mapDispatchToProps)(LoginCard);
