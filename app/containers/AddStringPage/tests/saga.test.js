/**
 * Tests for AddStringPage sagas
 */

import { put, takeLatest } from 'redux-saga/effects';

import { CREATE_STRING } from 'containers/AddStringPage/constants';
import {
  stringCreated,
  stringCreationError,
} from 'containers/AddStringPage/actions';

import newString, { createString } from '../saga';

const string = 'test string';

/* eslint-disable redux-saga/yield-effects */
describe('createString Saga', () => {
  let createStringGenerator;

  // We have to test twice, once for a successful string creation and once for an unsuccessful one
  // so we do all the stuff that happens beforehand automatically in the beforeEach
  beforeEach(() => {
    createStringGenerator = createString();

    const selectDescriptor = createStringGenerator.next().value;
    expect(selectDescriptor).toMatchSnapshot();

    const callDescriptor = createStringGenerator.next(string).value;
    expect(callDescriptor).toMatchSnapshot();
  });

  it('should dispatch the stringCreated action if it creates the string successfully', () => {
    const response = string;

    const putDescriptor = createStringGenerator.next(response).value;
    expect(putDescriptor).toEqual(put(stringCreated(string)));
  });

  it('should call the stringCreationError action if the response errors', () => {
    const response = new Error('Some error');
    const putDescriptor = createStringGenerator.throw(response).value;
    expect(putDescriptor).toEqual(put(stringCreationError(response)));
  });
});

describe('newStringSaga Saga', () => {
  const newStringSaga = newString();

  it('should start task to watch for CREATE_STRING action', () => {
    const takeLatestDescriptor = newStringSaga.next().value;
    expect(takeLatestDescriptor).toEqual(
      takeLatest(CREATE_STRING, createString),
    );
  });
});
