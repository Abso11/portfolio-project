import { useState } from 'react';
import { ListQuery } from 'types';
import { OrderDirection } from 'enums';

type UseListQuery = {
  listQuery: ListQuery;
  setListQuery: React.Dispatch<React.SetStateAction<ListQuery>>;
  defaultConfig: (field: string) => ListQuery;
  delayListQuery?: ListQuery;
};

const defaultConfig = (field: string, initialState?: Partial<ListQuery>): ListQuery => ({
  ...initialState,
  searchText: '',
  pagination: {
    current: 1,
    pageSize: initialState?.pagination?.pageSize || 10,
    pageSizeOptions: ['10', '20', '30', '40', '50']
  },
  sorting: {
    order: OrderDirection.ASC,
    field
  }
});

export const useListQuery = (field: string, initialState?: Partial<ListQuery>): UseListQuery => {
  const [listQuery, setListQuery] = useState<ListQuery>(defaultConfig(field, initialState));

  return {
    defaultConfig,
    listQuery,
    setListQuery
  };
};
