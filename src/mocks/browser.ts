import { setupWorker } from 'msw';
import { movieListHandler, movieDetailsHandler } from './handlers';

export const worker = setupWorker(...movieListHandler, ...movieDetailsHandler);
