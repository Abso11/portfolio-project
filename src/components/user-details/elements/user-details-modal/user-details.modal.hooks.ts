import { UseMutateAsyncFunction } from '@tanstack/react-query';
import { generatePath } from 'react-router';
import { t } from 'i18next';
import useMutationWithError from 'hooks/use-mutation-with-error';
import apiPaths from 'utils/api-paths';
import { patchData } from 'utils/api-helpers';
import { UpdateUserDetailsReq } from 'components/user-details/user-details.types';
import { QueryKeysUserDetails } from 'enums';

const saveUserDetails = async (id: string, payload: UpdateUserDetailsReq): Promise<void> => {
  const {
    DASHBOARD: { USER_DETAILS }
  } = apiPaths;

  const { data } = await patchData<UpdateUserDetailsReq, void>(generatePath(USER_DETAILS, { id }), payload);
  return data;
};

type UseSaveSiteDetails = {
  isSaving: boolean;
  saveUserDetailss: UseMutateAsyncFunction<void, unknown, UpdateUserDetailsReq, unknown>;
};

export const useSaveUserDetails = (siteId: string, onError: () => void): UseSaveSiteDetails => {
  const { mutateAsync: saveUserDetailss, isLoading: isSaving } = useMutationWithError(
    (formValues: UpdateUserDetailsReq) => saveUserDetails(siteId, formValues),
    {
      errorMessage: t<string>('save-error'),
      successMessage: t<string>('save-success'),
      invalidateQueryKey: QueryKeysUserDetails.UserDetails,
      onError
    }
  );

  return {
    saveUserDetailss,
    isSaving
  };
};
