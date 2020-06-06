import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { connect } from 'react-redux';

const MyFriendsList = ({ friends, history }) => {
  const handleClick = (username) => {
    history.push('/profile/' + username);
  };
  return (
    <List>
      {friends.map((profile, value) => {
        return (
          <ListItem button onClick={() => handleClick(profile.username)}>
            <ListItemIcon>
              <AccountCircleIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary={profile.username} />
          </ListItem>
        );
      })}
    </List>
  );
};

function mapStateToProps(state) {
  return {
    friends: state.authUser.friends,
  };
}

export default connect(mapStateToProps)(MyFriendsList);
