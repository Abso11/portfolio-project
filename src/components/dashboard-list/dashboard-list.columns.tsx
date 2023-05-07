import { ColumnsType } from 'antd/es/table';
import { format } from 'date-fns';
import { AntdColumnTitle } from 'components/common/antd-column-title';
import { OrderDirection } from 'enums';
import { appRoutes } from 'urls';
import { AlignType } from 'rc-table/lib/interface';
import { ReactComponent as EditIcon } from 'assets/icons/edit.svg';
import { DashboardListRes } from './dashboard-list.types';
import { StyledEditButton, StyledLink } from './dashboard-list.styled';

export const formatDate = (date: Date): string => format(new Date(date), 'dd.MM.yyyy HH:mm');

type Column = DashboardListRes['logs'][0];

export const useColumns = (handleOpenSidebar: (id: string) => void): ColumnsType<Column> => [
  {
    key: 'actions',
    align: 'left' as AlignType,
    fixed: 'left' as const,
    width: 30,
    render: (_, record) => (
      <StyledEditButton>
        <EditIcon onClick={() => handleOpenSidebar(record.user_id)} />
      </StyledEditButton>
    )
  },
  {
    title: ({ sortColumns }) => <AntdColumnTitle dataIndex='timestamp' sortColumns={sortColumns} name={'Timestamp'} />,
    dataIndex: 'timestamp',
    key: 'timestamp',
    width: 130,
    ellipsis: true,
    sorter: true,
    defaultSortOrder: OrderDirection.ASC,
    render: (value) => formatDate(value)
  },
  {
    title: ({ sortColumns }) => <AntdColumnTitle dataIndex='action' sortColumns={sortColumns} name={'Action'} />,
    dataIndex: 'action',
    key: 'action',
    width: 180,
    ellipsis: true,
    sorter: true
  },
  {
    title: 'User id',
    dataIndex: 'user_id',
    key: 'user_id',
    width: 150,
    ellipsis: true,
    render: (text: string) => <StyledLink to={appRoutes.app.dashboardDetails.replace(':id', text)}>{text}</StyledLink>
  },
  {
    title: 'User Name',
    dataIndex: 'user_name',
    key: 'user_name',
    width: 150,
    ellipsis: true
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    width: 140,
    ellipsis: true
  },
  {
    title: 'Error code',
    dataIndex: 'error_code',
    key: 'error_code',
    width: 170,
    ellipsis: true
  }
];
