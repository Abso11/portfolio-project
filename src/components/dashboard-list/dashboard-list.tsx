import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Pagination, Spin, Table } from 'antd';
import { OrderDirection } from 'enums';
import { useListQuery, usePaginationHelpers } from 'hooks';
import ContentWrapper from 'components/common/content-wrapper/content-wrapper';
import { ReactComponent as ExpandIcon } from 'assets/icons/expand-icon.svg';
import { DashboardListHeader, DashboardListEditForm, DashboardListDetails } from './components';
import { useFetchDashboardList } from './dashboard-list.hooks';
import { PaginationWrapper, TableWrapper, ExpandSwitch } from './dashboard-list.styled';
import { useColumns } from './dashboard-list.columns';
import { today, yesterday } from './dashboard-list.constants';

export const DashboardList = (): JSX.Element => {
  const [isSidebarVisible, setIsSidebarVisible] = useState<boolean>(false);
  const [selectedUserId, setSelectedUserId] = useState<string>('');
  const { t } = useTranslation();
  const { listQuery, setListQuery } = useListQuery('user_id', {
    start_date: new Date('July 10, 2000 03:24:00'),
    end_date: today
  });
  const { data, isError, isLoading, refetch, isFetching } = useFetchDashboardList(listQuery);

  const { handleTableChange, handlePaginationChange, handleRangeChange } = usePaginationHelpers(setListQuery);

  const handleOpenSidebar = (id: string): void => {
    setIsSidebarVisible(true);
    setSelectedUserId(id);
  };

  const handleCloseSidebar = (): void => {
    setIsSidebarVisible(false);
  };

  const columns = useColumns(handleOpenSidebar, t);

  const initialValues = data?.logs.filter(({ user_id }) => user_id === selectedUserId);

  return (
    <>
      <DashboardListHeader onRangeChange={handleRangeChange} listQuery={listQuery} setListQuery={setListQuery} />
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
              indicator: <Spin data-testid='spinner' />
            }}
            rowKey={(row) => row.id}
            pagination={false}
            rowClassName={(_, index) => (index % 2 ? 'even' : 'odd')}
            expandable={{
              expandedRowRender: ({ poster, details, action }) => (
                <DashboardListDetails details={details} poster={poster} action={action} />
              ),
              expandIcon: ({ expanded, onExpand, record }) => (
                <ExpandSwitch isExpanded={expanded} onClick={(e) => onExpand(record, e)}>
                  <ExpandIcon />
                </ExpandSwitch>
              )
            }}
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
              locale={{ items_per_page: t<string>('dashboard-list.per-page') }}
              onChange={handlePaginationChange}
            />
          </PaginationWrapper>
        </TableWrapper>
      </ContentWrapper>
      <DashboardListEditForm
        user_id={selectedUserId as string}
        isSidebarVisible={isSidebarVisible}
        initialValues={{
          user_name: initialValues?.[0]?.user_name as string,
          action: initialValues?.[0]?.action as string
        }}
        onCloseSidebar={handleCloseSidebar}
      />
    </>
  );
};
