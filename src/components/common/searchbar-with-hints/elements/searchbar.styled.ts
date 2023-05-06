import styled from 'styled-components';
import { ReactComponent as SearchIcon } from 'assets/icons/search-black.svg';

export const StyledSearchBar = styled.div.attrs({
  'data-testid': 'searchbar-container'
})`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 10px;
`;

export const SearchBar = styled.input.attrs({
  'data-testid': 'searchbar',
  role: 'searchbar'
})<{ width?: number; height?: string }>`
  width: ${({ width }) => (width ? `${width}px` : '100%')};
  height: ${({ height }) => height || '25px'};
  background: transparent;
  border: none;
  outline: none;
`;

export const Wrapper = styled.div<{ className?: string }>`
  border: 1px solid ${({ theme }) => theme.colors.grey03};
  transition: background 0.25s ease-in-out;
  :focus-within {
    background: ${({ theme }) => theme.colors.white};
  }
`;

export const DeleteIcon = styled.div`
  position: absolute;
  right: 10px;
  transform: translateY(-50%);
  top: 50%;
  height: 16px;
  width: 16px;
  background: ${({ theme }) => theme.colors.grey03};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  :hover {
    cursor: pointer;
  }
`;

export const StyledSpan = styled.span`
  color: white;
  font-size: 0.75rem;
`;

export const StyledSearchIcon = styled(SearchIcon)`
  margin-right: 10px;
`;
