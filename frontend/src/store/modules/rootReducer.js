import { combineReducers } from 'redux';

import auth from './auth/reducers';
import user from './user/reducer';
import table from './table/reducer';

export default combineReducers({
  auth,
  user,
  table,
});
