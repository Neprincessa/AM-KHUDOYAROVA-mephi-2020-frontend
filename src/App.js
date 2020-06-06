import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import FriendsList from './components/Friends';
import UserProfile from './components/UserProfile';
import LoginCard from './components/LoginPage';
import RequireAuth from './utils/requireAuth';
import RegisterCard from './components/RegisterPage';
import Header from './components/Header';
import MyProfile from './components/MyProfile';

class App extends Component {
  render() {
    const { history } = this.props;
    return (
      <div>
        <Header history={history} />
        <Switch>
          <Route exact path="/" history={history} component={LoginCard} />
          <Route
            path="/profile/:username"
            history={history}
            component={UserProfile}
          />
          />
          <Route path="/register" history={history} component={RegisterCard} />
          <Route path="/login" history={history} component={LoginCard} />
          <Route
            path="/mypage"
            history={history}
            component={RequireAuth(MyProfile)}
          />
          <Route path="/friends" history={history} component={FriendsList} />
        </Switch>
      </div>
    );
  }
}
export default withRouter(App);
