/*
 * AddStringPage Messages
 *
 * This contains all the text for the AddStringPage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'DMI-Takehome.containers.AddStringPage';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'Add a string',
  },
  instructions: {
    id: `${scope}.instructions`,
    defaultMessage: 'Submit a word, phrase, or text blurb.',
  },
});
