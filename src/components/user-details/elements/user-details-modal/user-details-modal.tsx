import { Form, InputNumber, Spin, Select } from 'antd';
import isEqual from 'lodash.isequal';
import { timezones } from 'utils/timezones';

import { useAntdModal } from 'hooks';
import { UpdateUserDetailsReq } from 'components/user-details/user-details.types';
import { FormItem } from 'components/common/antd-form-item';
import {
  CloseButton,
  EditButton,
  ModalButton,
  ModalButtons,
  ModalHeader,
  ModalTitle,
  StyledModal,
  Wrapper
} from './user-details-modal.styled';
import { useSaveUserDetails } from './user-details.modal.hooks';
import { FormInputs, validationSchema } from './utils';

type Props = {
  id: string;
  initialValues: UpdateUserDetailsReq;
};

export const UserDetailsModal = ({ id, initialValues }: Props): JSX.Element => {
  const [form] = Form.useForm();
  const { isModalVisible, closeModal, openModal, isSaveEnabled, setIsSaveEnabled } = useAntdModal(form);
  const { saveUserDetailss, isSaving } = useSaveUserDetails(id, closeModal);

  const handleValuesChange = (): void => {
    const changed = isEqual(initialValues, form.getFieldsValue(true));
    setIsSaveEnabled(!changed);
  };

  const handleSubmit = async (values: UpdateUserDetailsReq): Promise<void> => {
    await saveUserDetailss(values);
    closeModal();
  };

  const sortedTimezone = [...timezones].sort((a, b) => a.value.localeCompare(b.value));

  return (
    <>
      <EditButton onClick={openModal}>{'Edit'}</EditButton>
      <StyledModal
        open={isModalVisible}
        width={912}
        footer={null}
        onCancel={closeModal}
        closable={!isSaveEnabled}
        closeIcon={<CloseButton />}
      >
        <Spin spinning={isSaving}>
          <ModalHeader>
            <ModalTitle>{'Edit User Details'}</ModalTitle>
            {isSaveEnabled && (
              <ModalButtons>
                <ModalButton onClick={closeModal}>{'Cancel'}</ModalButton>
                <ModalButton onClick={form.submit}>{'Save'}</ModalButton>
              </ModalButtons>
            )}
          </ModalHeader>
          <Form form={form} initialValues={initialValues} onValuesChange={handleValuesChange} onFinish={handleSubmit}>
            <Wrapper>
              <FormItem name={FormInputs.TIMEZONE} label={'Timezone'} rules={validationSchema[FormInputs.TIMEZONE]}>
                <Select options={sortedTimezone} />
              </FormItem>
              <FormItem name={FormInputs.BUDGET} label={'Budget'} rules={validationSchema[FormInputs.BUDGET]}>
                <InputNumber />
              </FormItem>
            </Wrapper>
          </Form>
        </Spin>
      </StyledModal>
    </>
  );
};
