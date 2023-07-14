export type MovieListReqFilter = {
  [key in 'title' | 'title_id' | 'status' | 'creator_name']: string;
};

export type MovieListReq = {
  sort_field: 'released' | 'title' | 'title_id';
  sort_order: 'asc' | 'desc';
  skip: number;
  take: number;
  start_date: Date;
  end_date: Date;
  filter?: MovieListReqFilter;
};

export type MovieListRes = {
  movie_data: {
    id: string;
    released: Date;
    title: string;
    title_id: string;
    creator_name: string;
    status: string;
    imdb_id: string;
    poster?: string;
    details: {
      [key: string]: string;
    };
  }[];
  records_count: number;
};

export type MovieListHintsReq = {
  start_date: Date;
  end_date: Date;
  search_text: string;
};

export type MovieListHintsRes = {
  value: string;
  key: string;
}[];

export type MovieListSortableFields = 'released' | 'title' | 'title_id';

export type UpdateMovieListReq = {
  title: string;
  creator_name: string;
  title_id: string;
};
