import apiPaths from 'utils/api-paths';
import { rest } from 'msw';
import { generatePath } from 'react-router';
import { UpdateUserDetailsReq, UserDetailsRes } from 'components/user-details/user-details.types';
import { userDetailsData } from 'mocks/responses/user-details.fixtures';

const {
  DASHBOARD: { USER_DETAILS }
} = apiPaths;

export const userDetailsHandler = [
  rest.get(generatePath(USER_DETAILS, { id: ':id' }), (req, res, ctx) => {
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
  rest.patch(generatePath(USER_DETAILS, { id: ':id' }), (req, res, ctx) => {
    const { id } = req.params;
    const existingSiteIndex = userDetailsData.findIndex((item) => item.id === id);

    const existingUser = userDetailsData[existingSiteIndex];

    if (!id) {
      return res(ctx.status(400), ctx.json({ errorMessage: 'ID is required' }));
    }

    if (!existingUser) {
      return res(ctx.status(404), ctx.json({ errorMessage: 'Site with that id does not exists' }));
    }

    const updatedSite = {
      ...existingUser,
      ...(req.body as UpdateUserDetailsReq)
    };

    userDetailsData[existingSiteIndex] = updatedSite;

    return res(ctx.status(200), ctx.json(updatedSite));
  })
];
