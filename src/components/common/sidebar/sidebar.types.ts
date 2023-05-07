import { ReactNode } from 'react';

export interface Props {
  onCancel?: () => void;
  onSubmit?: () => void;
  onCloseSidebar: () => void;
  formId?: string;
  disabled?: boolean;
  isLcInSiteView?: boolean;
  isDeleteButtonVisible?: boolean;
  onDelete?: () => void;
  children: ReactNode;
  isTouched?: boolean;
  dataTestId?: string;
}
