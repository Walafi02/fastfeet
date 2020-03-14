import {Alert} from 'react-native';
import {takeLatest, call, put, all, select} from 'redux-saga/effects';

import api from '~/services/api';

import {deliveriesSuccess, deliveriesFailure} from './actions';

export function* deliveriesRequest({payload}) {
  const {page, oldDocs, status} = payload;
  try {
    const id = yield select(state => state.user.profile.id);
    const {data} = yield call(
      api.get,
      `/deliveryman/${id}/deliveries/${status}?page=${page}`
    );
    const {docs, pages, total} = data;

    yield put(deliveriesSuccess(docs, pages, total, page, oldDocs, status));
  } catch (error) {
    Alert.alert('Falha ao buscar suas entregas', 'Verifique seus dados');
    yield put(deliveriesFailure());
  }
}

export default all([takeLatest('@deliveries/REQUEST', deliveriesRequest)]);
