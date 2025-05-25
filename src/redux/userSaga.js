import { call, put, takeLatest } from 'redux-saga/effects';

function* fetchUsersSaga() {
  try {
    const response = yield call(fetch, 'https://jsonplaceholder.typicode.com/users');
    const data = yield response.json();
    yield put({ type: 'FETCH_USERS_SUCCESS', payload: data });
  } catch (error) {
    yield put({ type: 'FETCH_USERS_FAILURE', error });
  }
}

export function* watchFetchUsers() {
  yield takeLatest('FETCH_USERS_REQUEST', fetchUsersSaga);
}
