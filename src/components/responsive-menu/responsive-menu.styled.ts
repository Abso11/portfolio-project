import styled from 'styled-components';
import { mediaQuery } from 'styles';

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  width: 100vw;
  background-color: ${({ theme }) => theme.colors.primary.deep_blue};
  color: ${({ theme }) => theme.colors.primary.ghost_white};
  font-family: 'Lato', sans-serif;
  z-index: 100;

  ${mediaQuery.tabletMini} {
    width: 203px;
    height: 100vh;
  }

  ${mediaQuery.desktop} {
    width: 247px;
  }
`;

export const Title = styled.h1`
  margin: 0;
  font-size: ${({ theme }) => theme.fontSize.xl};
  line-height: 28px;
  text-align: center;
  color: ${({ theme }) => theme.colors.primary.white};
  font-weight: 400;
`;

export const MenuHeader = styled.div`
  position: relative;
  padding: 18px;
  background-color: ${({ theme }) => theme.colors.primary.deep_blue};
  z-index: 102;

  ${mediaQuery.tabletMini} {
    padding: ${({ theme }) => theme.spacing.space_24} 18px 20px;
  }
`;

export const Nav = styled.nav<{ isOpened: boolean }>`
  position: fixed;
  top: ${({ isOpened }) => (isOpened ? '63px' : '-150vh')};
  left: 0;
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: calc(100vh - 63px);
  padding-top: 14px;
  background-color: inherit;
  transition: top 0.4s ease-in-out;
  overflow-y: scroll;
  z-index: 101;

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  ${mediaQuery.tabletMini} {
    position: static;
    flex: 1;
    width: 100%;
    z-index: 1;
  }
`;

export const MenuFooter = styled.div`
  margin-top: auto;
  padding: ${({ theme }) => theme.spacing.space_16};
  text-align: center;

  ${mediaQuery.desktop} {
    padding: ${({ theme }) => theme.spacing.space_32};
  }

  p {
    font-size: ${({ theme }) => theme.fontSize.xs};
  }
`;
