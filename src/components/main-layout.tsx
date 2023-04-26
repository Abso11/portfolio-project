import { ToastContainer } from 'react-toastify';
import { PageContent, Navigation } from '../layout';
import 'react-toastify/dist/ReactToastify.css';

const MainLayout = (): JSX.Element => (
  <>
    <Navigation />
    <PageContent />
    <ToastContainer position='bottom-left' />
  </>
);

export default MainLayout;
