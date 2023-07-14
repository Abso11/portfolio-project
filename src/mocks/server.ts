import { setupServer } from 'msw/node';
import { movieListHandler, movieDetailsHandler } from './handlers';

// This configures a request mocking server with the given request handlers.
export const server = setupServer(...movieListHandler, ...movieDetailsHandler);
