import { ChangeEvent, useEffect, useState } from 'react';
import { ReactComponent as RemoveIcon } from 'assets/icons/cancel.svg';
import {
  Hint,
  HintsWrapper,
  SearchBarWrapper,
  SearchedHints,
  SpanField,
  StyledSearchbar,
  Tag,
  TagsWrapper
} from './searchbar-with-hints.styled';
import { SearchbarWithHintsProps } from './searchbar-with-hints.types';

export const SearchBarWithHints = ({
  isFetching,
  data,
  refetch,
  setSelectedOption,
  searchText,
  debouncedValue,
  setSearchText,
  withTags,
  placeholder,
  selectedOptions = [],
  onDeleteFilter
}: SearchbarWithHintsProps): JSX.Element => {
  const [isVisible, setIsVisible] = useState(false);

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const searchText = e.target.value;
    setSearchText(searchText);
  };

  useEffect(() => {
    if (searchText) {
      refetch();
    }
  }, [debouncedValue]);

  const handleOnClick = (key: string, text: string) => (): void => {
    setSearchText(withTags ? '' : text);
    setSelectedOption(key, text);
  };

  const handleDelete = (): void => {
    setSelectedOption();
    setSearchText('');
  };

  const handleFocusChange = (): void => {
    setTimeout(() => {
      setIsVisible(false);
    }, 200);
  };

  return (
    <SearchBarWrapper onFocus={() => setIsVisible(true)} onBlur={() => handleFocusChange()}>
      <StyledSearchbar
        handleDelete={handleDelete}
        onChange={handleOnChange}
        placeholder={placeholder}
        value={searchText}
        withTags={withTags}
      />
      <HintsWrapper isVisible={isVisible}>
        {withTags && searchText && (
          <SearchedHints>
            {'Dashboard List Searchbar'} “{searchText}”
          </SearchedHints>
        )}
        {isFetching && <Hint>{'loading data'}</Hint>}
        {!isFetching && data?.length === 0 && <Hint>{'no data'}</Hint>}
        {!isFetching &&
          data?.map(({ field, text }) => (
            <Hint onClick={handleOnClick(field, text)} key={text} data-testid={'ocpp-logs-hints'}>
              <span>{text}</span>
              <SpanField withTags={withTags}>
                {withTags && <span>{'under'} </span>}
                {withTags && field}
              </SpanField>
            </Hint>
          ))}
      </HintsWrapper>
      {withTags && (
        <TagsWrapper>
          {selectedOptions.map(({ key, value }) => (
            <Tag key={key + value}>
              {value} <RemoveIcon onClick={() => onDeleteFilter && onDeleteFilter(key, value)} />
            </Tag>
          ))}
        </TagsWrapper>
      )}
    </SearchBarWrapper>
  );
};
