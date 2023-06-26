import { ChangeEvent, Dispatch, SetStateAction } from 'react';
import { TablePaginationConfig } from 'antd';
import { FilterValue } from 'antd/lib/table/interface';
import { ListQuery } from 'types';

type UsePaginationHelpers = {
  handleChangeSearch: (event: ChangeEvent<HTMLInputElement>) => void;
  handleTableChange: (pagination: TablePaginationConfig, _: Record<string, FilterValue | null>, sorter: any) => void;
  handleOnSizeChange: (current: number, size: number) => void;
  handlePaginationChange: (page: number, pageSize: number) => void;
  handleOnSearch: () => void;
  handleRangeChange: (startDate: Date, endDate: Date) => void;
};

export const usePaginationHelpers = (
  setListQuery?: Dispatch<SetStateAction<ListQuery>>,
  customSearchValue?: string
): UsePaginationHelpers => {
  const handleChangeSearch = (e: ChangeEvent<HTMLInputElement>): void => {
    setListQuery?.((prev) => ({
      ...prev,
      searchText: customSearchValue || e.target.value,
      pagination: {
        ...prev.pagination,
        current: 1
      }
    }));
  };

  // searchOnEnter
  const handleOnSearch = (): void => {
    setListQuery?.((prev) => ({
      ...prev,
      searchText: customSearchValue,
      pagination: {
        ...prev.pagination,
        current: 1
      }
    }));
  };

  const handleTableChange = (
    pagination: TablePaginationConfig,
    _: Record<string, FilterValue | null>,
    sorter: any
  ): void => {
    setListQuery?.((prev) => ({
      ...prev,
      pagination: {
        current: pagination.current || 1,
        pageSize: pagination.pageSize || 10,
        pageSizeOptions: pagination.pageSizeOptions
      },
      sorting: {
        field: sorter.field,
        order: sorter.order
      }
    }));
  };

  const handleOnSizeChange = (current: number, size: number): void => {
    setListQuery?.((prev) => ({
      ...prev,
      pagination: {
        ...prev.pagination,
        current,
        pageSizeOptions: [size]
      }
    }));
  };

  const handlePaginationChange = (page: number, pageSize: number): void => {
    setListQuery?.((prev) => ({
      ...prev,
      pagination: {
        current: page,
        pageSize
      }
    }));
  };

  const handleRangeChange = (start_date: Date, end_date: Date): void => {
    setListQuery?.((prev) => ({
      ...prev,
      pagination: {
        ...prev.pagination,
        current: 1
      },
      start_date,
      end_date
    }));
  };

  return {
    handleChangeSearch,
    handleTableChange,
    handleOnSizeChange,
    handlePaginationChange,
    handleOnSearch,
    handleRangeChange
  };
};
