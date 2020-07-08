import React from 'react';
import PropTypes from 'prop-types';

import List from 'components/List';
import ListItem from 'components/ListItem';
import LoadingIndicator from 'components/LoadingIndicator';

function Alert({ loading, error, created }) {
  if (loading) {
    return <List component={LoadingIndicator} />;
  }

  if (error !== false) {
    const ErrorComponent = () => (
      <ListItem item="Something went wrong, please try again!" />
    );
    return <List component={ErrorComponent} />;
  }

  if (created === true) {
    const CreatedComponent = () => <ListItem item="Successfully created." />;
    return <List component={CreatedComponent} />;
  }

  return null;
}

Alert.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.any,
  created: PropTypes.bool,
};

export default Alert;
