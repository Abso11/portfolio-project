import { Drawer, DrawerProps, Space, Button, Tooltip } from 'antd';
import { RelativeContainer } from './sidebar.styled';
import { Props } from './sidebar.types';

export const AntdSidebar = ({
  disabled,
  onCancel,
  onSubmit,
  onCloseSidebar,
  onDelete,
  isDeleteButtonVisible,
  children,
  formId,
  isTouched,
  dataTestId,
  ...rest
}: Props & DrawerProps): JSX.Element => {
  const handleOnClose = (): void => {
    if (!isTouched) {
      onCloseSidebar();
    }
  };

  return (
    <RelativeContainer>
      <Drawer
        placement='right'
        zIndex={9999}
        destroyOnClose
        forceRender
        closeIcon={null}
        width={window.innerWidth > 900 ? 400 : window.innerWidth}
        onClose={handleOnClose}
        {...rest}
        extra={
          <Space>
            <Button onClick={onCancel}>{'Cancel'}</Button>
            {isDeleteButtonVisible && (
              <Tooltip zIndex={99999999999} title={'delete'}>
                <Button danger onClick={onDelete}>
                  {'delete'}
                </Button>
              </Tooltip>
            )}
            {onSubmit ? (
              <Button
                data-testid={dataTestId || 'test-sidebar-button'}
                type='primary'
                disabled={disabled || false}
                onClick={onSubmit}
              >
                {'Submit'}
              </Button>
            ) : (
              <Button
                data-testid={dataTestId || 'test-sidebar-button'}
                form={formId}
                key='submit'
                htmlType='submit'
                type='primary'
                disabled={disabled}
              >
                {'submit'}
              </Button>
            )}
          </Space>
        }
      >
        {children}
      </Drawer>
    </RelativeContainer>
  );
};
