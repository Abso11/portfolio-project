import { setupWorker } from 'msw';
import { dashboardHandler } from './handlers';

export const worker = setupWorker(...dashboardHandler);
