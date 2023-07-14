export type MovieDetailsReq = {
  id: string;
};

export type MovieDetailsRes = {
  id: string;
  title: string;
  timezone: string;
  budget: number;
  votes: string;
  type: string;
  rating: number;
  language: string;
};

export type UpdateMovieDetailsReq = {
  timezone: string;
  budget: number;
};
