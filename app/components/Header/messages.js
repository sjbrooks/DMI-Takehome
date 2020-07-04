/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'DMI-Takehome.components.Header';

export default defineMessages({
  home: {
    id: `${scope}.home`,
    defaultMessage: 'Home: All Strings',
  },
  addString: {
    id: `${scope}.addString`,
    defaultMessage: 'Add a String',
  },
});
