/*
 * AddStringPage
 *
 * List all the features
 */
import React from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import H1 from 'components/H1';
// import Form from './Form';
// import Input from './Input';
// import { changeString } from './actions';
// import { makeSelectUsername } from './selectors';

import messages from './messages';

export default function AddStringPage() {
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
    </div>
  );
}
