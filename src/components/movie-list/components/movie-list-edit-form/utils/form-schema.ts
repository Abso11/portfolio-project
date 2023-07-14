import { isRequired } from 'utils';
import { ValidationSchema } from 'types';
import { FormInputs } from './form-inputs.enum';

export const validationSchema: ValidationSchema = {
  [FormInputs.CREATOR_NAME]: [isRequired],
  [FormInputs.TITLE]: [isRequired]
};
