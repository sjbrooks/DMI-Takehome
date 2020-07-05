/*
 * Add String Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import {
  CHANGE_STRING,
  CREATE_STRING,
  CREATE_STRING_SUCCESS,
  CREATE_STRING_ERROR,
} from './constants';

/**
 * Changes the input field of the form
 *
 * @param  {string} string The new text of the input field
 *
 * @return {object} An action object with a type of CHANGE_STRING
 */
export function changeString(string) {
  return {
    type: CHANGE_STRING,
    string,
  };
}

/**
 * Create a new string, this action starts the request saga
 *
 * @return {object} An action object with a type of CREATE_STRING
 */
export function createString(string) {
  return {
    type: CREATE_STRING,
    string,
  };
}

/**
 * Dispatched when the string has been created by the request saga
 *
 * @param  {array} repos The repository data
 * @param  {string} username The current username
 *
 * @return {object}      An action object with a type of LOAD_STRINGS_SUCCESS passing the repos
 */
export function stringCreated(string) {
  return {
    type: CREATE_STRING_SUCCESS,
    string,
  };
}

/**
 * Dispatched when loading the repositories fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of LOAD_STRINGS_ERROR passing the error
 */
export function stringCreationError(error) {
  return {
    type: CREATE_STRING_ERROR,
    error,
  };
}
