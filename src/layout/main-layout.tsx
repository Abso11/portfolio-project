import { ToastContainer } from 'react-toastify';
import { PageContent } from './page-content';
import { Navigation } from './navigation';
import 'react-toastify/dist/ReactToastify.css';

export const MainLayout = (): JSX.Element => (
  <>
    <Navigation />
    <PageContent />
    <ToastContainer position='bottom-left' />
  </>
);
