export type DashBoardListReqFilter = {
  [key in 'action' | 'user_id' | 'status']: string;
};

export type DashboardListReq = {
  sort_field: 'timestamp' | 'action' | 'site_name';
  sort_order: 'asc' | 'desc';
  skip: number;
  take: number;
  start_date: Date;
  end_date: Date;
  filter?: DashBoardListReqFilter;
};

export type DashboardListRes = {
  logs: {
    id: string;
    timestamp: Date;
    action: string;
    user_id: string;
    user_name: string;
    status?: string;
    error_code?: string;
    details: {
      [key: string]: string;
    };
  }[];
  records_count: number;
};

export type DashboardListHintsReq = {
  start_date: Date;
  end_date: Date;
  search_text: string;
};

export type DashBoardListHintsRes = {
  value: string;
  key: string;
}[];

export type DashboardListSortableFields = 'timestamp' | 'action' | 'site_name';

export type UpdateDashboardListReq = {
  action: string;
  user_name: string;
  user_id: string;
};
