/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'DMI-Takehome.containers.HomePage';

export default defineMessages({
  stringStoreHeader: {
    id: `${scope}.string_store.header`,
    defaultMessage: 'String Store: Get all the strings here!',
  },
  stringStoreMessage: {
    id: `${scope}.string_store.message`,
    defaultMessage:
      'View all the strings in our store, from most recently added to least recently added',
  },
  stringsInStockHeader: {
    id: `${scope}.stringsinstock.header`,
    defaultMessage: 'Strings currently in stock',
  },
});
