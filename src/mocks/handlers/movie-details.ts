import { rest } from 'msw';
import { generatePath } from 'react-router';
import apiPaths from 'utils/api-paths';
import { UpdateMovieDetailsReq } from 'components/movie-details/movie-details.types';
import { mockedMovieDetails } from 'mocks/responses/movie-details.fixtures';

const {
  APP: { MOVIE_DETAILS }
} = apiPaths;

export const movieDetailsHandler = [
  rest.get(generatePath(MOVIE_DETAILS, { id: ':id' }), (req, res, ctx) => {
    const { id } = req.params;

    if (!id) {
      return res(ctx.status(400), ctx.json({ errorMessage: 'ID is required' }));
    }

    const filter = mockedMovieDetails.filter((item) => item.id === id);

    if (filter.length === 0) {
      return res(ctx.status(404), ctx.json({ errorMessage: 'ID does not exist' }));
    }

    const response = filter[0];

    return res(ctx.delay(500), ctx.status(200), ctx.json(response));
  }),

  rest.patch(generatePath(MOVIE_DETAILS, { id: ':id' }), (req, res, ctx) => {
    const { id } = req.params;
    const existingMovieIndex = mockedMovieDetails.findIndex((item) => item.id === id);

    const existingMovie = mockedMovieDetails[existingMovieIndex];

    if (!id) {
      return res(ctx.status(400), ctx.json({ errorMessage: 'ID is required' }));
    }

    if (!existingMovie) {
      return res(ctx.status(404), ctx.json({ errorMessage: 'Movie with that id does not exists' }));
    }

    const updatedMovieDetails = {
      ...existingMovie,
      ...(req.body as UpdateMovieDetailsReq)
    };

    mockedMovieDetails[existingMovieIndex] = updatedMovieDetails;

    return res(ctx.status(200), ctx.json(updatedMovieDetails));
  })
];
