import ContentWrapper from 'components/common/content-wrapper';
import { Pagination, Table } from 'antd';
import { OrderDirection } from 'enums';
import { useListQuery } from 'hooks';
import { usePaginationHelpers } from 'hooks/use-pagination-helpers';
import Spinner from 'components/common/spinner';
import { useFetchDashboardList } from './dashboard-list.hooks';
import { PaginationWrapper, TableWrapper } from './dashboard-list.styled';
import { columns } from './dashboard-list.columns';
import { today, yesterday } from './dashboard-list.constants';

export const DashboardList = (): JSX.Element => {
  const { listQuery, setListQuery } = useListQuery('timestamp', {
    start_date: yesterday,
    end_date: today
  });
  const { data, isError, isLoading, refetch, isFetching } = useFetchDashboardList(listQuery);

  const { handleTableChange, handlePaginationChange } = usePaginationHelpers(setListQuery);

  return (
    <ContentWrapper isError={isError} refetch={refetch} isLoading={false} noData={!isLoading && isError}>
      <TableWrapper>
        <Table
          dataSource={data?.logs}
          columns={columns}
          sortDirections={[OrderDirection.ASC, OrderDirection.DESC, OrderDirection.ASC]}
          showSorterTooltip={false}
          onChange={handleTableChange}
          loading={{
            spinning: isFetching,
            indicator: <Spinner />
          }}
          rowKey={(row) => row.id}
          pagination={false}
          rowClassName={(_, index) => (index % 2 ? 'even' : 'odd')}
          scroll={{ x: 1500 }}
        />
        <PaginationWrapper>
          <Pagination
            disabled={isFetching}
            total={data?.records_count}
            current={listQuery.pagination.current}
            pageSize={listQuery.pagination.pageSize}
            showSizeChanger={true}
            pageSizeOptions={listQuery.pagination.pageSizeOptions}
            locale={{ items_per_page: 'per page' }}
            onChange={handlePaginationChange}
          />
        </PaginationWrapper>
      </TableWrapper>
    </ContentWrapper>
  );
};
