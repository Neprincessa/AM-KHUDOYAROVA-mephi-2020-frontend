import { combineReducers } from 'redux';
import presents from './reducers/presents';
import authUser from './reducers/authUser';
import { connectRouter } from 'connected-react-router';

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    presents,
    authUser,
  });

export default createRootReducer;
