import { RuleObject } from 'antd/lib/form';
import i18n from 'i18next';

export const isRequired = (): RuleObject => ({
  required: true,
  message: 'isRequired'
});

export const mustBeGreaterOrEqualTo = (to: number, required?: boolean): RuleObject => ({
  validator: (_, value) => {
    if (!value && value !== 0 && required) {
      return Promise.reject(new Error(i18n.t<string>('forms.is-required')));
    }
    if (Number(value) < Number(to)) {
      return Promise.reject(new Error(i18n.t<string>('forms.must-be-a-number-greater-than', { value: to })));
    }
    return Promise.resolve();
  }
});

export const regex = (pattern: RegExp, specialCharacters?: string): RuleObject => ({
  pattern,
  message: i18n.t<string>('forms.is-not-in-correct-format', {
    specialCharacters,
    interpolation: { escapeValue: false }
  })
});

export const isInteger = (required?: boolean): RuleObject => ({
  validator: (_, value) => {
    if (value === null && !required) {
      return Promise.resolve();
    }

    if (value !== 0 && !value && required) {
      return Promise.reject(new Error(i18n.t<string>('forms.is-required')));
    }

    if (!Number.isInteger(value)) {
      return Promise.reject(new Error(i18n.t<string>('forms.must-be-a-integer')));
    }
    return Promise.resolve();
  }
});
