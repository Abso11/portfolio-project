import useQueryWithError from 'hooks/use-query-with-error';
import { UseQueryResult } from '@tanstack/react-query';
import { getData } from 'utils/api-helpers';
import apiPaths from 'utils/api-paths';

const fetchDashboardList = async (): Promise<any> => {
  const {
    DASHBOARD: { TEST }
  } = apiPaths;

  const { data } = await getData<any, any>(TEST, {});
  return data;
};

export const useFetchDashboardList = (): UseQueryResult<any, Error> =>
  useQueryWithError<any, Error>(['dashboardList'], () => fetchDashboardList(), {
    keepPreviousData: true
  });
