import { orderBy } from 'lodash';
import { DashboardListRes } from 'components/dashboard-list/dashboard-list.types';

const today = new Date();
const todayMidnight = new Date();
todayMidnight.setHours(0, 0, 0, 0);

export const mockedDashboardList: DashboardListRes['logs'] = [
  {
    id: '1',
    timestamp: today,
    action: 'Existing',
    user_id: 'user123',
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
    user_id: 'user2',
    user_name: 'Piotr',
    status: 'New',
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
    user_id: 'user3',
    user_name: 'Jan',
    status: 'Older',
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
    user_id: 'user4',
    user_name: 'John',
    status: 'Older',
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
    user_id: 'user5',
    user_name: 'Piotr',
    status: 'New',
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
    user_id: 'user6',
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
    user_id: 'user7',
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
    user_id: 'user8',
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
    user_id: 'user9',
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
    user_id: 'user10',
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
    user_id: 'user11',
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
    id: '12',
    timestamp: todayMidnight,
    action: 'Created',
    user_id: 'user12',
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
    id: '13',
    timestamp: todayMidnight,
    action: 'Created',
    user_id: 'user13',
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
