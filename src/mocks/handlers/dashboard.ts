import { rest } from 'msw';
import orderBy from 'lodash.orderby';
import { sortBy, uniqBy } from 'lodash';
import apiPaths from 'utils/api-paths';
import { mockedDashboardList } from 'mocks/responses/dashboard.fixtures';
import {
  DashBoardListHintsRes,
  DashboardListRes,
  UpdateDashboardListReq
} from 'components/dashboard-list/dashboard-list.types';

const {
  DASHBOARD: { LIST, LIST_HINTS }
} = apiPaths;

export const dashboardHandler = [
  rest.get(`*${LIST}`, (req, res, ctx) => {
    const skip = req.url.searchParams.get('skip');
    const take = req.url.searchParams.get('take');
    const sortOrder = req.url.searchParams.get('sort_order');
    const sortField = req.url.searchParams.get('sort_field');
    const startDate = req.url.searchParams.get('start_date');
    const endDate = req.url.searchParams.get('end_date');
    const filter = req.url.searchParams.get('filter');

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

    if (filter) {
      const parsedFilter = JSON.parse(filter || '');
      if (parsedFilter.user_id) {
        dashboardList = dashboardList.filter(
          (item) => item.user_id.toLowerCase() === parsedFilter.user_id.toLowerCase()
        );
      }

      if (parsedFilter.status) {
        dashboardList = dashboardList.filter(
          (item) => item.status?.toLowerCase() === parsedFilter.status.toLowerCase()
        );
      }

      if (parsedFilter.action) {
        dashboardList = dashboardList.filter(
          (item) => item.action?.toLowerCase() === parsedFilter.action.toLowerCase()
        );
      }
    }

    const response: DashboardListRes = {
      records_count: dashboardList.length,
      logs: dashboardList.slice(Number(skip), Number(skip) + Number(take))
    };

    return res(ctx.delay(300), ctx.status(200), ctx.json(response));
  }),

  rest.patch(`*${LIST}`, (req, res, ctx) => {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    const { user_id } = req.body as UpdateDashboardListReq;
    const existingUserIndex = mockedDashboardList.findIndex((item) => item.user_id === user_id);

    const existingUser = mockedDashboardList[existingUserIndex];

    if (!user_id) {
      return res(ctx.status(400), ctx.json({ errorMessage: 'ID is required' }));
    }

    if (!existingUser) {
      return res(ctx.status(404), ctx.json({ errorMessage: 'User with that id does not exists' }));
    }

    const updatedUser = {
      ...existingUser,
      ...(req.body as UpdateDashboardListReq)
    };

    mockedDashboardList[existingUserIndex] = updatedUser;

    return res(ctx.status(200), ctx.json(updatedUser));
  }),

  rest.get(`*${LIST_HINTS}`, (req, res, ctx) => {
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
