import React from 'react';
import Grid from '@material-ui/core/Grid';
import UserCard from './UserCard';
import PresentsList from './PresentsList';
import { useParams } from 'react-router';
import { loadPresents } from '../redux/actions/actions';

function UserProfile() {
  const { username } = useParams();
  loadPresents(username);
  return (
    <React.Fragment>
      <Grid
        container
        spacing={4}
        style={{
          marginTop: '100px',
          paddingLeft: '2vh',
          paddingRight: '2vh',
        }}
        justify={'center'}
      >
        <Grid item xs={'auto'} md={'auto'}>
          <UserCard username={username} />
        </Grid>
        <Grid item xs={'auto'} md={'auto'}>
          <PresentsList username={username} />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
export default UserProfile;
