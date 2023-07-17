import userEvent from '@testing-library/user-event';
import { uniqBy } from 'lodash';
import { rest } from 'msw';
import { server } from 'mocks';
import { act, fireEvent, render, screen, waitFor, waitForElementToBeRemoved, within } from 'tests';
import apiPaths from 'utils/api-paths';
import { mockedMovieList } from 'mocks/responses';
import { MovieList, MovieListRes } from '.';

const columnTitles = ['Released', 'Title', 'Title ID', 'Creators', 'Status', 'IMDB ID'];

const {
  APP: { MOVIE_LIST }
} = apiPaths;

describe('Movie List', () => {
  describe('Common', () => {
    it('should render basic elements', async () => {
      render(<MovieList />);
      await waitForElementToBeRemoved(() => screen.getByTestId('spinner'));

      const table = screen.getByRole('table');
      expect(table).toBeInTheDocument();

      const startDatePicker = screen.getByPlaceholderText('Start date');
      expect(startDatePicker).toBeInTheDocument();

      const endDatePicker = screen.getByPlaceholderText('End date');
      expect(endDatePicker).toBeInTheDocument();
    });

    it('should render all table columns', async () => {
      render(<MovieList />);
      await waitForElementToBeRemoved(() => screen.getByTestId('spinner'));

      columnTitles.forEach((title) => {
        expect(screen.getByRole('columnheader', { name: title })).toBeInTheDocument();
      });
    });

    it('should not render correctly', async () => {
      server.use(rest.get(`*${MOVIE_LIST}`, (_req, res, ctx) => res(ctx.status(400))));
      render(<MovieList />);

      const refreshMessage = await screen.findByText('Try to refresh');
      expect(refreshMessage).toBeInTheDocument();
    });
  });

  describe('Pagination', () => {
    it('check if changing page is working', async () => {
      render(<MovieList />);
      await waitForElementToBeRemoved(() => screen.getByTestId('spinner'));

      const movieFromSecondPage = mockedMovieList[11];
      expect(screen.queryByText(movieFromSecondPage?.title_id as string)).not.toBeInTheDocument();

      const secondPageButton = screen.getByRole('listitem', { name: '2' });
      fireEvent.click(secondPageButton);

      const mockUrl = jest.fn();
      const mockParams = jest.fn();
      server.events.on('request:end', (req) => {
        mockUrl(req.url.href);
        mockParams(req.url.search);
      });

      await waitFor(() => expect(mockUrl).toHaveBeenCalledWith(expect.stringContaining(apiPaths.APP.MOVIE_LIST)));
      expect(mockParams).toHaveBeenCalledWith(expect.stringContaining('skip=10'));
      expect(await screen.findByText(movieFromSecondPage?.title_id as string)).toBeInTheDocument();
    });

    it('check if the text is visible after choose 20 / page', async () => {
      render(<MovieList />);
      await waitForElementToBeRemoved(() => screen.getByTestId('spinner'));

      expect(screen.queryByText('The Last of Us')).not.toBeInTheDocument();

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

      await waitFor(() => expect(mockUrl).toHaveBeenCalledWith(expect.stringContaining(apiPaths.APP.MOVIE_LIST)));
      expect(mockParams).toHaveBeenCalledWith(expect.stringContaining('take=20'));

      expect(await screen.findByText('The Last of Us')).toBeInTheDocument();
    });
  });

  describe('Searchbar/Filter component', () => {
    it('should render basic elements', async () => {
      render(<MovieList />);

      const movieListSearchbar = screen.getByRole('searchbar');
      expect(movieListSearchbar).toBeInTheDocument();
    });

    it('should render suggested Title filter', async () => {
      render(<MovieList />);

      await waitFor(() =>
        fireEvent.change(screen.getByRole('searchbar'), { target: { value: mockedMovieList[0]?.title } })
      );

      await waitFor(() => fireEvent.keyDown(screen.getByRole('searchbar'), { key: 'Enter', keyCode: 13 }));

      const getSelectedTitles = (title: string): MovieListRes['movie_data'] =>
        uniqBy(
          mockedMovieList.filter((item) => item.title === title),
          'title'
        );
      await waitForElementToBeRemoved(() => screen.getByTestId('spinner'));
      const movieHintsList = await screen.findByTestId('movie-list-hints');

      const suggestedSearchedTitles = await within(movieHintsList).findAllByText(mockedMovieList[0]?.title as string);
      expect(suggestedSearchedTitles.length).toBe(getSelectedTitles(mockedMovieList[0]?.title as string).length);
    });

    it('should render suggested Title ID filter', async () => {
      render(<MovieList />);

      await waitFor(() =>
        fireEvent.change(screen.getByRole('searchbar'), { target: { value: mockedMovieList[0]?.title_id } })
      );

      await waitFor(() => fireEvent.keyDown(screen.getByRole('searchbar'), { key: 'Enter', keyCode: 13 }));

      const getSelectedTitleIds = (titleId: string): MovieListRes['movie_data'] =>
        uniqBy(
          mockedMovieList.filter((item) => item.title_id === titleId),
          'title_id'
        );

      await waitForElementToBeRemoved(() => screen.getByTestId('spinner'));
      const movieHintsList = await screen.findByTestId('movie-list-hints');

      const suggestedSearchedTitleIds = await within(movieHintsList).findAllByText(
        mockedMovieList[0]?.title_id as string
      );
      expect(suggestedSearchedTitleIds.length).toBe(getSelectedTitleIds(mockedMovieList[0]?.title_id as string).length);
    });

    it('should render suggested Status filter', async () => {
      render(<MovieList />);

      await waitFor(() =>
        fireEvent.change(screen.getByRole('searchbar'), { target: { value: mockedMovieList[0]?.status } })
      );

      await waitFor(() => fireEvent.keyDown(screen.getByRole('searchbar'), { key: 'Enter', keyCode: 13 }));

      const getSelectedStatuses = (status: string): MovieListRes['movie_data'] =>
        uniqBy(
          mockedMovieList.filter((item) => item.status === status),
          'status'
        );
      await waitForElementToBeRemoved(() => screen.getByTestId('spinner'));
      const movieHintsList = await screen.findByTestId('movie-list-hints');

      const suggestedSearchedStatuses = await within(movieHintsList).findAllByText(
        mockedMovieList[0]?.status as string
      );
      expect(suggestedSearchedStatuses.length).toBe(getSelectedStatuses(mockedMovieList[0]?.status as string).length);
    });

    it('should refresh data with proper request after changing filter', async () => {
      render(<MovieList />);

      const mockUrl = jest.fn();
      const mockParams = jest.fn();
      server.events.on('request:end', (req) => {
        mockUrl(req.url.href);
        mockParams(req.url.search);
      });

      await waitFor(() =>
        fireEvent.change(screen.getByRole('searchbar'), { target: { value: mockedMovieList[0]?.title } })
      );

      await waitFor(() => fireEvent.keyDown(screen.getByRole('searchbar'), { key: 'Enter', keyCode: 13 }));

      await waitForElementToBeRemoved(() => screen.getByTestId('spinner'));
      const suggestedSearchedTitles = await screen.findAllByTestId('movie-list-hints');
      await userEvent.click(suggestedSearchedTitles[0] as Element);

      await waitFor(() => expect(mockUrl).toHaveBeenCalledWith(expect.stringContaining(apiPaths.APP.MOVIE_LIST)));
      expect(mockParams).toHaveBeenCalledWith(
        expect.stringContaining(`filter=%7B%22title%22:%22${mockedMovieList[0]?.title}%22%7D`)
      );
      expect(mockParams).toHaveBeenCalledWith(expect.stringContaining(`search_text=${mockedMovieList[0]?.title}`));

      const table = screen.getByRole('table');

      const getSelectedActions = (title: string): MovieListRes['movie_data'] =>
        mockedMovieList.filter((item) => item.title === title);

      const searchedTitles = await within(table).findAllByText(mockedMovieList[0]?.title as string);
      expect(searchedTitles.length).toBe(getSelectedActions(mockedMovieList[0]?.title as string).length);
    });
  });
});
