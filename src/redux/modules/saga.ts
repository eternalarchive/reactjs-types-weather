import { all } from 'redux-saga/effects';
import { searchSaga } from './search';
import { viewSaga } from './view';

export default function* rootSaga() {
  yield all([searchSaga(), viewSaga()]);
}
