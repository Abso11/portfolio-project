import styled from 'styled-components';

export const StyledTitles = styled.div`
  display: flex;
  justify-content: space-between;
  margin: ${({ theme }) => `${theme.spacing.space_8} 0`};
  width: 100%;

  p {
    font-weight: 600;
  }
`;
