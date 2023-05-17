import { useParams } from 'react-router';
import { BrowserRouter, Routes as ReactRoutes, Route, Navigate } from 'react-router-dom';
import { MainLayout } from 'layout';
import { Dashboard, Page404, UserData } from 'views';
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
        <Route path={appRoutes.app.dashboard} element={<Navigate to={'/'} />} />
        <Route index element={<Dashboard />} />
        <Route path={appRoutes.app.dashboardDetails} element={<UserData />} />
        <Route
          path={`${appRoutes.app.dashboard}/:id`}
          element={<RedirectToDetailsPage pagePath={appRoutes.app.dashboardDetails} />}
        />
      </Route>
      <Route path='*' element={<Page404 />} />
    </ReactRoutes>
  </BrowserRouter>
);

export default Routes;
