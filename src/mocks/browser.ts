import { setupWorker } from 'msw';
import { dashboardHandler, userDetailsHandler } from './handlers';

export const worker = setupWorker(...dashboardHandler, ...userDetailsHandler);
