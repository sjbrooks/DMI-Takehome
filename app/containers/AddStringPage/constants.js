/*
 * AddStringPageConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const CHANGE_STRING = 'DMI-Takehome/AddStringPage/CHANGE_STRING';
export const CREATE_STRING = 'DMI-Takehome/AddStringPage/CREATE_STRING';
export const CREATE_STRING_SUCCESS =
  'DMI-Takehome/AddStringPage/CREATE_STRING_SUCCESS';
export const CREATE_STRING_ERROR =
  'DMI-Takehome/AddStringPage/CREATE_STRING_ERROR';
