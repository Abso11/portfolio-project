import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { media } from 'styles';

export const Wrapper = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  margin: 0px 300px;
  height: 100vh;

  ${media.tablet} {
    flex-flow: column;
    margin: 0px;
  }
`;

export const Title = styled.h1`
  font-size: 5rem;
  white-space: nowrap;
  margin-bottom: 20px;
`;

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-flow: column;

  ${media.tablet} {
    display: block;
    flex: 0;
  }
`;

export const ErrorCode = styled.div`
  color: ${({ theme }) => theme.colors.grey02};
  display: flex;
  align-items: center;
`;

export const Code404 = styled.p`
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey02};
  margin-left: 10px;
  line-height: 16px;
`;

export const LinksContainer = styled.div`
  margin-top: 50px;
`;

export const StyledLink = styled(NavLink)`
  color: ${({ theme }) => theme.colors.grey02};
  display: flex;
  align-items: center;
  margin-top: 10px;
  width: fit-content;
`;
