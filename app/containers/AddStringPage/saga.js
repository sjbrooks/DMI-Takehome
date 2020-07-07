/**
 * Posts the new string to fakeDB
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';
import { CREATE_STRING } from 'containers/AddStringPage/constants';
import {
  stringCreated,
  stringCreationError,
} from 'containers/AddStringPage/actions';

import request from 'utils/request';
import { makeSelectString } from 'containers/AddStringPage/selectors';

/**
 * Post new string request/response handler
 */
export function* createString() {
  // Select current string in input field from store
  let string = yield select(makeSelectString());
  const requestURL = `http://localhost:3000/strings`;
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ string }),
  };

  try {
    // Prevent empty form from being submitted
    if (string !== '') {
      // Call our request helper (see 'utils/request')
      string = yield call(request, requestURL, options);
      yield put(stringCreated(string));
    }
  } catch (err) {
    yield put(stringCreationError(err));
  }
}

/**
 * AddStringPage saga manages watcher lifecycle
 */
export default function* newString() {
  // Watches for CREATE_STRING actions and calls createString when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(CREATE_STRING, createString);
}
