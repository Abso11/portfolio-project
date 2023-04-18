import { FC } from 'react';
import styled, { css, keyframes } from 'styled-components';

const Spin = keyframes`
  0% { transform: rotate(0deg) };
  100% { transform: rotate(360deg) };
`;

const SpinnerWrapper = styled.div<{ inline?: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${({ inline }) => {
    if (inline) {
      return css`
        position: static;
      `;
    }
    return css`
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    `;
  }}
`;

const SpinnerCircle = styled.span<{ hasMessage?: boolean }>`
  min-width: 32px;
  min-height: 32px;
  width: 32px;
  height: 32px;
  margin-bottom: ${({ hasMessage }) => (hasMessage ? '10px' : '0')};
  border: 2px solid ${({ theme }) => theme.colors.grey};
  border-top: 2px solid ${({ theme }) => theme.colors.blue01};
  border-radius: 50%;
  animation: ${Spin} 2s ease-in-out infinite;
`;

interface SpinnerProps {
  message?: string;
  inline?: boolean;
  className?: string;
}

const Spinner: FC<SpinnerProps> = ({ message, inline, className }) => (
  <SpinnerWrapper data-testid='spinner' inline={inline} className={className}>
    <SpinnerCircle hasMessage={!!message} />
    {message ? <p>{message}</p> : undefined}
  </SpinnerWrapper>
);

export default Spinner;
