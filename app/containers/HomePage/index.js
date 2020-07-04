/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

// import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import {
  makeSelectStrings,
  makeSelectLoading,
  makeSelectError,
} from 'containers/App/selectors';
import H2 from 'components/H2';
import StringsList from 'components/StringsList';
// import AtPrefix from './AtPrefix';
import CenteredSection from './CenteredSection';
// import Form from './Form';
// import Input from './Input';
import Section from './Section';
import messages from './messages';
import { loadStrings } from '../App/actions';
// import reducer from './reducer';
import saga from './saga';

const key = 'home';

export function HomePage({
  // username,
  // string,
  loading,
  error,
  strings,
  loadStringsOnPageLoad,
  // onSubmitForm,
  // onChangeString,
}) {
  // useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  useEffect(() => {
    // load strings upon homepage mount
    loadStringsOnPageLoad();
  }, []);

  const stringListProps = {
    loading,
    error,
    strings,
  };

  return (
    <article>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="String store homepage" />
      </Helmet>
      <div>
        <CenteredSection>
          <H2>
            <FormattedMessage {...messages.stringStoreHeader} />
          </H2>
          <p>
            <FormattedMessage {...messages.stringStoreMessage} />
          </p>
        </CenteredSection>
        <Section>
          <H2>
            <FormattedMessage {...messages.stringsInStockHeader} />
          </H2>
          {/* <Form onSubmit={onSubmitForm}>
            <label htmlFor="username">
              <FormattedMessage {...messages.trymeMessage} />
              <AtPrefix>
                <FormattedMessage {...messages.trymeAtPrefix} />
              </AtPrefix>
              <Input
                id="string"
                type="text"
                placeholder="mxstbr"
                value={string}
                onChange={onChangeString}
              />
            </label>
          </Form> */}
          <StringsList {...stringListProps} />
        </Section>
      </div>
    </article>
  );
}

HomePage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  strings: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  string: PropTypes.string,
  onSubmitForm: PropTypes.func,
  // username: PropTypes.string,
  onChangeString: PropTypes.func,
  loadStringsOnPageLoad: PropTypes.any,
};

const mapStateToProps = createStructuredSelector({
  strings: makeSelectStrings(),
  // username: makeSelectUsername(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

export function mapDispatchToProps(dispatch) {
  return {
    loadStringsOnPageLoad: () => dispatch(loadStrings()),
  };
  // return {
  //   onChangeString: evt => dispatch(changeString(evt.target.value)),
  //   onSubmitForm: evt => {
  //     if (evt !== undefined && evt.preventDefault) evt.preventDefault();
  //     dispatch(loadStrings());
  //   },
  // };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(HomePage);
