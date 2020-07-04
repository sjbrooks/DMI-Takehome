/**
 * StringListItem
 *
 * Lists a single string from fakeDB
 */

import React from 'react';
import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import { createStructuredSelector } from 'reselect';
// import { FormattedNumber } from 'react-intl';

// import { makeSelectCurrentUser } from 'containers/App/selectors';
import ListItem from '../../components/ListItem';
// import IssueIcon from './IssueIcon';
// import IssueLink from './IssueLink';
// import RepoLink from './RepoLink';
import Wrapper from './Wrapper';

export function StringListItem(props) {
  const { item } = props;

  // // If the repository is owned by a different person than we got the data for
  // // it's a fork and we should show the name of the owner
  // if (item.owner.login !== props.currentUser) {
  //   nameprefix = `${item.owner.login}/`;
  // }

  // Put together the content of the array of strings
  const content = (
    <Wrapper>
      {createImageBitmap}
      {item}
    </Wrapper>
  );

  // Render the content into a list item
  return <ListItem key={`string-list-item-${item}`} item={content} />;
}

StringListItem.propTypes = {
  item: PropTypes.string,
  // currentUser: PropTypes.string,
};

// export default connect(
//   createStructuredSelector({
//     currentUser: makeSelectCurrentUser(),
//   }),
// )(RepoListItem);

export default StringListItem;
