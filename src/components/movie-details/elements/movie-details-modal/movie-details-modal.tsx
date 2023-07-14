import { useTranslation } from 'react-i18next';
import { Form, InputNumber, Spin, Select } from 'antd';
import isEqual from 'lodash.isequal';
import { timezones } from 'utils/timezones';
import { useAntdModal } from 'hooks';
import { UpdateMovieDetailsReq } from 'components/movie-details/movie-details.types';
import { FormItem } from 'components/common';
import {
  CloseButton,
  EditButton,
  ModalButton,
  ModalButtons,
  ModalHeader,
  ModalTitle,
  StyledModal,
  Wrapper
} from './movie-details-modal.styled';
import { useSaveMovieDetails } from './movie-details.modal.hooks';
import { FormInputs, validationSchema } from './utils';

type Props = {
  id: string;
  initialValues: UpdateMovieDetailsReq;
};

export const MovieDetailsModal = ({ id, initialValues }: Props): JSX.Element => {
  const { t } = useTranslation();
  const [form] = Form.useForm();
  const { isModalVisible, closeModal, openModal, isSaveEnabled, setIsSaveEnabled } = useAntdModal(form);
  const { saveMovieData, isSaving } = useSaveMovieDetails(id, closeModal);

  const handleValuesChange = (): void => {
    const changed = isEqual(initialValues, form.getFieldsValue(true));
    setIsSaveEnabled(!changed);
  };

  const handleSubmit = async (values: UpdateMovieDetailsReq): Promise<void> => {
    await saveMovieData(values);
    closeModal();
  };

  const sortedTimezone = [...timezones].sort((a, b) => a.value.localeCompare(b.value));

  return (
    <>
      <EditButton onClick={openModal}>{t('edit')}</EditButton>
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
            <ModalTitle>{t('movie-details-modal.edit')}</ModalTitle>
            {isSaveEnabled && (
              <ModalButtons>
                <ModalButton onClick={closeModal}>{t('cancel')}</ModalButton>
                <ModalButton onClick={form.submit}>{t('save-button')}</ModalButton>
              </ModalButtons>
            )}
          </ModalHeader>
          <Form form={form} initialValues={initialValues} onValuesChange={handleValuesChange} onFinish={handleSubmit}>
            <Wrapper>
              <FormItem
                name={FormInputs.TIMEZONE}
                label={t('movie-details.timezone')}
                rules={validationSchema[FormInputs.TIMEZONE]}
              >
                <Select options={sortedTimezone} />
              </FormItem>
              <FormItem
                name={FormInputs.BUDGET}
                label={t('movie-details.budget')}
                rules={validationSchema[FormInputs.BUDGET]}
              >
                <InputNumber />
              </FormItem>
            </Wrapper>
          </Form>
        </Spin>
      </StyledModal>
    </>
  );
};
