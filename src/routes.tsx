import { useParams } from 'react-router';
import { BrowserRouter, Routes as ReactRoutes, Route, Navigate } from 'react-router-dom';
import { MainLayout } from 'layout';
import { MovieListPage, Page404, MovieDetailsPage } from 'views';
import { appRoutes } from 'urls';

type PagePathTypes = {
  pagePath: string;
};

const RedirectToDetailsPage = ({ pagePath }: PagePathTypes): JSX.Element => {
  const { id } = useParams();
  return <Navigate to={pagePath.replace(':id', id as string)} />;
};

const Routes = (): JSX.Element => (
  <BrowserRouter>
    <ReactRoutes>
      <Route path={''} element={<MainLayout />}>
        <Route path={appRoutes.app.movies} element={<Navigate to={'/'} />} />
        <Route index element={<MovieListPage />} />
        <Route path={appRoutes.app.movieDetails} element={<MovieDetailsPage />} />
        <Route
          path={`${appRoutes.app.movies}/:id`}
          element={<RedirectToDetailsPage pagePath={appRoutes.app.movieDetails} />}
        />
      </Route>
      <Route path='*' element={<Page404 />} />
    </ReactRoutes>
  </BrowserRouter>
);

export default Routes;
