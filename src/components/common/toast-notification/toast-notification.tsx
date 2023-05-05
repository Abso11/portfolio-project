import { ReactElement, ReactNode } from 'react';
import { MessageType } from 'utils/notify';
import { Wrapper, IconWrapper } from './toast-notification.styled';

type Props = {
  type: MessageType;
  icon?: ReactElement;
  children: ReactNode;
};

const ToastNotification = ({ children, type = MessageType.Info, icon }: Props): JSX.Element => (
  <Wrapper type={type}>
    {icon && <IconWrapper>{icon}</IconWrapper>} {children}
  </Wrapper>
);

export default ToastNotification;
