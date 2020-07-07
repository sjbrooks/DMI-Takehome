import {
  selectAddStringPage,
  makeSelectString,
  makeSelectLoading,
  makeSelectError,
  makeSelectCreated,
} from '../selectors';

describe('selectAddStringPage', () => {
  it('should select the addString state', () => {
    const addStringState = {
      loading: false,
      error: false,
      data: {
        string: '',
      },
      created: false,
    };
    const mockedState = {
      addString: addStringState,
    };
    expect(selectAddStringPage(mockedState)).toEqual(addStringState);
  });
});

describe('makeSelectString', () => {
  const stringSelector = makeSelectString();
  it('should select the string', () => {
    const string = 'test string';
    const mockedState = {
      addString: {
        data: {
          string,
        },
      },
    };
    expect(stringSelector(mockedState)).toEqual(string);
  });
});

describe('makeSelectLoading', () => {
  const stringLoadingSelector = makeSelectLoading();
  it('should select the loading status', () => {
    const loading = true;
    const mockedState = {
      addString: {
        loading,
      },
    };
    expect(stringLoadingSelector(mockedState)).toEqual(loading);
  });
});

describe('makeSelectError', () => {
  const stringErrorSelector = makeSelectError();
  it('should select the error', () => {
    const error = new Error('String creation failed');
    const mockedState = {
      addString: {
        error,
      },
    };
    expect(stringErrorSelector(mockedState)).toEqual(error);
  });
});

describe('makeSelectCreated', () => {
  const stringCreatedSelector = makeSelectCreated();
  it('should select the created status', () => {
    const created = true;
    const mockedState = {
      addString: {
        created,
      },
    };
    expect(stringCreatedSelector(mockedState)).toEqual(created);
  });
});
