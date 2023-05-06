import { ChangeEvent } from 'react';
import { DeleteIcon, SearchBar, StyledSearchBar, StyledSearchIcon, StyledSpan, Wrapper } from './searchbar.styled';

type SearchbarProps = {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  handleDelete: () => void;
  placeholder: string;
  className?: string;
  width?: number;
  height?: string;
};

export const SearchbarComponent = ({
  onChange,
  value,
  handleDelete,
  placeholder,
  className,
  width,
  height
}: SearchbarProps): JSX.Element => (
  <Wrapper className={className}>
    <StyledSearchBar>
      <StyledSearchIcon />
      <SearchBar width={width} height={height} placeholder={placeholder} onChange={onChange} value={value} />
      {value && (
        <DeleteIcon onClick={handleDelete}>
          <StyledSpan>&#10005;</StyledSpan>
        </DeleteIcon>
      )}
    </StyledSearchBar>
  </Wrapper>
);
