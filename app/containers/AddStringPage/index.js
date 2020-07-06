/*
 * AddStringPage
 *
 * Form to add a new string
 */

import React, { memo } from 'react';
import { Alert } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';

import H1 from 'components/H1';
import LoadingIndicator from 'components/LoadingIndicator';
import List from 'components/List';
import Form from './Form';
import Input from './Input';

import { changeString, createString } from './actions';
import {
  makeSelectString,
  makeSelectLoading,
  makeSelectError,
  makeSelectCreated,
} from './selectors';
import reducer from './reducer';
import saga from './saga';

import messages from './messages';
const key = 'addString';

export function AddStringPage({
  string,
  onSubmitForm,
  onChangeString,
  error,
  created,
  loading,
}) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  const errorAlert = error ? (
    <Alert variant="danger">Something went wrong. Please try again.</Alert>
  ) : null;
  const createdAlert = created ? (
    <Alert variant="success">Successfully added.</Alert>
  ) : null;
  const loadingSpinner = loading ? <List component={LoadingIndicator} /> : null;

  return (
    <div>
      <Helmet>
        <title>Add String Page</title>
        <meta
          name="description"
          content="Form to add a string to string store application"
        />
      </Helmet>
      <H1>
        <FormattedMessage {...messages.header} />
      </H1>
      {errorAlert}
      {createdAlert}
      {loadingSpinner}
      <Form onSubmit={onSubmitForm}>
        <label htmlFor="username">
          <FormattedMessage {...messages.instructions} />
          <Input
            id="string"
            type="text"
            placeholder="Enter text here"
            value={string}
            onChange={onChangeString}
          />
        </label>
      </Form>
    </div>
  );
}

AddStringPage.propTypes = {
  string: PropTypes.string,
  onSubmitForm: PropTypes.func,
  onChangeString: PropTypes.func,
  loading: PropTypes.bool,
  created: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
};

const mapStateToProps = createStructuredSelector({
  string: makeSelectString(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
  created: makeSelectCreated(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onChangeString: evt => dispatch(changeString(evt.target.value)),
    onSubmitForm: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(createString());
      dispatch(changeString(''));
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(AddStringPage);
