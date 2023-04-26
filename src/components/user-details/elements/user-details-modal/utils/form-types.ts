import { FormInputs } from './form-inputs.enum';

export type FormTypes = {
  [FormInputs.BUDGET]: number;
  [FormInputs.TIMEZONE]: string;
};
