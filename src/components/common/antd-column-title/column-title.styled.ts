import styled from 'styled-components';

interface Props {
  isMargin?: boolean;
}

type ArrowProps = {
  active: boolean;
  isFirst?: boolean;
};

export const FlexContainer = styled.div<Props>`
  display: flex;
  align-items: center;

  p {
    margin-left: ${({ isMargin }) => (isMargin ? '10px' : '0')};
    margin-top: 1px;
  }
`;

export const SortIconWrapper = styled.div<ArrowProps>`
  margin-left: ${({ isFirst }) => (isFirst ? '10px' : 0)};
  svg {
    margin-top: 60%;
  }
`;
