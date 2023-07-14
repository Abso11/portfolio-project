import { ChangeEvent, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
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
  const { t } = useTranslation();
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
            {t('movie-list.searching-for')} “{searchText}”
          </SearchedHints>
        )}
        {isFetching && <Hint>{t('loading-data')}</Hint>}
        {!isFetching && data?.length === 0 && <Hint>{t('no-data')}</Hint>}
        {!isFetching &&
          data?.map(({ field, text }) => (
            <Hint onClick={handleOnClick(field, text)} key={text} data-testid={'movie-list-hints'}>
              <span>{text}</span>
              <SpanField withTags={withTags}>
                {withTags && <span>{t('movie-list.under')} </span>}
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
