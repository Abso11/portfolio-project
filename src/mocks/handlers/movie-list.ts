import { rest } from 'msw';
import orderBy from 'lodash.orderby';
import { sortBy, uniqBy } from 'lodash';
import apiPaths from 'utils/api-paths';
import { mockedMovieList } from 'mocks/responses/movie-list.fixtures';
import { MovieListHintsRes, MovieListRes, UpdateMovieListReq } from 'components/movie-list/movie-list.types';

const {
  APP: { MOVIE_LIST, MOVIE_LIST_HINTS }
} = apiPaths;

export const movieListHandler = [
  rest.get(`*${MOVIE_LIST}`, (req, res, ctx) => {
    const skip = req.url.searchParams.get('skip');
    const take = req.url.searchParams.get('take');
    const sortOrder = req.url.searchParams.get('sort_order');
    const sortField = req.url.searchParams.get('sort_field');
    const startDate = req.url.searchParams.get('start_date');
    const endDate = req.url.searchParams.get('end_date');
    const filter = req.url.searchParams.get('filter');

    if (!take) {
      return res(ctx.status(400), ctx.json({ errorMessage: 'Take is required' }));
    }

    if (!skip) {
      return res(ctx.status(400), ctx.json({ errorMessage: 'Skip is required' }));
    }

    let movieList: MovieListRes['movie_data'] = [];

    if (sortOrder && sortField) {
      movieList = orderBy(mockedMovieList, [sortField], sortOrder === 'desc' ? 'desc' : 'asc');
    }

    if (startDate && endDate) {
      movieList = movieList.filter(({ released }) => released >= new Date(startDate) && released <= new Date(endDate));
    }

    if (filter) {
      const parsedFilter = JSON.parse(filter || '');
      if (parsedFilter.title_id) {
        movieList = movieList.filter((item) => item.title_id.toLowerCase() === parsedFilter.title_id.toLowerCase());
      }

      if (parsedFilter.status) {
        movieList = movieList.filter((item) => item.status?.toLowerCase() === parsedFilter.status.toLowerCase());
      }

      if (parsedFilter.title) {
        movieList = movieList.filter((item) => item.title?.toLowerCase() === parsedFilter.title.toLowerCase());
      }

      if (parsedFilter.creator_name) {
        movieList = movieList.filter(
          (item) => item.creator_name?.toLowerCase() === parsedFilter.creator_name.toLowerCase()
        );
      }
    }

    const response: MovieListRes = {
      records_count: movieList.length,
      movie_data: movieList.slice(Number(skip), Number(skip) + Number(take))
    };

    return res(ctx.delay(300), ctx.status(200), ctx.json(response));
  }),

  rest.patch(`*${MOVIE_LIST}`, (req, res, ctx) => {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    const { title_id } = req.body as UpdateMovieListReq;
    const existingMovieIndex = mockedMovieList.findIndex((item) => item.title_id === title_id);

    const existingMovie = mockedMovieList[existingMovieIndex];

    if (!title_id) {
      return res(ctx.status(400), ctx.json({ errorMessage: 'ID is required' }));
    }

    if (!existingMovie) {
      return res(ctx.status(404), ctx.json({ errorMessage: 'Movie with that id does not exists' }));
    }

    const updatedMovie = {
      ...existingMovie,
      ...(req.body as UpdateMovieListReq)
    };

    mockedMovieList[existingMovieIndex] = updatedMovie;

    return res(ctx.status(200), ctx.json(updatedMovie));
  }),

  rest.get(`*${MOVIE_LIST_HINTS}`, (req, res, ctx) => {
    const searchText = req.url.searchParams.get('search_text')!.toLowerCase();

    let response: MovieListHintsRes = [];

    const filterableKeys = ['title', 'title_id', 'status', 'creator_name'];
    mockedMovieList.forEach((movieData) => {
      Object.entries(movieData).forEach(([key, value]) => {
        if (filterableKeys.includes(key) && `${value}`.toLowerCase().includes(searchText)) {
          response.push({
            key,
            value: value.toString()
          });
        }
      });
    });

    response = sortBy(uniqBy(response, 'value'), 'value');

    return res(ctx.delay(200), ctx.status(200), ctx.json(response));
  })
];
