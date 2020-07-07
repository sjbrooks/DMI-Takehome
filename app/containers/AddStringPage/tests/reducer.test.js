import produce from 'immer';

import addStringReducer from '../reducer';
import { changeString, createString, stringCreated } from '../actions';

/* eslint-disable default-case, no-param-reassign */
describe('addStringReducer', () => {
  let state;
  beforeEach(() => {
    state = {
      loading: false,
      error: false,
      data: {
        string: '',
      },
      created: false,
    };
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(addStringReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle the changeString action correctly', () => {
    const string = 'test string';
    const expectedResult = produce(state, draft => {
      draft.data.string = string;
      draft.error = false;
      draft.created = false;
    });

    expect(addStringReducer(state, changeString(string))).toEqual(
      expectedResult,
    );
  });

  it('should handle the createString action correctly', () => {
    const string = 'test string';
    const expectedResult = produce(state, draft => {
      draft.loading = false;
      draft.error = false;
      draft.created = false;
    });

    expect(addStringReducer(state, createString(string))).toEqual(
      expectedResult,
    );
  });

  it('should handle the stringCreated action correctly', () => {
    const string = 'test string';
    const expectedResult = produce(state, draft => {
      draft.loading = false;
      draft.created = true;
    });

    expect(addStringReducer(state, stringCreated(string))).toEqual(
      expectedResult,
    );
  });
});
