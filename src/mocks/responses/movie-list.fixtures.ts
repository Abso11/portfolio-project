import { MovieListRes } from 'components/movie-list/movie-list.types';

export const mockedMovieList: MovieListRes['movie_data'] = [
  {
    id: '1',
    released: new Date('July 10, 2011 00:00:00'),
    title: 'GoT',
    title_id: '1A',
    creator_name: 'David Benioff, D.B. Weiss',
    status: 'Finished',
    imdb_id: 'tt0944947',
    poster:
      'https://m.media-amazon.com/images/M/MV5BN2IzYzBiOTQtNGZmMi00NDI5LTgxMzMtN2EzZjA1NjhlOGMxXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_SX300.jpg',
    details: {
      description:
        'Nine noble families fight for control over the lands of Westeros, while an ancient enemy returns after being dormant for millennia.',
      total_seasons: '8',
      country: 'United States, United Kingdom'
    }
  },
  {
    id: '2',
    released: new Date('July 26, 2019 00:00:00'),
    title: 'The Boys',
    title_id: '2A',
    creator_name: 'Eric Kripke',
    status: 'In progress',
    imdb_id: 'tt1190634',
    poster:
      'https://m.media-amazon.com/images/M/MV5BOTEyNDJhMDAtY2U5ZS00OTMzLTkwODktMjU3MjFkZWVlMGYyXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_SX300.jpg',
    details: {
      description: 'A group of vigilantes set out to take down corrupt superheroes who abuse their superpowers.',
      total_seasons: '4',
      country: 'United States'
    }
  },
  {
    id: '3',
    released: new Date('April 26, 2015 00:00:00'),
    title: 'Better Call Saul',
    title_id: '3A',
    creator_name: 'Peter Gould',
    status: 'Finished',
    imdb_id: 'tt3032476',
    poster:
      'https://m.media-amazon.com/images/M/MV5BZDA4YmE0OTYtMmRmNS00Mzk2LTlhM2MtNjk4NzBjZGE1MmIyXkEyXkFqcGdeQXVyMTMzNDExODE5._V1_SX300.jpg',
    details: {
      description:
        'The trials and tribulations of criminal lawyer Jimmy McGill in the years leading up to his fateful run-in with Walter White and Jesse Pinkman.',
      total_seasons: '6',
      country: 'United States'
    }
  },
  {
    id: '4',
    released: new Date('April 26, 2008 00:00:00'),
    title: 'Breaking Bad',
    title_id: '4A',
    creator_name: 'Vince Gilligan',
    status: 'Finished',
    imdb_id: 'tt0903747',
    poster:
      'https://m.media-amazon.com/images/M/MV5BYmQ4YWMxYjUtNjZmYi00MDQ1LWFjMjMtNjA5ZDdiYjdiODU5XkEyXkFqcGdeQXVyMTMzNDExODE5._V1_SX300.jpg',
    details: {
      description:
        'A chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine',
      total_seasons: '5',
      country: 'United States'
    }
  },
  {
    id: '5',
    released: new Date('April 10, 2015 00:00:00'),
    title: 'Daredevil',
    title_id: '5A',
    creator_name: 'Drew Goddard',
    status: 'Finished',
    imdb_id: 'tt3322312',
    poster:
      'https://m.media-amazon.com/images/M/MV5BYjJhMjcwNjAtODc0ZC00Yjg5LWExYzEtMzc5OWJhNjI1NTQ4XkEyXkFqcGdeQXVyNTA3MTU2MjE@._V1_SX300.jpg',
    details: {
      description: 'A blind lawyer by day, vigilante by night. Matt Murdock fights the crime of New York as Daredevil.',
      total_seasons: '3',
      country: 'United States'
    }
  },
  {
    id: '6',
    released: new Date('September 3, 2008 00:00:00'),
    title: 'Sons of Anarchy',
    title_id: '6A',
    creator_name: 'Kurt Sutter',
    status: 'Finished',
    imdb_id: 'tt1124373',
    poster:
      'https://m.media-amazon.com/images/M/MV5BYTMxMGY1OGQtZmUzNy00NjhmLTlhNzItZDBiNzhlMTgwZjZlXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_SX300.jpg',
    details: {
      description: 'A biker struggles to balance being a father and being involved in an outlaw motorcycle club.',
      total_seasons: '7',
      country: 'United States'
    }
  },
  {
    id: '7',
    released: new Date('August 28, 2015 00:00:00'),
    title: 'Narcos',
    title_id: '7A',
    creator_name: 'Carlo Bernard',
    status: 'Finished',
    imdb_id: 'tt2707408',
    poster:
      'https://m.media-amazon.com/images/M/MV5BNmFjODU3YzgtMGUwNC00ZGI3LWFkZjQtMjkxZDc3NmQ1MzcyXkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_SX300.jpg',
    details: {
      description: 'A chronicled look at the criminal exploits of Colombian drug lord Pablo Escobar',
      total_seasons: '3',
      country: 'United States, Colombia'
    }
  },
  {
    id: '8',
    released: new Date('August 21, 2022 00:00:00'),
    title: 'House of the Dragon',
    title_id: '8A',
    creator_name: 'George R.R. Martin',
    status: 'In progress',
    imdb_id: 'tt11198330',
    poster:
      'https://m.media-amazon.com/images/M/MV5BZjBiOGIyY2YtOTA3OC00YzY1LThkYjktMGRkYTNhNTExY2I2XkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_SX300.jpg',
    details: {
      description:
        'An internal succession war within House Targaryen at the height of its power, 172 years before the birth of Daenerys Targaryen.',
      total_seasons: '1',
      country: 'United States'
    }
  },
  {
    id: '9',
    released: new Date('November 17, 2017 00:00:00'),
    title: 'The Punisher',
    title_id: '9A',
    creator_name: 'Steve Lightfoot',
    status: 'Finished',
    imdb_id: 'tt11198330',
    poster:
      'https://m.media-amazon.com/images/M/MV5BNjJhZDZhNWYtMjdhYS00NjkyLWE5NzItMzljNmQ3NGE4MGZjXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_SX300.jpg',
    details: {
      description:
        'After his revenge on those who murdered his family,  Frank Castle finds a new meaning in life as a vigilante known as The Punisher.',
      total_seasons: '2',
      country: 'United States'
    }
  },
  {
    id: '10',
    released: new Date('May 6, 2019 00:00:00'),
    title: 'Chernobyl',
    title_id: '1B',
    creator_name: 'Craig Mazin',
    status: 'Finished',
    imdb_id: 'tt7366338',
    poster:
      'https://m.media-amazon.com/images/M/MV5BNTdkN2QwMDItMDVhNS00ZjFiLWEzNTctMzY5ODQzYWNkMDllXkEyXkFqcGdeQXVyMTMzNDExODE5._V1_SX300.jpg',
    details: {
      description:
        'In April 1986, an explosion at the Chernobyl nuclear power plant in the USSR becomes one of the world`s worst man-made catastrophes.',
      total_seasons: '1',
      country: 'United States, United Kingdom'
    }
  },
  {
    id: '11',
    released: new Date('November 12, 2019 00:00:00'),
    title: 'The Mandalorian',
    title_id: '2B',
    creator_name: 'Jon Favreau',
    status: 'In progress',
    imdb_id: 'tt8111088',
    poster:
      'https://m.media-amazon.com/images/M/MV5BN2M5YWFjN2YtYzU2YS00NzBlLTgwZWUtYWQzNWFhNDkyYjg3XkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_SX300.jpg',
    details: {
      description:
        'The travels of a lone bounty hunter in the outer reaches of the galaxy, far from the authority of the New Republic.',
      total_seasons: '3',
      country: 'United States'
    }
  },
  {
    id: '12',
    released: new Date('January 15, 2023 00:00:00'),
    title: 'The Last of Us',
    title_id: '3B',
    creator_name: 'Neil Druckmann, Craig Mazin',
    status: 'In progress',
    imdb_id: 'tt3581920',
    poster:
      'https://m.media-amazon.com/images/M/MV5BZGUzYTI3M2EtZmM0Yy00NGUyLWI4ODEtN2Q3ZGJlYzhhZjU3XkEyXkFqcGdeQXVyNTM0OTY1OQ@@._V1_SX300.jpg',
    details: {
      description:
        'After a global pandemic destroys civilization, a hardened survivor takes charge of a 14-year-old girl who may be humanity`s last hope.',
      total_seasons: '1',
      country: 'Canada, United States'
    }
  },
  {
    id: '13',
    released: new Date('January 15, 2005 00:00:00'),
    title: 'Prison Break',
    title_id: '4B',
    creator_name: 'Paul T. Scheuring"',
    status: 'Finished',
    imdb_id: 'tt0455275',
    poster: 'https://m.media-amazon.com/images/M/MV5BMTg3NTkwNzAxOF5BMl5BanBnXkFtZTcwMjM1NjI5MQ@@._V1_SX300.jpg',
    details: {
      description:
        'A structural engineer installs himself in a prison to save his falsely accused brother from a death sentence by breaking themselves out from the inside.',
      total_seasons: '5',
      country: 'United State, United Kingdom'
    }
  }
];
