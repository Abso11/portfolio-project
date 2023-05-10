import { UseQueryResult } from '@tanstack/react-query';
import useQueryWithError from 'hooks/use-query-with-error';
import { usePaginationConfig } from 'hooks';
import { getData } from 'utils/api-helpers';
import apiPaths from 'utils/api-paths';
import { ListQuery } from 'types';
import { OrderDirection, SortOrder, QueryKeysDashboard } from 'enums';
import {
  DashBoardListReqFilter,
  DashboardListReq,
  DashboardListRes,
  DashboardListSortableFields
} from './dashboard-list.types';

const fetchDashboardList = async (request: DashboardListReq): Promise<DashboardListRes> => {
  const {
    DASHBOARD: { LIST }
  } = apiPaths;

  const { data } = await getData<DashboardListReq, DashboardListRes>(LIST, request);
  return data;
};

export const useFetchDashboardList = (listQuery: ListQuery): UseQueryResult<DashboardListRes, Error> => {
  const { skip, take, sortField, sortOrder, startDate, endDate, filter } = usePaginationConfig(listQuery);
  return useQueryWithError(
    [QueryKeysDashboard.DashboardList, skip, take, sortOrder, sortField, startDate, endDate, filter],
    () =>
      fetchDashboardList({
        skip,
        take,
        sort_order: sortOrder === OrderDirection.ASC ? SortOrder.ASC : SortOrder.DESC,
        sort_field: sortField as DashboardListSortableFields,
        start_date: startDate as Date,
        end_date: endDate as Date,
        filter: filter as DashBoardListReqFilter
      }),
    {
      refetchOnWindowFocus: false
    }
  );
};
