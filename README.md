![DMI-Takehome-App-Hierarchy](./app/images/DMI-Takehome-App-Hierarchy.png?raw=true "DMI-Takehome-App-Hierarchy")


# App Functionality

Fullstack Javascript string storing app that allows users to view all strings in the store and add a string to the store. This repository contains a `client`, which is a React Boilerplate App, and `server`, a Node / Express server with a fake database.

The `client` has one page (home page) that displays all strings stored on the fake database and one page (Add a String page) with a form to input a string and send it to the server, and allows a user to navigate between the two pages. The `server` side has a fake database in the format of an array of strings and two endpoints - one to fetch all strings and one to prepend a new string to the array.


# Getting Started

1. Clone the repository `git clone git@github.com:sjbrooks/DMI-Takehome.git`
2. `npm run setup`
3. `npm start`
4. `jest app/containers/AddStringPage/tests/` to run the tests for the AddStringsPage container


## Built With

* [React](https://reactjs.org/) - Frontend Javascript framework used to build components
* [React Boilerplate](https://www.reactboilerplate.com/) - Quick scaffolding for performance-oriented React apps
* [Node](https://nodejs.org/en/docs/) - JavaScript runtime environment that executes JavaScript code outside a web browser
* [Express](https://expressjs.com/) - Backend Javascript Web App framework used for routing, authentication, and authorization
* [React Router](https://www.npmjs.com/package/react-router) - Client-side routing for React apps
* [Redux](https://redux.js.org/) - A library for global state management, especially useful for larger apps with more state. Comes with excellent chrome debugging tool.
* [Redux Saga](https://redux-saga.js.org/) - A library that enables you to manage application side effects (like async code) more flexibly (can do things like only the latest action) and write tests more easily (testing js objects instead of promises) than with alternatives like Redux-Thunk.
* [Reselect](https://github.com/reduxjs/reselect) - A selector library for Redux that allows you to create memoized, composable selector functions. In addition to removing redundant selections and centralizing state selection, it allows you to improve performance by avoiding reruning expensive computations in cases where the values in state have not changed.
* [Styled Components](https://styled-components.com/) - A libary that enables you to write CSS that's scoped to a single component

## Assumptions

* While we shouldn't allow the user to add a string with a falsey value (an empty string), we do currently allow for submissions of strings of spaces because this behavior requires typing at least one character, so it's assumed to be intentional
* Trailing white space in an input string is assumed to be intentional, so we do not currently remove it
* We want to allow user to input strings of any size in this first version of the app so there is currently no character limit

## Areas for further development

Given more time, I would have added the following:
  * Client side and server side validation to prevent bad submissions like empty strings instead of using logic in the AddStringPage saga to accomplish this
    - For sever side, I would use JSON schema validation
    - For the client side, I would use a library like Formik
      - Once I added client side form validation, I would have added a test in index.test.js to test form submission with an empty string
  * Success and failure styled components to wrap around Alert so that div would show up as green for successful creation and red for an error

And discussed the need for the following with the product manager:
  * Prevention of string creation with string made up of spaces (perhaps we decide that this behavior is uninentional or undesirable if we think that strings made of spaces are meaningless)
  * Character limit. Depending on the use case of the app, we may impose a character limit to save memory. For example, if this was used for something more like a To Do app, we might want a character limit of 250 characters to keep it short and sweet, but if this app were going to be used to store entire passages or chapters of novels, a character limit may be less necessary.
  * Removal of trailing white space (perhaps we would want to do this to save memory or make format of string more appealing in cases where we want to add a different colored background color behind the string)
  * Future need for containers like LanguageProvider not currently being used. If we don't forsee ourselves using them, we should consider removing them from the project.

Note: The first two in the above could be handled with the additional client side and server side validation.
