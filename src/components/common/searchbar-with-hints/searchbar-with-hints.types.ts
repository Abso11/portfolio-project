export type SearchbarWithHintsProps = {
  isFetching: boolean;
  data?: { field: string; text: string }[];
  refetch: () => void;
  setSelectedOption: (key?: string, text?: string) => void;
  searchText: string;
  debouncedValue?: string;
  setSearchText: (text: string) => void;
  withTags?: boolean;
  placeholder: string;
  selectedOptions?: { value: string; key: string }[];
  onDeleteFilter?: (key: string, text: string) => void;
};
