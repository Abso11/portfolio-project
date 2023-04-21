import { ListQuery } from 'types';
import { OrderDirection } from 'enums';

type UsePaginationConfig = {
  searchText?: string;
  skip: number;
  take: number;
  sortField: string;
  sortOrder: OrderDirection;
  sites_ids?: string[];
  startDate?: Date;
  endDate?: Date;
  filter?: {
    [key: string]: string;
  };
};

export const usePaginationConfig = (listQuery: ListQuery): UsePaginationConfig => {
  const { searchText } = listQuery;
  const skip = listQuery.pagination.current * listQuery.pagination.pageSize - listQuery.pagination.pageSize;
  const take = listQuery.pagination.pageSize;
  const sortField = listQuery?.sorting?.field;
  const sortOrder = listQuery?.sorting?.order;
  const startDate = listQuery?.start_date;
  const endDate = listQuery?.end_date;
  const filter = listQuery?.filter;

  return {
    skip,
    take,
    sortField: sortField || '',
    sortOrder: sortOrder || OrderDirection.ASC,
    searchText,
    startDate,
    endDate,
    filter
  };
};
