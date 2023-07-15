import { UseMutateAsyncFunction } from '@tanstack/react-query';
import { generatePath } from 'react-router';
import { t } from 'i18next';
import useMutationWithError from 'hooks/use-mutation-with-error';
import apiPaths from 'utils/api-paths';
import { patchData } from 'utils/api-helpers';
import { UpdateMovieDetailsReq } from 'components/movie-details/movie-details.types';
import { QueryKeysMovieDetails } from 'enums';

const saveMovieDetails = async (id: string, payload: UpdateMovieDetailsReq): Promise<void> => {
  const {
    APP: { MOVIE_DETAILS }
  } = apiPaths;

  const { data } = await patchData<UpdateMovieDetailsReq, void>(generatePath(MOVIE_DETAILS, { id }), payload);
  return data;
};

type UseSaveMovieDetails = {
  isSaving: boolean;
  saveMovieData: UseMutateAsyncFunction<void, unknown, UpdateMovieDetailsReq, unknown>;
};

export const useSaveMovieDetails = (movieId: string, onError: () => void): UseSaveMovieDetails => {
  const { mutateAsync: saveMovieData, isLoading: isSaving } = useMutationWithError(
    (formValues: UpdateMovieDetailsReq) => saveMovieDetails(movieId, formValues),
    {
      errorMessage: t<string>('save-error'),
      successMessage: t<string>('save-success'),
      invalidateQueryKey: QueryKeysMovieDetails.MovieDetails,
      onError
    }
  );

  return {
    saveMovieData,
    isSaving
  };
};
