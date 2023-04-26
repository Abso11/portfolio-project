import { FormItemProps } from 'antd';
import { StyledFormItem } from './form-item.styled';

const FormItem = (props: FormItemProps & { $isGreyLabel?: boolean }): JSX.Element => (
  <StyledFormItem {...props} $isGreyLabel={props.$isGreyLabel} />
);

export default FormItem;
