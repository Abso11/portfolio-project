import { fireEvent, screen, waitForElementToBeRemoved, act, waitFor } from '@testing-library/react';
import { rest } from 'msw';
import routeData, { generatePath } from 'react-router';
import { server } from 'mocks/server';
import { render } from 'tests';
import apiPaths from 'utils/api-paths';
import { userDetailsData } from 'mocks/responses';
import UserDetails from './user-details';

jest.mock('react-router', () => ({
  ...jest.requireActual('react-router'),
  useParams: jest.fn()
}));

const {
  DASHBOARD: { USER_DETAILS }
} = apiPaths;

describe('User Details', () => {
  beforeEach(() => {
    jest.spyOn(routeData, 'useParams').mockReturnValue({ id: userDetailsData[0]?.id });
  });

  it('should render user details correctly', async () => {
    render(<UserDetails />);

    await waitForElementToBeRemoved(() => screen.getByTestId('spinner'));

    const userName = await screen.findByText(userDetailsData[0]?.id as string);

    await act(async () => {
      expect(userName).toBeInTheDocument();
    });
  });

  it('should render error handle correctly', async () => {
    server.use(rest.get(`*${USER_DETAILS}`, (_req, res, ctx) => res(ctx.status(400))));

    render(<UserDetails />);
    await waitForElementToBeRemoved(() => screen.getByTestId('spinner'));

    const refreshMessage = await screen.findByText('Try to refresh');
    expect(refreshMessage).toBeInTheDocument();
  });

  describe('Modal tests', () => {
    it('should not render the save button if no changes are made', async () => {
      render(<UserDetails />);

      await waitForElementToBeRemoved(() => screen.getByTestId('spinner'));

      expect(screen.queryByText('Edit user details')).not.toBeInTheDocument();

      const editButton = screen.queryByRole('button', { name: 'Edit' });
      fireEvent.click(editButton as Element);

      expect(screen.queryByText('Edit user details')).toBeInTheDocument();
      expect(screen.queryByText('Save')).not.toBeInTheDocument();
    });

    it('check if the User Details modal is hidden by default and if it is visible after clicking on the button, and hidden after click cancel button', async () => {
      render(<UserDetails />);

      await waitForElementToBeRemoved(() => screen.getByTestId('spinner'));

      expect(screen.getByText(userDetailsData[0]?.budget as number)).toBeInTheDocument();
      expect(screen.queryByText('Edit user details')).not.toBeInTheDocument();

      const editButton = screen.queryByRole('button', { name: 'Edit' });
      fireEvent.click(editButton as Element);

      expect(screen.queryByText('Edit user details')).toBeInTheDocument();

      const budgetInput = screen.getByRole('spinbutton', { name: 'Budget' });
      fireEvent.change(budgetInput, { target: { value: '11000' } });

      await act(async () => {
        expect(screen.getByRole('spinbutton', { name: 'Budget' })).toHaveValue('11000');
      });

      const cancelButton = screen.getByRole('button', { name: 'Cancel' });
      fireEvent.click(cancelButton);

      expect(screen.queryByText('Edit user details')).not.toBeVisible();
      expect(await screen.findByText('Edit user details')).toBeInTheDocument();
    });

    it('check if can edit User Detais Form, save and then see if changes appears', async () => {
      render(<UserDetails />);

      const mockUrl = jest.fn();
      const mockBody = jest.fn();
      server.events.on('request:end', (req) => {
        mockBody(req.body);
        mockUrl(req.url.href);
      });

      await waitForElementToBeRemoved(() => screen.getByTestId('spinner'));

      expect(screen.getByText(userDetailsData[0]?.budget as number)).toBeInTheDocument();
      expect(screen.queryByText('Edit user details')).not.toBeInTheDocument();

      const editButton = screen.queryByRole('button', { name: 'Edit' });
      fireEvent.click(editButton as Element);

      expect(screen.queryByText('Edit user details')).toBeInTheDocument();

      const budgetInput = screen.getByRole('spinbutton', { name: 'Budget' });
      fireEvent.change(budgetInput, { target: { value: '15000' } });

      await act(async () => {
        expect(screen.getByRole('spinbutton', { name: 'Budget' })).toHaveValue('15000');
      });

      const saveButton = screen.getByRole('button', { name: 'Save' });
      fireEvent.click(saveButton);

      await waitFor(() => {
        expect(mockBody).toBeCalledWith({ timezone: userDetailsData[0]?.timezone as string, budget: 15000 });
      });

      const expectedUrl = generatePath(USER_DETAILS, {
        id: userDetailsData[0]?.id
      });

      expect(mockUrl).toHaveBeenCalledWith(expect.stringContaining(expectedUrl));

      expect(await screen.findByText('15000')).toBeInTheDocument();
      expect(screen.queryByText('Edit user details')).not.toBeInTheDocument();
    });
  });
});
