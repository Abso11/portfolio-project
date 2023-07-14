import { useState, Dispatch, SetStateAction } from 'react';
import { useTranslation } from 'react-i18next';
import { SearchBarWithHints, ViewDatePicker } from 'components/common';
import { useDebounce } from 'hooks';
import { ListQuery } from 'types';
import { useMovieListHints } from './movie-list-header.hooks';
import { FilterWrapper } from './movie-list-header.styled';

type Props = {
  onRangeChange: (start: Date, end: Date) => void;
  listQuery: ListQuery;
  setListQuery: Dispatch<SetStateAction<ListQuery>>;
};

export const MovieListHeader = ({ onRangeChange, listQuery, setListQuery }: Props): JSX.Element => {
  const { t } = useTranslation();
  const [searchText, setSearchText] = useState<string>('');
  const debouncedValue = useDebounce<string>(searchText);

  const { data: hints, isFetching, refetch } = useMovieListHints(listQuery, searchText);

  const handleSelectFilter = (key?: string, text?: string): void => {
    if (key && text)
      setListQuery((prev) => ({
        ...prev,
        filter: {
          ...prev.filter,
          [key]: text
        }
      }));
  };

  const handleDeleteFilter = (filterKey: string): void => {
    setListQuery((prev) => {
      const filter = Object.fromEntries(Object.entries(prev.filter || {}).filter(([key]) => key !== filterKey));
      return {
        ...prev,
        filter
      };
    });
  };

  return (
    <FilterWrapper>
      <ViewDatePicker
        onSave={onRangeChange}
        startDate={listQuery.start_date as Date}
        endDate={listQuery.end_date as Date}
        showTimeFormat='HH:mm'
      />
      <SearchBarWithHints
        data={hints?.map(({ key, value }) => ({ field: key, text: value }))}
        isFetching={isFetching}
        refetch={refetch}
        setSelectedOption={handleSelectFilter}
        searchText={searchText}
        setSearchText={setSearchText}
        debouncedValue={debouncedValue}
        withTags
        placeholder={t('movie-list.header')}
        selectedOptions={Object.entries(listQuery.filter || {}).map(([key, value]) => ({ key, value }))}
        onDeleteFilter={handleDeleteFilter}
      />
    </FilterWrapper>
  );
};
