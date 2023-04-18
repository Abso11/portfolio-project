import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.colors.white};
  padding-top: 16px;
`;

const AutomaticRefreshInfo = styled.p`
  color: ${({ theme }) => theme.colors.grey02};
`;

const Refresh = styled(AutomaticRefreshInfo)`
  margin-top: 20px;
  transition: color 0.2s ease-in-out;

  :hover {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.blue01};
  }
`;

export { Wrapper, Refresh, AutomaticRefreshInfo };
