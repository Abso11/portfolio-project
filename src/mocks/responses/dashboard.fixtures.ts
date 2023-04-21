import { DashboardListRes } from 'components/dashboard-list/dashboard-list.types';
import { orderBy } from 'lodash';

const today = new Date();
const todayMidnight = new Date();
todayMidnight.setHours(0, 0, 0, 0);

export const mockedDashboardList: DashboardListRes['logs'] = [
  {
    id: '1',
    timestamp: today,
    action: 'Created',
    user_id: 'user1',
    user_name: 'Pawel',
    status: 'Created',
    error_code: '123',
    details: {
      description: 'example description',
      action: 'StartTransaction',
      error: 'no error'
    }
  },
  {
    id: '2',
    timestamp: todayMidnight,
    action: 'Created',
    user_id: 'user1',
    user_name: 'Piotr',
    status: 'Created',
    error_code: '123',
    details: {
      description: 'example description',
      action: 'StartTransaction',
      error: 'no error'
    }
  },
  {
    id: '3',
    timestamp: todayMidnight,
    action: 'Created',
    user_id: 'user1',
    user_name: 'Piotr',
    status: 'Created',
    error_code: '123',
    details: {
      description: 'example description',
      action: 'StartTransaction',
      error: 'no error'
    }
  },
  {
    id: '4',
    timestamp: todayMidnight,
    action: 'Created',
    user_id: 'user1',
    user_name: 'Piotr',
    status: 'Created',
    error_code: '123',
    details: {
      description: 'example description',
      action: 'StartTransaction',
      error: 'no error'
    }
  },
  {
    id: '5',
    timestamp: todayMidnight,
    action: 'Created',
    user_id: 'user1',
    user_name: 'Piotr',
    status: 'Created',
    error_code: '123',
    details: {
      description: 'example description',
      action: 'StartTransaction',
      error: 'no error'
    }
  },
  {
    id: '6',
    timestamp: todayMidnight,
    action: 'Created',
    user_id: 'user1',
    user_name: 'Piotr',
    status: 'Created',
    error_code: '123',
    details: {
      description: 'example description',
      action: 'StartTransaction',
      error: 'no error'
    }
  },
  {
    id: '7',
    timestamp: todayMidnight,
    action: 'Created',
    user_id: 'user1',
    user_name: 'Piotr',
    status: 'Created',
    error_code: '123',
    details: {
      description: 'example description',
      action: 'StartTransaction',
      error: 'no error'
    }
  },
  {
    id: '8',
    timestamp: todayMidnight,
    action: 'Created',
    user_id: 'user1',
    user_name: 'Piotr',
    status: 'Created',
    error_code: '123',
    details: {
      description: 'example description',
      action: 'StartTransaction',
      error: 'no error'
    }
  },
  {
    id: '9',
    timestamp: todayMidnight,
    action: 'Created',
    user_id: 'user1',
    user_name: 'Piotr',
    status: 'Created',
    error_code: '123',
    details: {
      description: 'example description',
      action: 'StartTransaction',
      error: 'no error'
    }
  },
  {
    id: '10',
    timestamp: todayMidnight,
    action: 'Created',
    user_id: 'user1',
    user_name: 'Piotr',
    status: 'Created',
    error_code: '123',
    details: {
      description: 'example description',
      action: 'StartTransaction',
      error: 'no error'
    }
  },
  {
    id: '11',
    timestamp: todayMidnight,
    action: 'Created',
    user_id: 'user1',
    user_name: 'Piotr',
    status: 'Created',
    error_code: '123',
    details: {
      description: 'example description',
      action: 'StartTransaction',
      error: 'no error'
    }
  }
];

export const sortedByDefaultOcppLogs = orderBy(mockedDashboardList, 'timestamp', 'asc');
