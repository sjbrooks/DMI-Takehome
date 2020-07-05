/*
 * addStringReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import { CHANGE_STRING } from './constants';

// The initial state of the AddStringPage
export const initialState = {
  string: '',
};

/* eslint-disable default-case, no-param-reassign */
const addStringReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case CHANGE_STRING:
        draft.string = action.string;
        break;
    }
  });

export default addStringReducer;
