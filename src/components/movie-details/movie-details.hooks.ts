import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { generatePath } from 'react-router';
import { apiPaths, getData } from 'utils';
import { QueryKeysUserDetails } from 'enums';
import { MovieDetailsReq, MovieDetailsRes } from './movie-details.types';

const fetchMovieDetails = async (id: MovieDetailsReq): Promise<MovieDetailsRes> => {
  const {
    APP: { MOVIE_DETAILS }
  } = apiPaths;

  const { data } = await getData<MovieDetailsReq, MovieDetailsRes>(generatePath(MOVIE_DETAILS, id));
  return data;
};

export const useFetchMovieDetails = (id: string): UseQueryResult<MovieDetailsRes, Error> =>
  useQuery<MovieDetailsRes, Error>([QueryKeysUserDetails.UserDetails, id], () => fetchMovieDetails({ id }), {
    refetchOnWindowFocus: false
  });
