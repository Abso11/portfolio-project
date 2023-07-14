# Portfolio Project

Repository contains UI application called Portfolio Project.
Please see instructions below to know how to develop and test.

Project description:

The goal of my project is to show a similar level to a commercial project, through tool configurations (with husky, eslint, commitlint etc.) and working with the API.

- the app allows to see IMDB movie data within the table including pagination, sorting, date picker and multi select filter (working with backend)
- edit movie data within table form or movie details separate page with modal (working with backend)
- update notifications with successful update or error after editing data
- row expanding with more details about selected movie
- the app working with self-created endpoints (mocked service worker)
- fetching data using tanstack-react-query/axios
- responsive menu
- custom hooks
- form validation
- translate with i18next
- unit tests with jest (happy and unhappy paths, check API calls)
- loading/error handlers with spinner/refresh components

- all changes have separate branches/PR, with appropriate names and conventional commits
- main branch is protected

Plans to add:
- showing similar movies on the subpage with movie details

# Tech Stack
- Typescript
- Vite
- eslint, prettier, husky, commitlint, lint-staged
- react-query
- antd
- styled-components
- jest
- mocked service worker

## Development
To develop this project you should run `yarn` and then `yarn start`.

This script runs the application in the development mode. Open [http://localhost:9000](http://localhost:9000) to view it in the browser.

### Tests

To run tests locally you can use `yarn test`. It launches the test runner in the interactive watch mode.

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
