import { act, fireEvent, render, screen, waitFor, waitForElementToBeRemoved, within } from 'tests';
import userEvent from '@testing-library/user-event';
import { uniqBy } from 'lodash';
import jest from 'jest-mock';
import { rest } from 'msw';
import { server } from 'mocks';
import apiPaths from 'utils/api-paths';
import { mockedDashboardList } from 'mocks/responses';
import { DashboardList, DashboardListRes } from '.';

const columnTitles = ['Timestamp', 'Action', 'User id', 'User Name', 'Status', 'Error code'];

const {
  DASHBOARD: { TEST }
} = apiPaths;

describe('Dashboard List', () => {
  describe('Common', () => {
    it('should render basic elements', async () => {
      render(<DashboardList />);
      await waitForElementToBeRemoved(() => screen.getByTestId('spinner'));

      const table = screen.getByRole('table');
      expect(table).toBeInTheDocument();
    });

    it('should render all table columns', async () => {
      render(<DashboardList />);
      await waitForElementToBeRemoved(() => screen.getByTestId('spinner'));

      columnTitles.forEach((title) => {
        expect(screen.getByRole('columnheader', { name: title })).toBeInTheDocument();
      });
    });

    it('should not render correctlyy', async () => {
      server.use(rest.get(`*${TEST}`, (_req, res, ctx) => res(ctx.status(400))));
      render(<DashboardList />);

      const refreshMessage = await screen.findByText('Try to refresh');
      expect(refreshMessage).toBeInTheDocument();
    });

    describe('Pagination', () => {
      it('check if changing page is working', async () => {
        render(<DashboardList />);
        await waitForElementToBeRemoved(() => screen.getByTestId('spinner'));

        const logFromSecondPage = mockedDashboardList[11];
        expect(screen.queryByText(logFromSecondPage?.user_id as string)).not.toBeInTheDocument();

        const secondPageButton = screen.getByRole('listitem', { name: '2' });
        fireEvent.click(secondPageButton);

        const mockUrl = jest.fn();
        const mockParams = jest.fn();
        server.events.on('request:end', (req) => {
          mockUrl(req.url.href);
          mockParams(req.url.search);
        });

        await waitFor(() => expect(mockUrl).toHaveBeenCalledWith(expect.stringContaining('test')));
        expect(mockParams).toHaveBeenCalledWith(expect.stringContaining('skip=10'));
        expect(await screen.findByText(logFromSecondPage?.user_id as string)).toBeInTheDocument();
      });
    });

    it('check if the text is visible after choose 20 / page', async () => {
      render(<DashboardList />);
      await waitForElementToBeRemoved(() => screen.getByTestId('spinner'));

      expect(screen.queryByText('user12')).not.toBeInTheDocument();

      const sizeChanger = await screen.findByText('10 per page');

      await userEvent.click(sizeChanger);

      const mockUrl = jest.fn();
      const mockParams = jest.fn();
      server.events.on('request:end', (req) => {
        mockUrl(req.url.href);
        mockParams(req.url.search);
      });

      const sizeChanger2 = await screen.findByText('20 per page');

      await act(async () => {
        await waitFor(() => fireEvent.click(sizeChanger2));
      });

      await waitFor(() => expect(mockUrl).toHaveBeenCalledWith(expect.stringContaining('test')));
      expect(mockParams).toHaveBeenCalledWith(expect.stringContaining('take=20'));

      expect(await screen.findByText('user12')).toBeInTheDocument();
    });
  });

  describe('Searchbar/Filter component', () => {
    it('should render basic elements', async () => {
      render(<DashboardList />);

      const dashboardListSearchbar = screen.getByRole('searchbar');
      expect(dashboardListSearchbar).toBeInTheDocument();
    });

    it('should render suggested Action filter', async () => {
      render(<DashboardList />);

      await waitFor(() =>
        fireEvent.change(screen.getByRole('searchbar'), { target: { value: mockedDashboardList[0]?.action } })
      );

      await waitFor(() => fireEvent.keyDown(screen.getByRole('searchbar'), { key: 'Enter', keyCode: 13 }));

      const getSelectedActions = (action: string): DashboardListRes['logs'] =>
        uniqBy(
          mockedDashboardList.filter((item) => item.action === action),
          'action'
        );
      await waitForElementToBeRemoved(() => screen.getByTestId('spinner'));
      const dashboardHintsList = await screen.findByTestId('dashboard-list-hints');

      const suggestedSearchedActionNames = await within(dashboardHintsList).findAllByText(
        mockedDashboardList[0]?.action as string
      );
      expect(suggestedSearchedActionNames.length).toBe(
        getSelectedActions(mockedDashboardList[0]?.action as string).length
      );
    });

    it('should render suggested User ID filter', async () => {
      render(<DashboardList />);

      await waitFor(() =>
        fireEvent.change(screen.getByRole('searchbar'), { target: { value: mockedDashboardList[0]?.user_id } })
      );

      await waitFor(() => fireEvent.keyDown(screen.getByRole('searchbar'), { key: 'Enter', keyCode: 13 }));

      const getSelectedUserIds = (userId: string): DashboardListRes['logs'] =>
        uniqBy(
          mockedDashboardList.filter((item) => item.user_id === userId),
          'user_id'
        );

      await waitForElementToBeRemoved(() => screen.getByTestId('spinner'));
      const dashboardHintsList = await screen.findByTestId('dashboard-list-hints');

      const suggestedUserIds = await within(dashboardHintsList).findAllByText(
        mockedDashboardList[0]?.user_id as string
      );

      expect(suggestedUserIds.length).toBe(getSelectedUserIds(mockedDashboardList[0]?.user_id as string).length);
    });

    it('should render suggested Status filter', async () => {
      render(<DashboardList />);

      await waitFor(() =>
        fireEvent.change(screen.getByRole('searchbar'), { target: { value: mockedDashboardList[0]?.status } })
      );

      await waitFor(() => fireEvent.keyDown(screen.getByRole('searchbar'), { key: 'Enter', keyCode: 13 }));

      const getSelectedStatuses = (status: string): DashboardListRes['logs'] =>
        uniqBy(
          mockedDashboardList.filter((item) => item.status === status),
          'status'
        );
      await waitForElementToBeRemoved(() => screen.getByTestId('spinner'));
      const dashboardHintsList = await screen.findByTestId('dashboard-list-hints');

      const suggestedSearchedStatuses = await within(dashboardHintsList).findAllByText(
        mockedDashboardList[0]?.status as string
      );
      expect(suggestedSearchedStatuses.length).toBe(
        getSelectedStatuses(mockedDashboardList[0]?.status as string).length
      );
    });

    it('should refresh data with proper request after changing filter', async () => {
      render(<DashboardList />);

      const mockUrl = jest.fn();
      const mockParams = jest.fn();
      server.events.on('request:end', (req) => {
        mockUrl(req.url.href);
        mockParams(req.url.search);
      });

      await waitFor(() =>
        fireEvent.change(screen.getByRole('searchbar'), { target: { value: mockedDashboardList[0]?.action } })
      );

      await waitFor(() => fireEvent.keyDown(screen.getByRole('searchbar'), { key: 'Enter', keyCode: 13 }));

      await waitForElementToBeRemoved(() => screen.getByTestId('spinner'));
      const suggestedSearchedActionNames = await screen.findAllByTestId('dashboard-list-hints');
      await userEvent.click(suggestedSearchedActionNames[0] as Element);

      await waitFor(() =>
        expect(mockUrl).toHaveBeenCalledWith(expect.stringContaining(apiPaths.DASHBOARD.DASHBOARD_LIST_HINTS))
      );
      expect(mockParams).toHaveBeenCalledWith(
        expect.stringContaining(`filter[action]=${mockedDashboardList[0]?.action}`)
      );
      expect(mockParams).toHaveBeenCalledWith(expect.stringContaining(`search_text=${mockedDashboardList[0]?.action}`));

      const table = screen.getByRole('table');

      const getSelectedActions = (action: string): DashboardListRes['logs'] =>
        mockedDashboardList.filter((item) => item.action === action);

      const searchedActions = await within(table).findAllByText(mockedDashboardList[0]?.action as string);
      expect(searchedActions.length).toBe(getSelectedActions(mockedDashboardList[0]?.action as string).length);
    });
  });
});
