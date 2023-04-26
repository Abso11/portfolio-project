import { FC, ReactElement, ReactNode } from 'react';
import { MessageType } from 'utils/notify';
import { Wrapper, IconWrapper } from './toast-notification.styled';

type Props = {
  type: MessageType;
  icon?: ReactElement;
  children: ReactNode;
};

const ToastNotification: FC<Props> = ({ children, type = MessageType.Info, icon }) => (
  <Wrapper type={type}>
    {icon && <IconWrapper>{icon}</IconWrapper>} {children}
  </Wrapper>
);

export default ToastNotification;
