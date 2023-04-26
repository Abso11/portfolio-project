import { fireEvent, render, screen, waitFor, waitForElementToBeRemoved } from 'tests';
import jest from 'jest-mock';
import { rest } from 'msw';
import { server } from 'mocks';
import apiPaths from 'utils/api-paths';
import { mockedDashboardList } from 'mocks/responses';
import { DashboardList } from '.';

const columnTitles = ['Timestamp', 'Action', 'User id', 'User Name', 'Status', 'Error code'];

const {
  DASHBOARD: { TEST }
} = apiPaths;

describe('OCPP Logs', () => {
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
  });
});