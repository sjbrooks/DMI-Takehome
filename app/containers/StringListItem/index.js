/**
 * StringListItem
 *
 * Lists a single string from fakeDB
 */

import React from 'react';
import PropTypes from 'prop-types';
import ListItem from '../../components/ListItem';
import Wrapper from './Wrapper';

export function StringListItem(props) {
  const { item } = props;

  // Put together the content of the array of strings
  const content = <Wrapper>{item}</Wrapper>;

  // Render the content into a list item
  return <ListItem key={`string-list-item-${item}`} item={content} />;
}

StringListItem.propTypes = {
  item: PropTypes.string,
};

export default StringListItem;
