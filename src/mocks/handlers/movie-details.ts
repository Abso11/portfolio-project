import { rest } from 'msw';
import { generatePath } from 'react-router';
import apiPaths from 'utils/api-paths';
import { UpdateUserDetailsReq } from 'components/user-details/user-details.types';
import { userDetailsData } from 'mocks/responses/movie-details.fixtures';

const {
  APP: { MOVIE_DETAILS }
} = apiPaths;

export const movieDetailsHandler = [
  rest.get(generatePath(MOVIE_DETAILS, { id: ':id' }), (req, res, ctx) => {
    const { id } = req.params;

    if (!id) {
      return res(ctx.status(400), ctx.json({ errorMessage: 'ID is required' }));
    }

    const filter = userDetailsData.filter((item) => item.id === id);

    if (filter.length === 0) {
      return res(ctx.status(404), ctx.json({ errorMessage: 'ID does not exist' }));
    }

    const response = filter[0];

    return res(ctx.delay(500), ctx.status(200), ctx.json(response));
  }),

  rest.patch(generatePath(MOVIE_DETAILS, { id: ':id' }), (req, res, ctx) => {
    const { id } = req.params;
    const existingUserIndex = userDetailsData.findIndex((item) => item.id === id);

    const existingUser = userDetailsData[existingUserIndex];

    if (!id) {
      return res(ctx.status(400), ctx.json({ errorMessage: 'ID is required' }));
    }

    if (!existingUser) {
      return res(ctx.status(404), ctx.json({ errorMessage: 'User with that id does not exists' }));
    }

    const updatedUser = {
      ...existingUser,
      ...(req.body as UpdateUserDetailsReq)
    };

    userDetailsData[existingUserIndex] = updatedUser;

    return res(ctx.status(200), ctx.json(updatedUser));
  })
];
