import { rest } from 'msw';
import apiPaths from 'utils/api-paths';
import { mockedDashboardList } from 'mocks/responses/dashboard.fixtures';
import { DashboardListRes } from 'components/dashboard-list/dashboard-list.types';
import orderBy from 'lodash.orderby';

const {
  DASHBOARD: { TEST }
} = apiPaths;

export const dashboardHandler = [
  rest.get(`*${TEST}`, (req, res, ctx) => {
    const skip = req.url.searchParams.get('skip');
    const take = req.url.searchParams.get('take');
    const sortOrder = req.url.searchParams.get('sort_order');
    const sortField = req.url.searchParams.get('sort_field');
    // const startDate = req.url.searchParams.get('start_date');
    // const endDate = req.url.searchParams.get('end_date');
    // const filter = req.url.searchParams.get('filter');

    if (!take) {
      return res(ctx.status(400), ctx.json({ errorMessage: 'Take is required' }));
    }

    if (!skip) {
      return res(ctx.status(400), ctx.json({ errorMessage: 'Skip is required' }));
    }

    let dashboardList: DashboardListRes['logs'] = [];

    if (sortOrder && sortField) {
      dashboardList = orderBy(mockedDashboardList, [sortField], sortOrder === 'desc' ? 'desc' : 'asc');
    }

    // if (startDate && endDate) {
    //   logs = logs.filter(({ timestamp }) => timestamp >= new Date(startDate) && timestamp <= new Date(endDate));
    // }

    const response: DashboardListRes = {
      records_count: dashboardList.length,
      logs: dashboardList.slice(Number(skip), Number(skip) + Number(take))
    };

    return res(ctx.delay(300), ctx.status(200), ctx.json(response));
  })
];
