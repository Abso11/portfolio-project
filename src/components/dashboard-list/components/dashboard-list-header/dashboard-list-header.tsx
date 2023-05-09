import { useState, Dispatch, SetStateAction } from 'react';
import { SearchBarWithHints } from 'components/common/searchbar-with-hints';
import { useDebounce } from 'hooks';
import { ListQuery } from 'types';
import { ViewDatePicker } from 'components/common/view-date-picker';
import { useDashboardListHints } from 'components/dashboard-list/dashboard-list.hooks';
import { yearAgo } from 'components/dashboard-list/dashboard-list.constants';
import { useTranslation } from 'react-i18next';
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
      <ViewDatePicker
        onSave={onRangeChange}
        startDate={listQuery.start_date as Date}
        endDate={listQuery.end_date as Date}
        disableBefore={yearAgo}
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
        placeholder={t('dashboard-list.header')}
        selectedOptions={Object.entries(listQuery.filter || {}).map(([key, value]) => ({ key, value }))}
        onDeleteFilter={handleDeleteFilter}
      />
    </FilterWrapper>
  );
};
