import { UseQueryResult } from '@tanstack/react-query';
import { DashBoardListHintsRes, DashboardListHintsReq } from 'components/dashboard-list/dashboard-list.types';
import { usePaginationConfig, useQueryWithError } from 'hooks';
import { ListQuery } from 'types';
import { apiPaths, getData } from 'utils';
import { QueryKeysDashboard } from 'enums';

const fetchDashboardListHints = async (request: DashboardListHintsReq): Promise<DashBoardListHintsRes> => {
  const {
    DASHBOARD: { LIST_HINTS }
  } = apiPaths;

  const { data } = await getData<DashboardListHintsReq, DashBoardListHintsRes>(LIST_HINTS, request);
  return data;
};

export const useDashboardListHints = (
  listQuery: ListQuery,
  searchText: string
): UseQueryResult<DashBoardListHintsRes> => {
  const { startDate, endDate } = usePaginationConfig(listQuery);
  return useQueryWithError(
    [QueryKeysDashboard.DashboardListHints, startDate, endDate, searchText],
    () =>
      fetchDashboardListHints({
        start_date: startDate as Date,
        end_date: endDate as Date,
        search_text: searchText
      }),
    {
      refetchOnWindowFocus: false,
      enabled: false
    }
  );
};
