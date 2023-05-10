import { UseMutateAsyncFunction } from '@tanstack/react-query';
import { t } from 'i18next';
import { UpdateDashboardListReq } from 'components/dashboard-list/dashboard-list.types';
import { useMutationWithError } from 'hooks';
import { apiPaths, patchData } from 'utils';
import { QueryKeysDashboard } from 'enums';

const saveUserOnDashboardList = async (payload: UpdateDashboardListReq): Promise<void> => {
  const {
    DASHBOARD: { LIST }
  } = apiPaths;

  const { data } = await patchData<UpdateDashboardListReq, void>(LIST, payload);
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
      invalidateQueryKey: QueryKeysDashboard.DashboardList,
      onError
    }
  );

  return {
    saveUserData,
    isSaving
  };
};
