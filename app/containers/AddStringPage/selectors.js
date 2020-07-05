/**
 * AddStringPage selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectAddStringPage = state => state.addString || initialState;

const makeSelectString = () =>
  createSelector(
    selectAddStringPage,
    addStringState => addStringState.string,
  );

export { selectAddStringPage, makeSelectString };
