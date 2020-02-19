import { all } from 'redux-saga/effects';

import auth from './auth/sagas';
import table from './table/sagas';

export default function* rootsaga() {
  return yield all([auth, table]);
}
