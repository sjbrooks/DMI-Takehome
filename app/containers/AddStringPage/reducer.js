/*
 * addStringReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import {
  CHANGE_STRING,
  CREATE_STRING,
  CREATE_STRING_SUCCESS,
  CREATE_STRING_ERROR,
} from './constants';

// The initial state of the AddStringPage
export const initialState = {
  loading: false,
  error: false,
  data: {
    string: '',
  },
  created: false,
};

/* eslint-disable default-case, no-param-reassign */
const addStringReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case CHANGE_STRING:
        draft.data.string = action.string;
        draft.error = false;
        draft.created = false;
        break;

      case CREATE_STRING:
        draft.loading = false;
        draft.error = false;
        draft.created = false;
        break;

      case CREATE_STRING_SUCCESS:
        draft.loading = false;
        draft.created = true;
        break;

      case CREATE_STRING_ERROR:
        draft.error = action.error;
        draft.loading = false;
        draft.created = false;
        break;
    }
  });

export default addStringReducer;
