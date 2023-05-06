import { useState, Dispatch, SetStateAction } from 'react';
import { useTranslation } from 'react-i18next';
import { SearchBarWithHints } from 'components/common/searchbar-with-hints';
import { useDebounce } from 'hooks';
import { ListQuery } from 'types';
import { useDashboardListHints } from '../dashboard-list.hooks';
import { FilterWrapper } from './dashboard-list-header.styled';

type Props = {
  onRangeChange: (start: Date, end: Date) => void;
  listQuery: ListQuery;
  setListQuery: Dispatch<SetStateAction<ListQuery>>;
};

export const DashboardListHeader = ({ onRangeChange, listQuery, setListQuery }: Props): JSX.Element => {
  const { t } = useTranslation();

  const [searchText, setSearchText] = useState<string>('');
  const debouncedValue = useDebounce<string>(searchText);

  const { data: hints, isFetching, refetch } = useDashboardListHints(listQuery, searchText);

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
      <SearchBarWithHints
        data={hints?.map(({ key, value }) => ({ field: key, text: value }))}
        isFetching={isFetching}
        refetch={refetch}
        setSelectedOption={handleSelectFilter}
        searchText={searchText}
        setSearchText={setSearchText}
        debouncedValue={debouncedValue}
        withTags
        placeholder={'DashboardList Searchbar'}
        selectedOptions={Object.entries(listQuery.filter || {}).map(([key, value]) => ({ key, value }))}
        onDeleteFilter={handleDeleteFilter}
      />
    </FilterWrapper>
  );
};
