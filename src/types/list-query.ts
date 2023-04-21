import { OrderDirection } from 'enums';

export type ListQuery = {
  searchText?: string;
  pagination: {
    current: number;
    pageSize: number;
    pageSizeOptions?: string[] | number[];
  };
  sorting?: {
    order: OrderDirection;
    field: string;
  };
  start_date?: Date;
  end_date?: Date;
  filter?: {
    [key: string]: string;
  };
};
