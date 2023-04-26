import {
  MutationFunction,
  useMutation,
  UseMutationOptions,
  UseMutationResult,
  useQueryClient
} from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { handleApiError } from 'utils/api-helpers';
import notify, { MessageType } from 'utils/notify';

interface UseMutationOptionsEx {
  errorMessage?: string;
  successMessage?: string;
  invalidateQueryKey?: string;
}

type MutationOptions<TData, TError, TVariables, TContext> = UseMutationOptionsEx &
  UseMutationOptions<TData, TError, TVariables, TContext>;

export default <TData = unknown, TError = unknown, TVariables = void, TContext = unknown>(
  func: MutationFunction<TData, TVariables>,
  options?: MutationOptions<TData, TError, TVariables, TContext>
): UseMutationResult<TData, TError, TVariables, TContext> => {
  const queryClient = useQueryClient();

  return useMutation(func, {
    ...options,
    onError: (error, variables, context) => {
      handleApiError(error as AxiosError<Error>);

      if (options) {
        const { onError, errorMessage } = options;

        if (errorMessage) {
          notify(errorMessage, MessageType.Error);
        }

        if (onError) {
          onError(error, variables, context);
        }
      }
    },
    onSuccess: async (data, variables, context) => {
      if (options) {
        const { onSuccess, successMessage, invalidateQueryKey } = options;

        if (successMessage) {
          notify(successMessage, MessageType.Info);
        }

        if (invalidateQueryKey) {
          await queryClient.invalidateQueries([invalidateQueryKey]);
        }

        if (onSuccess) {
          onSuccess(data, variables, context);
        }
      }
    }
  });
};
