/**
 * @module Sagas
 * @module Sagas/Bill
 * @desc User
 */
import { all, put, takeLatest } from 'redux-saga/effects';
import { actions, actionTypes } from '../action';
import { dashboardService } from '../api';

export function* getUserData() {
  try {
    const response = yield dashboardService.getUserDataCall();
    yield put(actions.updateUserDataResponse(response));
  } catch (err) {
    yield put(actions.updateUserDataError(err));
  }
}

/**
 * Root Sagas
 */
export default function* dashboardRoot() {
  yield all([takeLatest(actionTypes.GET_DETAILS, getUserData)]);
}
