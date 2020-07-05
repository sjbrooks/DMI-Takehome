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

import { useInjectSaga } from 'utils/injectSaga';
import {
  makeSelectStrings,
  makeSelectLoading,
  makeSelectError,
} from 'containers/App/selectors';
import H2 from 'components/H2';
import StringsList from 'components/StringsList';
import CenteredSection from './CenteredSection';
import Section from './Section';
import messages from './messages';
import { loadStrings } from '../App/actions';
// import reducer from './reducer';
import saga from './saga';

const key = 'home';

export function HomePage({ loading, error, strings, loadStringsOnPageLoad }) {
  // useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  useEffect(() => {
    // load strings upon HomePage mount
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
          <StringsList {...stringListProps} />
        </Section>
      </div>
    </article>
  );
}

HomePage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  strings: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  onSubmitForm: PropTypes.func,
  onChangeString: PropTypes.func,
  loadStringsOnPageLoad: PropTypes.any,
};

const mapStateToProps = createStructuredSelector({
  strings: makeSelectStrings(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

export function mapDispatchToProps(dispatch) {
  return {
    loadStringsOnPageLoad: () => dispatch(loadStrings()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(HomePage);
