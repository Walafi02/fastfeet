import { takeLatest, call, all } from 'redux-saga/effects';
// import { toast } from 'react-toastify';

import api from '~/services/api';
import { get, show } from '~/pages/Deliveries/services';
// import history from '~/services/history';

// import { signInSuccess } from './actions';

export function* request() {
  // const getAllSuppliers = () => api.get('/recipient');

  const { data } = yield call(api.get, 'recipient');

  console.tron.log(data);
}

export default all([takeLatest('@table/REQUEST', request)]);
