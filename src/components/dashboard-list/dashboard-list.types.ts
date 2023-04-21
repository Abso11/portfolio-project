export type DashboardListReq = {
  sort_field: 'timestamp' | 'action' | 'site_name';
  sort_order: 'asc' | 'desc';
  skip: number;
  take: number;
  start_date: Date;
  end_date: Date;
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

export type DashboardListSortableFields = 'timestamp' | 'action' | 'site_name';
