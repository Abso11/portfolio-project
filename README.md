# Portfolio Project

Repository contains UI application called Portfolio Project. Please see instructions below to know how to develop and test.

Project description:
- the app allows to see example user data within the table including pagination, sorting and searching
- the app working with mock service worker
- responsive menu included
- custom hooks
- edit user data within table form or separate page with user details
- validation included
- i18next included
- unit test included
- error/loading handlers

# Tech Stack
- Typescript
- Vite
- eslint, prettier, husky, commitlint, lint-staged
- react-query
- antd
- styled-components
- jest

## Development
To develop this project you should run `yarn` and then `yarn start`.

This script runs the application in the development mode. Open [http://localhost:9000](http://localhost:9000) to view it in the browser.


### Commit changes
After making the changes to the code you can commit it and push to remote branch. Conventional commits are used in this project and commit message must follow the rules:

`type: description`

Where `type` could be:
- feat - new features,
- fix - fix for existing features,
- refactor - refactor of existing code,
- tests - changes regarding tests only,
- chore - changes not related to code itself (like packages version bump)
- docs - changes in documentations (like README for example)

### Tests

To run tests locally you can use `yarn test`. It launches the test runner in the interactive watch mode.
