// import { useParams } from 'react-router';
import { BrowserRouter, Routes as ReactRoutes, Route, Navigate } from 'react-router-dom';
import MainLayout from 'components/main-layout';
import { Dashboard } from 'views';
import { UserDetails } from 'views/user-details';

// type PagePathTypes = {
//   pagePath: string;
// };

// const RedirectToDetailsPage = ({ pagePath }: PagePathTypes): JSX.Element => {
//   const { id } = useParams();
//   return <Navigate to={pagePath.replace(':id', id as string)} />;
// };

const Routes = (): JSX.Element => (
  <BrowserRouter>
    <ReactRoutes>
      <Route path={''} element={<MainLayout />}>
        <Route path='/dashboard' element={<Navigate to={'/'} />} />
        <Route index element={<Dashboard />} />
        <Route path={'/userdetails'} element={<UserDetails />} />
      </Route>
    </ReactRoutes>
  </BrowserRouter>
);

export default Routes;
