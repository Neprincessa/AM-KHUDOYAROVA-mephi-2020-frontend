import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import App from './App';
import * as serviceWorker from './serviceWorker';
import configureStore, { history } from './redux/store';
import { Provider } from 'react-redux';
import { getCurrentUser } from './redux/actions/actions';

const store = configureStore();
// export const currentURL = document.URL.match(/^http:\/\/[^:]+/g)[0];
// console.log(currentURL);

if (localStorage.Auth) {
  store.dispatch({
    type: 'SET_USER',
    user: JSON.parse(localStorage.Auth).user,
  });
  getCurrentUser();
}
ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route path="/" history={history} component={App} />
      </Switch>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
