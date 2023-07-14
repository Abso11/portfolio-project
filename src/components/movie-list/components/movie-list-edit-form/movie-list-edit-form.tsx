import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Form, Input, Spin } from 'antd';
import isEqual from 'lodash.isequal';
import { useAntdModal } from 'hooks';
import { FormItem, AntdSidebar } from 'components/common';
import { UpdateMovieListReq } from 'components/movie-list/movie-list.types';
import { useSaveMovieData } from './movie-list-edit-form.hooks';
import { FormInputs, validationSchema } from './utils';
import { StyledEditUser } from './movie-list-edit-form.styled';

type Props = {
  title_id: string;
  initialValues: { creator_name: string; title: string };
  isSidebarVisible: boolean;
  onCloseSidebar: () => void;
};

export const MovieListEditForm = ({
  title_id,
  initialValues,
  isSidebarVisible,
  onCloseSidebar
}: Props): JSX.Element => {
  const [form] = Form.useForm();
  const { t } = useTranslation();

  const { isSaveEnabled, setIsSaveEnabled } = useAntdModal(form);

  const { saveMovieData, isSaving } = useSaveMovieData(onCloseSidebar);
  const handleValuesChange = (): void => {
    const changed = isEqual(initialValues, form.getFieldsValue(true));
    setIsSaveEnabled(!changed);
  };

  const handleSubmit = async (values: UpdateMovieListReq): Promise<void> => {
    saveMovieData({ ...values, title_id });
    form.resetFields();
    onCloseSidebar();
  };

  useEffect(() => {
    form.setFieldsValue(initialValues);
  }, [isSidebarVisible]);

  return (
    <AntdSidebar
      open={isSidebarVisible}
      onCloseSidebar={onCloseSidebar}
      onCancel={onCloseSidebar}
      disabled={!isSaveEnabled}
      onSubmit={form.submit}
    >
      <Spin spinning={isSaving}>
        <StyledEditUser>
          {t('dashboard-list-edit-form.edit-user')}: {title_id}
        </StyledEditUser>
        <Form form={form} initialValues={initialValues} onValuesChange={handleValuesChange} onFinish={handleSubmit}>
          <FormItem
            name={FormInputs.CREATOR_NAME}
            label={t('dashboard-list-edit-form.user-name')}
            rules={validationSchema[FormInputs.CREATOR_NAME]}
          >
            <Input />
          </FormItem>
          <FormItem
            name={FormInputs.TITLE}
            label={t('dashboard-list-edit-form.action')}
            rules={validationSchema[FormInputs.TITLE]}
          >
            <Input />
          </FormItem>
        </Form>
      </Spin>
    </AntdSidebar>
  );
};
