import useQueryWithError from 'hooks/use-query-with-error';
import { UseMutateAsyncFunction, UseQueryResult } from '@tanstack/react-query';
import { getData, patchData } from 'utils/api-helpers';
import apiPaths from 'utils/api-paths';
import { ListQuery } from 'types';
import { usePaginationConfig } from 'hooks/use-pagination-config';
import { OrderDirection, SortOrder } from 'enums';
import { useMutationWithError } from 'hooks';
import { t } from 'i18next';
import {
  DashBoardListHintsRes,
  DashBoardListReqFilter,
  DashboardListHintsReq,
  DashboardListReq,
  DashboardListRes,
  DashboardListSortableFields,
  UpdateDashboardListReq
} from './dashboard-list.types';

const fetchDashboardList = async (request: DashboardListReq): Promise<DashboardListRes> => {
  const {
    DASHBOARD: { TEST }
  } = apiPaths;

  const { data } = await getData<DashboardListReq, DashboardListRes>(TEST, request);
  return data;
};

export const useFetchDashboardList = (listQuery: ListQuery): UseQueryResult<DashboardListRes, Error> => {
  const { skip, take, sortField, sortOrder, startDate, endDate, filter } = usePaginationConfig(listQuery);
  return useQueryWithError(
    ['DashboardList', skip, take, sortOrder, sortField, startDate, endDate, filter],
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

const fetchDashboardListHints = async (request: DashboardListHintsReq): Promise<DashBoardListHintsRes> => {
  const {
    DASHBOARD: { DASHBOARD_LIST_HINTS }
  } = apiPaths;

  const { data } = await getData<DashboardListHintsReq, DashBoardListHintsRes>(DASHBOARD_LIST_HINTS, request);
  return data;
};

export const useDashboardListHints = (
  listQuery: ListQuery,
  searchText: string
): UseQueryResult<DashBoardListHintsRes> => {
  const { startDate, endDate } = usePaginationConfig(listQuery);
  return useQueryWithError(
    ['DashboardListHints', startDate, endDate, searchText],
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

const saveUserOnDashboardList = async (payload: UpdateDashboardListReq): Promise<void> => {
  const {
    DASHBOARD: { TEST }
  } = apiPaths;

  const { data } = await patchData<UpdateDashboardListReq, void>(TEST, payload);
  return data;
};

type UseSaveSiteDetails = {
  isSaving: boolean;
  saveUserData: UseMutateAsyncFunction<void, unknown, UpdateDashboardListReq, unknown>;
};

export const useSaveUserDashboardData = (onError: () => void): UseSaveSiteDetails => {
  const { mutateAsync: saveUserData, isLoading: isSaving } = useMutationWithError(
    (formValues: UpdateDashboardListReq) => saveUserOnDashboardList(formValues),
    {
      errorMessage: t<string>('save-error'),
      successMessage: t<string>('save-success'),
      invalidateQueryKey: 'DashboardList',
      onError
    }
  );

  return {
    saveUserData,
    isSaving
  };
};
