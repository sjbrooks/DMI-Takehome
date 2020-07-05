/**
 * AddStringPage selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectAddStringPage = state => state.addString || initialState;

const makeSelectString = () =>
  createSelector(
    selectAddStringPage,
    addStringState => addStringState.data.string,
  );

export { selectAddStringPage, makeSelectString };
