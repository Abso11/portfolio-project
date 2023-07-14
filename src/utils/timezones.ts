export type TimezoneList = {
  key: string;
  value: string;
}[];

export const timezones: TimezoneList = [
  { key: '(GMT-07:00) Arizona', value: 'US/Arizona' },
  {
    key: '(GMT+01:00) Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna',
    value: 'Europe/Amsterdam'
  },
  {
    key: '(GMT-08:00) Pacific Time (US & Canada)',
    value: 'America/Los_Angeles'
  },
  {
    key: '(GMT+02:00) Helsinki, Kyiv, Riga, Sofia, Tallinn, Vilnius',
    value: 'Europe/Helsinki'
  }
];
