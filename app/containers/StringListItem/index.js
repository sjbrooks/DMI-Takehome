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
  const { string } = props;
  // let nameprefix = '';

  // // If the repository is owned by a different person than we got the data for
  // // it's a fork and we should show the name of the owner
  // if (item.owner.login !== props.currentUser) {
  //   nameprefix = `${item.owner.login}/`;
  // }

  // Put together the content of the array of strings
  const content = (
    <Wrapper>
      {string}
      {/* <RepoLink href={item.html_url} target="_blank">
        {nameprefix + item.name}
      </RepoLink>
      <IssueLink href={`${item.html_url}/issues`} target="_blank">
        <IssueIcon />
        <FormattedNumber value={item.open_issues_count} />
      </IssueLink> */}
    </Wrapper>
  );

  // Render the content into a list item
  return <ListItem key={`string-list-item-${string}`} item={content} />;
}

StringListItem.propTypes = {
  string: PropTypes.string,
  // currentUser: PropTypes.string,
};

// export default connect(
//   createStructuredSelector({
//     currentUser: makeSelectCurrentUser(),
//   }),
// )(RepoListItem);

export default StringListItem;
