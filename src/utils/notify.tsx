import { ReactElement } from 'react';
import { toast } from 'react-toastify';
import { ToastNotification, CloseButton } from 'components/common/toast-notification';

export enum MessageType {
  Error,
  Info,
  Utilized
}

export default (content: ReactElement | string, type: MessageType = MessageType.Info, icon?: ReactElement): void => {
  toast(
    <ToastNotification icon={icon} type={type}>
      {content}
    </ToastNotification>,
    {
      hideProgressBar: true,
      position: 'top-right',
      autoClose: 4000,
      closeButton: <CloseButton />
    }
  );
};
