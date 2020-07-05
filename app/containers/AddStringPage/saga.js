/**
 * Posts the new string to fakeDB
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';
import {
  CREATE_STRING,
  // CHANGE_STRING,
} from 'containers/AddStringPage/constants';
import {
  stringCreated,
  stringCreationError,
  // stringChanged,
  // stringChangedError,
} from 'containers/AddStringPage/actions';

import request from 'utils/request';
import { makeSelectString } from 'containers/AddStringPage/selectors';

/**
 * Post new string request/response handler
 */
export function* createString() {
  // // Select current string in input field from store
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
    // Call our request helper (see 'utils/request')
    string = yield call(request, requestURL, options);
    yield put(stringCreated(string));
  } catch (err) {
    yield put(stringCreationError(err));
  }
}

// /**
//  * Change string in input form
//  */
// export function* changeString(string) {
//   try {
//     yield put(stringChanged(string));
//   } catch (err) {
//     yield put(stringChangedError(err));
//   }
// }

/**
 * AddStringPage sagas manage watcher lifecycle
 */
export default function* stringNew() {
  // Watches for CREATE_STRING actions and calls createString when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(CREATE_STRING, createString);
}

// export function* stringInputNew() {
//   // Watches for CHANGE_STRING actions and calls changeString when one comes in.
//   // By using `takeLatest` only the result of the latest API call is applied.
//   // It returns task descriptor (just like fork) so we can continue execution
//   // It will be cancelled automatically on component unmount
//   yield takeLatest(CHANGE_STRING, changeString);
// }
