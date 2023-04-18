import { Outlet } from 'react-router-dom';
import { PageContentWrapper } from './page-content.styled';

export const PageContent = (): JSX.Element => (
  <>
    <PageContentWrapper>
      <Outlet />
    </PageContentWrapper>
  </>
);
