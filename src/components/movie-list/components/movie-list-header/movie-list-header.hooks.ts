import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { MovieListHintsRes, MovieListHintsReq } from 'components/movie-list/movie-list.types';
import { usePaginationConfig } from 'hooks';
import { ListQuery } from 'types';
import { apiPaths, getData } from 'utils';
import { QueryKeysMovieList } from 'enums';

const fetchMovieListHints = async (request: MovieListHintsReq): Promise<MovieListHintsRes> => {
  const {
    APP: { MOVIE_LIST_HINTS }
  } = apiPaths;

  const { data } = await getData<MovieListHintsReq, MovieListHintsRes>(MOVIE_LIST_HINTS, request);
  return data;
};

export const useMovieListHints = (listQuery: ListQuery, searchText: string): UseQueryResult<MovieListHintsRes> => {
  const { startDate, endDate } = usePaginationConfig(listQuery);
  return useQuery(
    [QueryKeysMovieList.MovieList, startDate, endDate, searchText],
    () =>
      fetchMovieListHints({
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
