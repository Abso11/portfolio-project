import { UseMutateAsyncFunction } from '@tanstack/react-query';
import { t } from 'i18next';
import { useMutationWithError } from 'hooks';
import { apiPaths, patchData } from 'utils';
import { QueryKeysDashboard } from 'enums';
import { UpdateMovieListReq } from 'components/movie-list/movie-list.types';

const saveMovieList = async (payload: UpdateMovieListReq): Promise<void> => {
  const {
    APP: { MOVIE_LIST }
  } = apiPaths;

  const { data } = await patchData<UpdateMovieListReq, void>(MOVIE_LIST, payload);
  return data;
};

type SaveMovieList = {
  isSaving: boolean;
  saveMovieData: UseMutateAsyncFunction<void, unknown, UpdateMovieListReq, unknown>;
};

export const useSaveMovieData = (onError: () => void): SaveMovieList => {
  const { mutateAsync: saveMovieData, isLoading: isSaving } = useMutationWithError(
    (formValues: UpdateMovieListReq) => saveMovieList(formValues),
    {
      errorMessage: t<string>('save-error'),
      successMessage: t<string>('save-success'),
      invalidateQueryKey: QueryKeysDashboard.DashboardList,
      onError
    }
  );

  return {
    saveMovieData,
    isSaving
  };
};
