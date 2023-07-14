import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Pagination, Spin, Table } from 'antd';
import { OrderDirection } from 'enums';
import { useListQuery, usePaginationHelpers } from 'hooks';
import ContentWrapper from 'components/common/content-wrapper/content-wrapper';
import { ReactComponent as ExpandIcon } from 'assets/icons/expand-icon.svg';
import { MovieListHeader, MovieListEditForm, MovieListDetails } from './components';
import { useFetchMovieList } from './movie-list.hooks';
import { PaginationWrapper, TableWrapper, ExpandSwitch } from './movie-list.styled';
import { useColumns } from './movie-list.columns';
import { today, yesterday } from './movie-list.constants';

export const MovieList = (): JSX.Element => {
  const [isSidebarVisible, setIsSidebarVisible] = useState<boolean>(false);
  const [selectedMovieId, setSelectedMovieId] = useState<string>('');

  const { t } = useTranslation();

  const { listQuery, setListQuery } = useListQuery('user_id', {
    start_date: new Date('July 10, 2000 03:24:00'),
    end_date: today
  });
  const { data, isError, isLoading, refetch, isFetching } = useFetchMovieList(listQuery);

  const { handleTableChange, handlePaginationChange, handleRangeChange } = usePaginationHelpers(setListQuery);

  const handleOpenSidebar = (id: string): void => {
    setIsSidebarVisible(true);
    setSelectedMovieId(id);
  };

  const handleCloseSidebar = (): void => {
    setIsSidebarVisible(false);
  };

  const columns = useColumns(handleOpenSidebar, t);

  const initialValues = data?.movie_data.filter(({ title_id }) => title_id === selectedMovieId);

  return (
    <>
      <MovieListHeader onRangeChange={handleRangeChange} listQuery={listQuery} setListQuery={setListQuery} />
      <ContentWrapper isError={isError} refetch={refetch} isLoading={false} noData={!isLoading && isError}>
        <TableWrapper>
          <Table
            dataSource={data?.movie_data}
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
              expandedRowRender: ({ poster, details, title }) => (
                <MovieListDetails details={details} poster={poster} title={title} />
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
      <MovieListEditForm
        title_id={selectedMovieId as string}
        isSidebarVisible={isSidebarVisible}
        initialValues={{
          creator_name: initialValues?.[0]?.creator_name as string,
          title: initialValues?.[0]?.title as string
        }}
        onCloseSidebar={handleCloseSidebar}
      />
    </>
  );
};
