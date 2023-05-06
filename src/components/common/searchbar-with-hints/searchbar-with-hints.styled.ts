import styled from 'styled-components';
import zIndex from 'styles/zIndex';
import { mediaQuery } from 'styles';
import { SearchbarComponent } from './elements';

export const HintsWrapper = styled.ul<{ isVisible: boolean }>`
  position: absolute;
  z-index: ${zIndex.level9};
  overflow-y: auto;
  width: 100%;
  max-height: 500px;
  visibility: ${({ isVisible }) => (isVisible ? 'visible' : 'hidden')};
  list-style: none;
  background: ${({ theme }) => theme.colors.white};
`;

export const SearchBarWrapper = styled.div`
  position: relative;
`;

export const StyledSearchbar = styled(SearchbarComponent)<{ withTags?: boolean }>`
  width: ${({ withTags }) => (withTags ? '100%' : '288px')};
  border: 1px solid ${({ theme }) => theme.colors.darkGrey};
  border-radius: 4px;

  :focus-within {
    background: none;
  }

  ${mediaQuery.tabletMini} {
    margin-top: 10px;
  }
`;

export const Hint = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  padding: 10px 16px;

  :hover {
    cursor: pointer;
    background: ${({ theme }) => theme.colors.blue04};
  }

  :active {
    background: ${({ theme }) => theme.colors.blueLight};
    color: ${({ theme }) => theme.colors.blue01};
  }
`;

export const SpanField = styled.span<{ withTags?: boolean }>`
  font-size: 0.825rem;
  color: ${({ theme: { colors }, withTags }) => (withTags ? colors.black : colors.grey02)};

  span {
    color: ${({ theme }) => theme.colors.grey02};
    font-size: 0.825rem;
  }
`;

export const TagsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const SearchedHints = styled.div`
  padding: 0 15px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey03};
  font-size: ${({ theme }) => theme.fontSize.sm};
  color: ${({ theme }) => theme.colors.grey02};
`;

export const Tag = styled.div`
  display: flex;
  align-items: center;
  padding: 2px ${({ theme }) => theme.spacing.space_16} 4px;
  margin: ${({ theme: { spacing } }) => `${spacing.space_16} ${spacing.space_16} 0 0`};
  background-color: ${({ theme }) => theme.colors.greyTable};
  border-radius: 21px;

  > svg {
    margin-left: 10px;
    cursor: pointer;
  }
`;
