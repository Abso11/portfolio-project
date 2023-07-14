import '@testing-library/jest-dom';

// eslint-disable-next-line
import Schema from 'async-validator';
import { server } from './mocks';

beforeAll(() => {
  server.listen();
  const { getComputedStyle } = window;
  window.getComputedStyle = (elt) => getComputedStyle(elt);
});

afterEach(() => {
  server.resetHandlers();
  localStorage.clear();
});

afterAll(() => server.close());

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
