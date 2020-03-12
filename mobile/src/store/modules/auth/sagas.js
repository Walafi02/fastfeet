import {Alert} from 'react-native';
import {takeLatest, call, put, all} from 'redux-saga/effects';

import api from '~/services/api';

import {signInSuccess, signFailure} from './actions';

export function* signIn({payload}) {
  try {
    const {id} = payload;
    const {data} = yield call(api.post, 'deliveryman/session', {
      id,
    });

    // api.defaults.headers.Authorization = `Bearer ${token}`;
    yield put(signInSuccess(id, data));
  } catch (error) {
    Alert.alert(
      'Falha na autenticação',
      'Houve um error no login, verifique seus dados'
    );
    yield put(signFailure());
  }
}

// export function setToken({payload}) {
//   if (!payload) return;

//   const {token} = payload.auth;

//   if (token) {
//     api.defaults.headers.Authorization = `Bearer ${token}`;
//   }
// }

export default all([
  // takeLatest('persist/REHYDRATE', setToken), // aaction lancada quando se tem um update de pagina
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
]);
