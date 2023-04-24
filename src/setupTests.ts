// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

// It will disable annoying async validator warnings in console. Async validator is used by antD form.
// https://github.com/yiminghe/async-validator#how-to-avoid-warning
// eslint-disable-next-line
import Schema from 'async-validator';
import { server } from './mocks';

// Establish API mocking before all tests.
beforeAll(() => {
  server.listen();
  const { getComputedStyle } = window;
  window.getComputedStyle = (elt) => getComputedStyle(elt);
});
// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => {
  server.resetHandlers();
  localStorage.clear();
});

// Clean up after the tests are finished.
afterAll(() => server.close());

// TypeError: window.matchMedia is not a function
// It will fix the problem with window.matchMedia
// more: https://github.com/ant-design/ant-design/issues/21096
Object.defineProperty(window, 'matchMedia', {
  value: () => ({
    matches: false,
    addListener: () => {},
    removeListener: () => {}
  })
});

Object.defineProperty(navigator, 'clipboard', {
  value: {
    writeText: () => {}
  }
});
