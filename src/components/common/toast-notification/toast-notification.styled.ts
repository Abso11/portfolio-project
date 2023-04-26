import styled, { css } from 'styled-components';
import { MessageType } from 'utils/notify';

const Wrapper = styled.div<{ type: MessageType }>`
  width: 100%;
  padding: 18px 20px;
  color: ${({ theme }) => theme.colors.black};
  display: flex;
  align-items: center;
  white-space: nowrap;

  ${({ type, theme }) => {
    switch (type) {
      case MessageType.Error:
        return css`
          border-left: 8px solid ${theme.colors.errorRed};
        `;
      case MessageType.Info:
        return css`
          border-left: 8px solid ${theme.colors.availableGreen};
        `;
      case MessageType.Utilized:
        return css`
          border-left: 8px solid ${theme.colors.waitingEvYellow};
        `;
      default:
        return undefined;
    }
  }}
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
`;

export { Wrapper, IconWrapper };
