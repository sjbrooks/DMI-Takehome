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

const makeSelectLoading = () =>
  createSelector(
    selectAddStringPage,
    addStringState => addStringState.loading,
  );

const makeSelectError = () =>
  createSelector(
    selectAddStringPage,
    addStringState => addStringState.error,
  );

const makeSelectCreated = () =>
  createSelector(
    selectAddStringPage,
    addStringState => addStringState.created,
  );

export {
  selectAddStringPage,
  makeSelectString,
  makeSelectLoading,
  makeSelectError,
  makeSelectCreated,
};
