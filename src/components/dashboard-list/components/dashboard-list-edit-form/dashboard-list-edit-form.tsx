import { Form, Input, Spin } from 'antd';
import isEqual from 'lodash.isequal';

import { useAntdModal } from 'hooks';
import { FormItem } from 'components/common/antd-form-item';
import { AntdSidebar } from 'components/common/sidebar';
import { UpdateDashboardListReq } from 'components/dashboard-list/dashboard-list.types';
import { useEffect } from 'react';
import { useSaveUserDashboardData } from 'components/dashboard-list/dashboard-list.hooks';
import { FormInputs, validationSchema } from './utils';
import { StyledEditUser } from './dashboard-list-edit-form.styled';

type Props = {
  user_id: string;
  initialValues: { user_name: string; action: string };
  isSidebarVisible: boolean;
  onCloseSidebar: () => void;
};

export const DashboardListEditForm = ({
  user_id,
  initialValues,
  isSidebarVisible,
  onCloseSidebar
}: Props): JSX.Element => {
  const [form] = Form.useForm();

  const { isSaveEnabled, setIsSaveEnabled } = useAntdModal(form);

  const { saveUserData, isSaving } = useSaveUserDashboardData(onCloseSidebar);
  const handleValuesChange = (): void => {
    const changed = isEqual(initialValues, form.getFieldsValue(true));
    setIsSaveEnabled(!changed);
  };

  const handleSubmit = async (values: UpdateDashboardListReq): Promise<void> => {
    saveUserData({ ...values, user_id });
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
        <StyledEditUser>Editing User: {user_id}</StyledEditUser>
        <Form form={form} initialValues={initialValues} onValuesChange={handleValuesChange} onFinish={handleSubmit}>
          <FormItem name={FormInputs.USER_NAME} label={'User_name'} rules={validationSchema[FormInputs.USER_NAME]}>
            <Input />
          </FormItem>
          <FormItem name={FormInputs.Action} label={'Action'} rules={validationSchema[FormInputs.Action]}>
            <Input />
          </FormItem>
        </Form>
      </Spin>
    </AntdSidebar>
  );
};
