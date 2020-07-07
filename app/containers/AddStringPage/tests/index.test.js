/**
 * Test the AddStringPage
 */

import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import { IntlProvider } from 'react-intl';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router-dom';

import { AddStringPage, mapDispatchToProps } from '../index';
import {
  changeString,
  createString,
  stringCreated,
  stringCreationError,
} from '../actions';
// import { loadRepos } from '../../App/actions';
import configureStore from '../../../configureStore';

describe('<AddStringPage />', () => {
  let store;

  beforeAll(() => {
    store = configureStore({}, browserHistory);
  });

  it('should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(
      <Provider store={store}>
        <IntlProvider locale="en">
          <AddStringPage
            loading={false}
            error={false}
            string=""
            created={false}
          />
        </IntlProvider>
      </Provider>,
    );
    expect(firstChild).toMatchSnapshot();
  });

  it('should submit string creation form if input form is not empty', async () => {
    const submitSpy = jest.fn();
    const { container } = render(
      <Provider store={store}>
        <IntlProvider locale="en">
          <AddStringPage
            string="Not Empty"
            onchangeString={() => {}}
            onSubmitForm={submitSpy}
          />
        </IntlProvider>
      </Provider>,
    );

    const input = container.querySelector('input');
    fireEvent.submit(input);
    expect(submitSpy).toHaveBeenCalled();
  });

  // NOTE: Although the onSubmit function will still be called in case of empty input,
  // the logic inside the saga prevents the creation of an empty string.
  // See saga.test.js for where we test an empty string.

  // it('should not create string if input form is submitted while empty', () => {
  //   const submitSpy = jest.fn();
  //   const { container } = render(
  //     <Provider store={store}>
  //       <IntlProvider locale="en">
  //         <AddStringPage
  //           string=""
  //           onchangeString={() => {}}
  //           onSubmitForm={submitSpy}
  //         />
  //       </IntlProvider>
  //     </Provider>,
  //   );

  //   const input = container.querySelector('input');
  //   fireEvent.submit(input);
  //   expect(submitSpy).not.toHaveBeenCalled();
  // });

  //   it('should not call onSubmitForm if string is an empty string', () => {
  //     const submitSpy = jest.fn();
  //     render(
  //       <Provider store={store}>
  //         <IntlProvider locale="en">
  //           <AddStringPage onchangeString={() => {}} onSubmitForm={submitSpy} />
  //         </IntlProvider>
  //       </Provider>,
  //     );
  //     expect(submitSpy).not.toHaveBeenCalled();
  //   });

  //   it('should not call onSubmitForm if string is null', () => {
  //     const submitSpy = jest.fn();
  //     render(
  //       <Provider store={store}>
  //         <IntlProvider locale="en">
  //           <AddStringPage
  //             string=""
  //             onchangeString={() => {}}
  //             onSubmitForm={submitSpy}
  //           />
  //         </IntlProvider>
  //       </Provider>,
  //     );
  //     expect(submitSpy).not.toHaveBeenCalled();
  //   });

  //   describe('mapDispatchToProps', () => {
  //     describe('onchangeString', () => {
  //       it('should be injected', () => {
  //         const dispatch = jest.fn();
  //         const result = mapDispatchToProps(dispatch);
  //         expect(result.onchangeString).toBeDefined();
  //       });

  //       it('should dispatch changeString when called', () => {
  //         const dispatch = jest.fn();
  //         const result = mapDispatchToProps(dispatch);
  //         const string = 'mxstbr';
  //         result.onchangeString({ target: { value: string } });
  //         expect(dispatch).toHaveBeenCalledWith(changeString(string));
  //       });
  //     });

  //     describe('onSubmitForm', () => {
  //       it('should be injected', () => {
  //         const dispatch = jest.fn();
  //         const result = mapDispatchToProps(dispatch);
  //         expect(result.onSubmitForm).toBeDefined();
  //       });

  //       it('should dispatch loadRepos when called', () => {
  //         const dispatch = jest.fn();
  //         const result = mapDispatchToProps(dispatch);
  //         result.onSubmitForm();
  //         expect(dispatch).toHaveBeenCalledWith(loadRepos());
  //       });

  //       it('should preventDefault if called with event', () => {
  //         const preventDefault = jest.fn();
  //         const result = mapDispatchToProps(() => {});
  //         const evt = { preventDefault };
  //         result.onSubmitForm(evt);
  //         expect(preventDefault).toHaveBeenCalledWith();
  //       });
  //     });
  //   });
});
