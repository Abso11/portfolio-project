import { AxiosError } from 'axios';
import { QueryFunction, QueryKey, useQuery, UseQueryOptions, UseQueryResult } from '@tanstack/react-query';
import { handleApiError } from 'utils/api-helpers';

export default <TQueryFnData, TError>(
  queryKey: QueryKey,
  queryFn: QueryFunction<TQueryFnData, QueryKey>,
  options?: UseQueryOptions<TQueryFnData, TError>
): UseQueryResult<TQueryFnData, TError> =>
  useQuery<TQueryFnData, TError>(queryKey, queryFn, {
    ...options,
    onError: (error) => {
      handleApiError(error as AxiosError<Error>);

      if (options) {
        const { onError } = options;
        if (onError) {
          onError(error);
        }
      }
    }
  });
