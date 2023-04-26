export type TimezoneList = {
  key: string;
  value: string;
}[];

export const timezones: TimezoneList = [
  { key: '(GMT-07:00) Arizona', value: 'US/Arizona' },
  {
    key: '(GMT+01:00) Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna',
    value: 'Europe/Amsterdam'
  }
];
