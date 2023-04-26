import { UseQueryResult } from '@tanstack/react-query';
import { generatePath } from 'react-router';
import useQueryWithError from 'hooks/use-query-with-error';
import { apiPaths, getData } from 'utils';
import { UserDetailsReq, UserDetailsRes } from './user-details.types';

const fetchUserDetails = async (id: UserDetailsReq): Promise<UserDetailsRes> => {
  const {
    DASHBOARD: { USER_DETAILS }
  } = apiPaths;

  const { data } = await getData<UserDetailsReq, UserDetailsRes>(generatePath(USER_DETAILS, id));
  return data;
};

export const useFetchUserDetails = (id: string): UseQueryResult<UserDetailsRes, Error> =>
  useQueryWithError<UserDetailsRes, Error>(['userDetails', id], () => fetchUserDetails({ id }), {
    refetchOnWindowFocus: false
  });
