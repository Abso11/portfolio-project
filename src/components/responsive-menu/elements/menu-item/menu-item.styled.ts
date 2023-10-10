import styled, { css } from 'styled-components';
import { mediaQuery } from 'styles';
import { ReactComponent as ExpandIcon } from '../../../../assets/icons/expand-arrow.svg';

export const ExpandArrow = styled(ExpandIcon)<{
  $isExpanded: boolean;
  $isActive: boolean;
}>`
  position: absolute;
  top: ${({ theme }) => theme.spacing.space_12};
  right: 20px;
  transition: transform 0.2s;
  transform: ${({ $isExpanded }) => ($isExpanded ? 'rotate(-180deg)' : 'rotate(0)')};
  cursor: pointer;

  path {
    stroke: ${({ $isExpanded, $isActive, theme }) =>
      ($isExpanded && $isActive) || $isActive ? theme.colors.primary.white : theme.colors.primary.ghost_white};
  }
`;

export const ListItem = styled.li<{
  $isExpandable: boolean;
}>`
  position: relative;
  margin-left: 0;
  list-style: none;
  user-select: none;

  /* sub menu */
  & & a {
    padding-left: 68px;

    ${mediaQuery.tabletMini} {
      padding-left: 65px;
    }

    ${mediaQuery.desktop} {
      padding-left: 80px;
    }
  }

  &:hover {
    > svg path {
      stroke: ${({ theme }) => theme.colors.primary.white};
    }
  }
`;

export const Link = styled.a<{
  isActive: boolean;
  disabled?: boolean;
  $isExpanded: boolean;
  isActiveAndExpanded: boolean;
}>`
  display: flex;
  padding: ${({ theme }) => theme.spacing.space_12} 28px;
  font-size: ${({ theme }) => theme.fontSize.nd};
  line-height: ${({ theme }) => theme.spacing.space_24};
  background-color: ${({ isActive, theme }) => (isActive ? theme.colors.primary.blue : 'inherit')};
  color: ${({ isActive, $isExpanded, isActiveAndExpanded, theme }) =>
    // eslint-disable-next-line no-nested-ternary
    isActive
      ? $isExpanded
        ? theme.colors.secondary.ghost_white_30
        : theme.colors.primary.white
      : isActiveAndExpanded
      ? theme.colors.secondary.ghost_white_30
      : 'inherit'};

  ${mediaQuery.tabletMini} {
    padding: ${({ theme: { spacing } }) => `${spacing.space_12} 20px ${spacing.space_12} 26px`};
  }

  ${mediaQuery.desktop} {
    padding: ${({ theme: { spacing } }) =>
      `${spacing.space_12} ${spacing.space_24} ${spacing.space_12} ${spacing.space_40}`};
  }

  &:hover {
    cursor: pointer;
    background-color: ${({ isActive, theme }) => (isActive ? '#2D8EFF' : theme.colors.secondary.deep_blue_70)};
    color: ${({ theme }) => theme.colors.primary.white};

    svg {
      opacity: 1;
    }
  }

  svg {
    margin-right: ${({ theme }) => theme.spacing.space_16};
    opacity: ${({ isActive, isActiveAndExpanded }) => (isActive || isActiveAndExpanded ? 1 : 0.8)};
  }

  ${({ disabled, theme }) =>
    disabled &&
    css`
      color: ${theme.colors.secondary.black_30};

      &:hover {
        cursor: auto;
        color: ${theme.colors.secondary.black_30};
        background-color: transparent;

        svg {
          opacity: 0.5;
        }
      }

      svg {
        opacity: 0.5;
      }
    `}
`;
