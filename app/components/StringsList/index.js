import React from 'react';
import PropTypes from 'prop-types';

import List from 'components/List';
import ListItem from 'components/ListItem';
import LoadingIndicator from 'components/LoadingIndicator';
import StringListItem from 'containers/StringListItem';

function StringsList({ loading, error, strings }) {
  if (loading) {
    return <List component={LoadingIndicator} />;
  }

  if (error !== false) {
    const ErrorComponent = () => (
      <ListItem item="Something went wrong, please try again!" />
    );
    return <List component={ErrorComponent} />;
  }

  if (strings !== false) {
    return <List items={strings} component={StringListItem} />;
  }

  return null;
}

StringsList.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.any,
  strings: PropTypes.any,
};

export default StringsList;
