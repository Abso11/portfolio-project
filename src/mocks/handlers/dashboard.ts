import { rest } from 'msw';
import apiPaths from 'utils/api-paths';
import { mockedDashboardList } from 'mocks/responses/dashboard.fixtures';
import { DashBoardListHintsRes, DashboardListRes } from 'components/dashboard-list/dashboard-list.types';
import orderBy from 'lodash.orderby';
import { sortBy, uniqBy } from 'lodash';

const {
  DASHBOARD: { TEST, DASHBOARD_LIST_HINTS }
} = apiPaths;

export const dashboardHandler = [
  rest.get(`*${TEST}`, (req, res, ctx) => {
    const skip = req.url.searchParams.get('skip');
    const take = req.url.searchParams.get('take');
    const sortOrder = req.url.searchParams.get('sort_order');
    const sortField = req.url.searchParams.get('sort_field');
    const startDate = req.url.searchParams.get('start_date');
    const endDate = req.url.searchParams.get('end_date');
    const filterId = req.url.searchParams.get('filter[user_id]');
    const filterStatus = req.url.searchParams.get('filter[status]');
    const filterAction = req.url.searchParams.get('filter[action]');

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

    if (startDate && endDate) {
      dashboardList = dashboardList.filter(
        ({ timestamp }) => timestamp >= new Date(startDate) && timestamp <= new Date(endDate)
      );
    }

    if (filterId) {
      dashboardList = dashboardList.filter((item) => item.user_id.toLowerCase() === filterId.toLowerCase());
    }

    if (filterStatus) {
      dashboardList = dashboardList.filter((item) => item.status?.toLowerCase() === filterStatus.toLowerCase());
    }

    if (filterAction) {
      dashboardList = dashboardList.filter((item) => item.action?.toLowerCase() === filterAction.toLowerCase());
    }

    const response: DashboardListRes = {
      records_count: dashboardList.length,
      logs: dashboardList.slice(Number(skip), Number(skip) + Number(take))
    };

    return res(ctx.delay(300), ctx.status(200), ctx.json(response));
  }),

  rest.get(`*${DASHBOARD_LIST_HINTS}`, (req, res, ctx) => {
    const searchText = req.url.searchParams.get('search_text')!.toLowerCase();

    let response: DashBoardListHintsRes = [];

    const filterableKeys = ['action', 'user_id', 'status'];
    mockedDashboardList.forEach((userLogs) => {
      Object.entries(userLogs).forEach(([key, value]) => {
        if (filterableKeys.includes(key) && `${value}`.toLowerCase().includes(searchText)) {
          response.push({
            key,
            value: value.toString()
          });
        }
      });
    });

    response = sortBy(uniqBy(response, 'value'), 'value');

    return res(ctx.delay(200), ctx.status(200), ctx.json(response));
  })
];
