import { rest } from 'msw';
import apiPaths from 'utils/api-paths';
import { dashboardData } from 'mocks/responses/dashboard.fixtures';

const {
  DASHBOARD: { TEST }
} = apiPaths;

export const dashboardHandler = [
  rest.get<any>(TEST, (req, res, ctx) => res(ctx.delay(1000), ctx.status(200), ctx.json(dashboardData)))
];
