import styled from 'styled-components';
import { mediaQuery } from 'styles';

export const Wrapper = styled.div<{ isOpened: boolean }>`
  position: absolute;
  top: ${({ theme }) => theme.spacing.space_24};
  right: 26px;
  width: 18px;
  height: 14px;

  ${mediaQuery.tabletMini} {
    display: none;
  }

  > div {
    position: absolute;
    left: 0;
    width: 100%;
    height: ${({ theme }) => theme.spacing.space_2};
    background-color: ${({ theme }) => theme.colors.primary.white};
    border-radius: 3px;
    transition: ${({ isOpened }) =>
      isOpened ? 'transform 0.2s 0.2s, top 0.2s, bottom 0.2s' : 'transform 0.2s, top 0.2s, bottom 0.2s'};
    transform-origin: center;

    &:nth-child(1) {
      top: ${({ isOpened }) => (isOpened ? 'calc(50% - 1px)' : 0)};
      transform: ${({ isOpened }) => (isOpened ? 'rotate(135deg)' : 'rotate(0deg)')};
    }

    &:nth-child(2) {
      top: calc(50% - 1px);
      opacity: ${({ isOpened }) => (isOpened ? 0 : 1)};
    }

    &:nth-child(3) {
      bottom: ${({ isOpened }) => (isOpened ? 'calc(50% - 1px)' : 0)};
      transform: ${({ isOpened }) => (isOpened ? 'rotate(-135deg)' : 'rotate(0deg)')};
    }
  }
`;
