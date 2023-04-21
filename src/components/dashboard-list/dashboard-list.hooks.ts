import useQueryWithError from 'hooks/use-query-with-error';
import { UseQueryResult } from '@tanstack/react-query';
import { getData } from 'utils/api-helpers';
import apiPaths from 'utils/api-paths';
import { ListQuery } from 'types';
import { usePaginationConfig } from 'hooks/use-pagination-config';
import { OrderDirection, SortOrder } from 'enums';
import { DashboardListReq, DashboardListRes, DashboardListSortableFields } from './dashboard-list.types';

const fetchDashboardList = async (request: DashboardListReq): Promise<DashboardListRes> => {
  const {
    DASHBOARD: { TEST }
  } = apiPaths;

  const { data } = await getData<DashboardListReq, DashboardListRes>(TEST, request);
  return data;
};

export const useFetchDashboardList = (listQuery: ListQuery): UseQueryResult<DashboardListRes, Error> => {
  const { skip, take, sortField, sortOrder, startDate, endDate } = usePaginationConfig(listQuery);
  return useQueryWithError(
    ['DashboardList', skip, take, sortOrder, sortField, startDate, endDate],
    () =>
      fetchDashboardList({
        skip,
        take,
        sort_order: sortOrder === OrderDirection.ASC ? SortOrder.ASC : SortOrder.DESC,
        sort_field: sortField as DashboardListSortableFields,
        start_date: startDate as Date,
        end_date: endDate as Date
      }),
    {
      refetchOnWindowFocus: false
    }
  );
};
