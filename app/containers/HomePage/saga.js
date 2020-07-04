/**
 * Gets the repositories of the user from Github
 */

import { call, put, takeLatest } from 'redux-saga/effects';
import { LOAD_STRINGS } from 'containers/App/constants';
import { stringsLoaded, stringLoadingError } from 'containers/App/actions';

import request from 'utils/request';
// import { makeSelectUsername } from 'containers/HomePage/selectors';

/**
 * Strings request/response handler
 */
export function* getStrings() {
  // // Select username from store
  // const username = yield select(makeSelectUsername());
  // const requestURL = `https://api.github.com/users/${username}/repos?type=all&sort=updated`;
  const requestURL = `http://localhost:3001/strings`;

  try {
    // Call our request helper (see 'utils/request')
    const strings = yield call(request, requestURL);
    yield put(stringsLoaded(strings));
  } catch (err) {
    yield put(stringLoadingError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* stringData() {
  // Watches for LOAD_STRINGS actions and calls getStrings when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(LOAD_STRINGS, getStrings);
}
