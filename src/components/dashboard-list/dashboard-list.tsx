import ContentWrapper from 'components/common/content-wrapper';
import { useFetchDashboardList } from './dashboard-list.hooks';

const DashboardList = (): JSX.Element => {
  const { data, isError, isLoading, refetch, isFetching } = useFetchDashboardList();

  return (
    <ContentWrapper isError={isError} refetch={refetch} isLoading={isFetching} noData={!isLoading && isError}>
      <p>{data && data.test}</p>
    </ContentWrapper>
  );
};

export default DashboardList;
