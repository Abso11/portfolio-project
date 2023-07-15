import { ColumnsType } from 'antd/es/table';
import { format } from 'date-fns';
import { TFunction } from 'i18next';
import { AntdColumnTitle } from 'components/common';
import { OrderDirection } from 'enums';
import { appRoutes } from 'urls';
import { ReactComponent as EditIcon } from 'assets/icons/edit.svg';
import { MovieListRes } from './movie-list.types';
import { StyledEditButton, StyledLink } from './movie-list.styled';
import { handleOpenModal } from './movie-list.helpers';

export const formatDate = (date: Date): string => format(new Date(date), 'dd.MM.yyyy HH:mm');

type Column = MovieListRes['movie_data'][0];

export const useColumns = (handleOpenSidebar: (id: string) => void, t: TFunction): ColumnsType<Column> => [
  {
    key: 'actions',
    width: 30,
    render: (_, record) => (
      <StyledEditButton>
        <EditIcon onClick={() => handleOpenSidebar(record.title_id)} />
      </StyledEditButton>
    )
  },
  {
    title: ({ sortColumns }) => (
      <AntdColumnTitle dataIndex='released' sortColumns={sortColumns} name={t('movie-list.released')} />
    ),
    dataIndex: 'released',
    key: 'released',
    width: 130,
    ellipsis: true,
    sorter: true,
    defaultSortOrder: OrderDirection.ASC,
    render: (value) => formatDate(value)
  },
  {
    title: ({ sortColumns }) => (
      <AntdColumnTitle dataIndex='title' sortColumns={sortColumns} name={t('movie-list.title')} />
    ),
    dataIndex: 'title',
    key: 'title',
    width: 180,
    ellipsis: true,
    sorter: true
  },
  {
    title: ({ sortColumns }) => (
      <AntdColumnTitle dataIndex='title_id' sortColumns={sortColumns} name={t('movie-list.title_id')} />
    ),
    dataIndex: 'title_id',
    key: 'title_id',
    width: 150,
    ellipsis: true,
    sorter: true,
    render: (text: string) => <StyledLink to={appRoutes.app.movieDetails.replace(':id', text)}>{text}</StyledLink>
  },
  {
    title: t('movie-list.creator_name'),
    dataIndex: 'creator_name',
    key: 'creator_name',
    width: 150,
    ellipsis: true
  },
  {
    title: t('movie-list.status'),
    dataIndex: 'status',
    key: 'status',
    width: 140,
    ellipsis: true
  },
  {
    title: t('movie-list.imdb_id'),
    dataIndex: 'imdb_id',
    key: 'imdb_id',
    width: 170,
    ellipsis: true,
    render: (text: string, record) => <a onClick={() => handleOpenModal(text, record.title)}>{text}</a>
  }
];
