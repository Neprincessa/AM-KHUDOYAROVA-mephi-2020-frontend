import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import { connect } from 'react-redux';
import * as profileActions from '../redux/actions/actions';
import CardActions from '@material-ui/core/CardActions';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

class PresentsList extends Component {
  state = {
    checked: [],
  };
  componentWillMount() {
    this.props.loadPresents(this.props.username);
  }

  getCurrentState = () => {
    this.props.loadPresents(this.props.username);
    let thisPresents = this.props.presents;
    let listPresent = [];
    for (let index = 0; index < thisPresents.length; index++) {
      if (thisPresents[index].state) {
        listPresent.push(index);
      }
    }
    return listPresent;
  };

  handleToggle = (value) => () => {
    const currentIndex = this.state.checked.indexOf(value);
    const newChecked = [...this.state.checked];
    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    this.setState({
      checked: newChecked,
    });
  };

  commitAction = () => {
    for (let index = 0; index < this.props.presents.length; index++) {
      let currentState = false;
      let currentPresent = this.props.presents[index];
      if (this.state.checked.indexOf(index) !== -1) {
        currentState = true;
      }
      this.props.updatePresent(currentPresent.slug, currentState);
    }

    this.setState({
      checked: this.getCurrentState(),
    });
  };

  render() {
    return (
      <Card
        style={{
          width: '40vh',
        }}
      >
        <CardContent>
          <List itemProp={this.props.presents}>
            {this.props.presents.map((item, value) => {
              const labelId = `checkbox-list-label-${value}`;
              return (
                <ListItem
                  key={value}
                  role={undefined}
                  dense
                  button
                  onClick={this.handleToggle(value)}
                >
                  <ListItemIcon>
                    <Checkbox
                      edge="start"
                      checked={this.state.checked.indexOf(value) !== -1}
                      tabIndex={-1}
                      disableRipple
                      inputProps={{ 'aria-labelledby': labelId }}
                    />
                  </ListItemIcon>
                  <ListItemText id={labelId} primary={item.name} />
                </ListItem>
              );
            })}
          </List>
        </CardContent>
        <CardActions>
          <Button onClick={this.commitAction}>Commit</Button>
        </CardActions>
      </Card>
    );
  }
}

function mapStateToProps(state) {
  return {
    presents: state.presents.presents,
    present: state.presents.present,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadPresents: (username) => dispatch(profileActions.loadPresents(username)),
    getPresent: (present_slug) =>
      dispatch(profileActions.getPresent(present_slug)),
    updatePresent: (present_slug, present) =>
      dispatch(profileActions.updatePresent(present_slug, present)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PresentsList);
