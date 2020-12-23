import {all} from 'redux-saga/effects';

import searchSaga from '../modules/Search/sagas';

export default function* rootSaga() {
  yield all([searchSaga()]);
}
