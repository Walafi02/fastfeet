import {all} from 'redux-saga/effects';

import auth from './auth/sagas';
import deliveries from './deliveries/sagas';

export default function* rootsaga() {
  return yield all([auth, deliveries]);
}
