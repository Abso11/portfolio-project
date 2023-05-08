import { ValidationSchema } from 'types';
import { isRequired } from 'utils';
import { FormInputs } from './form-inputs.enum';

export const validationSchema: ValidationSchema = {
  [FormInputs.USER_NAME]: [isRequired],
  [FormInputs.Action]: [isRequired]
};

export const requiredFields = [FormInputs.USER_NAME, FormInputs.Action];

export const allFields = [...requiredFields];
