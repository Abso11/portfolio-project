import styled from 'styled-components';
import { mediaQuery } from 'styles';

export const StyledWrapper = styled.div`
  display: grid;
  padding-top: 10px;
  margin-bottom: ${({ theme }) => `${theme.spacing.space_40}`};
  border-radius: 5px;

  ${mediaQuery.tabletMini} {
    grid-template-columns: repeat(2, minmax(192px, 1fr));
  }

  ${mediaQuery.desktop} {
    grid-template-columns: repeat(4, minmax(192px, 1fr));
  }
`;

export const StyledTile = styled.div`
  display: flex;
  word-break: break-word;

  dt {
    margin-bottom: 10px;
  }

  ${mediaQuery.tabletMini} {
    min-width: 50%;
    margin-bottom: ${({ theme }) => theme.spacing.space_24};
  }

  dt {
    font-weight: 600;
  }

  dl {
    margin-bottom: ${({ theme }) => theme.spacing.space_16};
  }
`;
