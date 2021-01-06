import { all, fork } from 'redux-saga/effects';
import dashboardRoot from '../modules/HomeRoot/Dashboard/saga';

/**
 * rootSaga
 */
export default function* rootSaga() {
  yield all([fork(dashboardRoot)]);
}
