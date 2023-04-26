import { Rule } from 'antd/lib/form';

export type ValidationSchema = {
  [key: string]: Rule[];
};
