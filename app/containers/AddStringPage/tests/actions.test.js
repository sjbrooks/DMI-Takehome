import {
  CHANGE_STRING,
  CREATE_STRING,
  CREATE_STRING_SUCCESS,
} from '../constants';

import { changeString, createString, stringCreated } from '../actions';

describe('AddStringPage Actions', () => {
  describe('changeString', () => {
    it('should return the correct type and the passed string', () => {
      const string = 'hello I am a test string';
      const expectedResult = {
        type: CHANGE_STRING,
        string,
      };

      expect(changeString(string)).toEqual(expectedResult);
    });
  });

  describe('createString', () => {
    it('should return the correct type and the passed string', () => {
      const string = 'hello I am a test string';
      const expectedResult = {
        type: CREATE_STRING,
        string,
      };

      expect(createString(string)).toEqual(expectedResult);
    });
  });

  describe('stringCreated', () => {
    it('should return the correct type and the passed string', () => {
      const string = 'hello I am a test string';
      const expectedResult = {
        type: CREATE_STRING_SUCCESS,
        string,
      };

      expect(stringCreated(string)).toEqual(expectedResult);
    });
  });
});
