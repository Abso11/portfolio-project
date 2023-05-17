import styled from 'styled-components';

export const StyledWrapper = styled.div`
  margin-bottom: 10px;
`;

export const StyledButton = styled.button<{ isActive: boolean }>`
  width: 50px;
  padding: 5px;
  border: none;
  border-radius: 10px;
  transition: 0.2s ease-in-out;
  background: ${({ isActive, theme }) => (isActive ? theme.colors.primary.blue : theme.colors.primary.deep_blue)};
  color: ${({ isActive, theme }) => (isActive ? theme.colors.primary.black : theme.colors.primary.white)};
`;
