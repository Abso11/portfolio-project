import styled from 'styled-components';
import { mediaQuery } from 'styles';

export const FilterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: nowrap;
  margin-bottom: ${({ theme }) => theme.spacing.space_24};
  padding: ${({ theme: { spacing } }) => `20px ${spacing.space_24} ${spacing.space_16}`};
  background: ${({ theme }) => theme.colors.white};

  ${mediaQuery.tabletMini} {
    flex-wrap: wrap;
  }

  > div:nth-child(1) {
    margin-right: 40px;
    min-width: 330px;

    ${mediaQuery.tabletMini} {
      margin-right: 0;
    }
  }

  > div:nth-child(2) {
    width: 100%;
    max-width: 680px;
  }
`;
