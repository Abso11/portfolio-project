export type UserDetailsReq = {
  id: string;
};

export type UserDetailsRes = {
  id: string;
  name: string;
  timezone: string;
  budget: number;
  phone: string;
  gender: string;
  age: number;
  country: string;
};

export type UpdateUserDetailsReq = {
  timezone: string;
  budget: number;
};
