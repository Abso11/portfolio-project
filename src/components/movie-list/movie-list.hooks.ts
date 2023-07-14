import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { usePaginationConfig } from 'hooks';
import { getData } from 'utils/api-helpers';
import apiPaths from 'utils/api-paths';
import { ListQuery } from 'types';
import { OrderDirection, SortOrder, QueryKeysDashboard } from 'enums';
import { MovieListReqFilter, MovieListReq, MovieListRes, MovieListSortableFields } from './movie-list.types';

const fetchMovieList = async (request: MovieListReq): Promise<MovieListRes> => {
  const {
    APP: { MOVIE_LIST }
  } = apiPaths;

  const { data } = await getData<MovieListReq, MovieListRes>(MOVIE_LIST, request);
  return data;
};

export const useFetchMovieList = (listQuery: ListQuery): UseQueryResult<MovieListRes, Error> => {
  const { skip, take, sortField, sortOrder, startDate, endDate, filter } = usePaginationConfig(listQuery);
  return useQuery(
    [QueryKeysDashboard.DashboardList, skip, take, sortOrder, sortField, startDate, endDate, filter],
    () =>
      fetchMovieList({
        skip,
        take,
        sort_order: sortOrder === OrderDirection.ASC ? SortOrder.ASC : SortOrder.DESC,
        sort_field: sortField as MovieListSortableFields,
        start_date: startDate as Date,
        end_date: endDate as Date,
        filter: filter as MovieListReqFilter
      }),
    {
      refetchOnWindowFocus: false
    }
  );
};
