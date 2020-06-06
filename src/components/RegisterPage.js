import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { Grid } from '@material-ui/core';
import { connect } from 'react-redux';
import { RegisterUser } from '../redux/actions/actions';

class RegisterCard extends Component {
  state = {
    email: '',
    password: '',
    name: '',
    surname: '',
    username: '',
  };

  onNameChange = (e) => {
    this.setState({
      name: e.target.value,
    });
  };
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.RegisterUser({ user: { ...this.state } });
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
                    Register your gift of dream
                  </Typography>
                  <Typography className={classes.pos} color="textSecondary">
                    All fields are necessary
                  </Typography>
                  <Typography>
                    <TextField
                      fullWidth
                      required
                      name="email"
                      type="email"
                      placeholder="Enter Your Email"
                      label="Email"
                      autoComplete="email"
                      autoFocus
                      value={this.state.email}
                      onChange={this.handleChange}
                    />
                    <TextField
                      fullWidth
                      required
                      name="firstName"
                      type="text"
                      placeholder="Enter Your Name"
                      label="Name"
                      value={this.state.name}
                      onChange={this.onNameChange}
                    />
                    <TextField
                      fullWidth
                      required
                      name="surname"
                      type="text"
                      placeholder="Enter Your Surname"
                      label="Surname"
                      value={this.state.surname}
                      onChange={this.handleChange}
                    />
                    <TextField
                      fullWidth
                      required
                      name="username"
                      type="text"
                      placeholder="Minimum length - 4 symbols, maximum symbols - 20 symbols"
                      label="Username"
                      value={this.state.username}
                      onChange={this.handleChange}
                    />
                    <TextField
                      fullWidth
                      required
                      name="password"
                      type="password"
                      placeholder="Minimum length - 4 symbols"
                      label="Password"
                      autoComplete="password"
                      value={this.state.password}
                      onChange={this.handleChange}
                    />
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" type="submit">
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
  RegisterUser: (userInfo) => dispatch(RegisterUser(userInfo)),
});

export default connect(null, mapDispatchToProps)(RegisterCard);
