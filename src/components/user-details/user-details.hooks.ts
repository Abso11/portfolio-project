import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { generatePath } from 'react-router';
import { apiPaths, getData } from 'utils';
import { QueryKeysUserDetails } from 'enums';
import { UserDetailsReq, UserDetailsRes } from './user-details.types';

const fetchUserDetails = async (id: UserDetailsReq): Promise<UserDetailsRes> => {
  const {
    APP: { MOVIE_DETAILS }
  } = apiPaths;

  const { data } = await getData<UserDetailsReq, UserDetailsRes>(generatePath(MOVIE_DETAILS, id));
  return data;
};

export const useFetchUserDetails = (id: string): UseQueryResult<UserDetailsRes, Error> =>
  useQuery<UserDetailsRes, Error>([QueryKeysUserDetails.UserDetails, id], () => fetchUserDetails({ id }), {
    refetchOnWindowFocus: false
  });
