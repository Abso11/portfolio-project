import { ValidationSchema } from 'types';
import { isRequired, mustBeGreaterOrEqualTo } from 'utils';
import { FormInputs } from './form-inputs.enum';

export const validationSchema: ValidationSchema = {
  [FormInputs.TIMEZONE]: [isRequired],
  [FormInputs.BUDGET]: [mustBeGreaterOrEqualTo(10000)]
};
