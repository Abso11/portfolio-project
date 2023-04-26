import { FormInstance } from 'antd';
import { Dispatch, SetStateAction, useState } from 'react';

type UseModal = {
  isModalVisible: boolean;
  isSaveEnabled: boolean;
  closeModal: () => void;
  openModal: () => void;
  setIsSaveEnabled: Dispatch<SetStateAction<boolean>>;
};

export const useAntdModal = (form: FormInstance): UseModal => {
  const [isModalVisible, setModalVisible] = useState<boolean>(false);
  const [isSaveEnabled, setIsSaveEnabled] = useState<boolean>(false);

  const closeModal = (): void => {
    setModalVisible(false);
    setIsSaveEnabled(false);
    form.resetFields();
  };

  const openModal = (): void => {
    setModalVisible(true);
  };

  return {
    isModalVisible,
    isSaveEnabled,
    setIsSaveEnabled,
    openModal,
    closeModal
  };
};
