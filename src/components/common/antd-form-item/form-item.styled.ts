import { Form } from 'antd';
import styled from 'styled-components';

export const StyledFormItem = styled(Form.Item)<{ $isGreyLabel?: boolean }>`
  position: relative;

  .ant-input,
  .ant-input-number {
    width: 100%;
    height: 56px;
    margin-left: 0;
    padding: 20px ${({ theme: { spacing } }) => spacing.space_16};
    font-size: ${({ theme: { fontSize } }) => fontSize.nd};
    border-color: ${({ theme: { colors } }) => colors.black};

    &:not(:disabled),
    &:not(&-disabled) {
      color: ${({ theme: { colors } }) => colors.black} !important;
      border-radius: 2px;
    }

    &::placeholder {
      color: ${({ theme: { colors } }) => colors.grey02};
    }
  }

  .ant-input-number {
    padding: 18px 0 0 11px;
  }

  .ant-input-number-input {
    height: auto;
  }

  .ant-input[disabled] {
    border-radius: 2px;
  }

  .ant-input:hover,
  .ant-input-number:hover {
    border-color: ${({ theme: { colors } }) => colors.blue01};
  }

  .ant-input:focus,
  .ant-input-number:focus {
    border-color: ${({ theme: { colors } }) => colors.blue01};
    outline: 0;
    box-shadow: none;
  }

  .ant-input-number-disabled {
    color: ${({ theme: { colors } }) => colors.grey02};
  }

  .ant-input-number-disabled:hover {
    border-color: ${({ theme: { colors } }) => colors.black};
  }

  .ant-input-number-disabled input {
    color: ${({ theme: { colors } }) => colors.grey05};
  }

  .ant-input-group > .ant-input:first-child,
  .ant-input-group-addon:first-child {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  .ant-input-affix-wrapper {
    border-color: ${({ theme: { colors } }) => colors.black};
    border-radius: 6px;
    box-shadow: none;
  }

  .ant-input-affix-wrapper:hover {
    border-color: ${({ theme: { colors } }) => colors.blue01};
  }

  .ant-input-affix-wrapper:focus {
    border-color: ${({ theme: { colors } }) => colors.blue01};
    outline: 0;
    box-shadow: none;
  }
  .ant-input-group > .ant-input:last-child,
  .ant-input-group-addon:last-child {
    border-bottom-right-radius: 4px;
    border-top-right-radius: 4px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    border-color: ${({ theme: { colors } }) => colors.black};

    :hover {
      cursor: pointer;
    }

    svg {
      path {
        fill: ${({ theme: { colors } }) => colors.blue01};
      }
    }
  }

  .ant-select-single:not(.ant-select-customize-input) .ant-select-selector {
    width: 100%;
    height: auto;
  }

  .ant-form-item-label {
    position: absolute;
    top: -${({ theme: { spacing } }) => spacing.space_8};
    left: ${({ theme: { spacing } }) => spacing.space_16};
    height: 17px;
    background-color: ${({ theme: { colors }, $isGreyLabel }) => ($isGreyLabel ? colors.grey : colors.white)};
    font-size: ${({ theme: { fontSize } }) => fontSize.xs};
    z-index: 2;

    > label {
      padding: 1px ${({ theme: { spacing } }) => spacing.space_12};
      height: 17px;
      color: ${({ theme: { colors } }) => colors.secondaryButtonText};

      &:after,
      &:before {
        display: none;
      }

      &.ant-form-item-required {
        :before {
          display: none;
        }
      }
    }
  }

  .ant-form-item-explain-error {
    font-size: ${({ theme: { fontSize } }) => fontSize.xs};
    color: ${({ theme }) => theme.colors.errorRed};
    margin-bottom: ${({ theme: { spacing } }) => spacing.space_16};
  }

  .ant-select {
    .ant-select-selector {
      border-color: ${({ theme: { colors } }) => colors.black};
    }

    &.ant-select-focused .ant-select-selector {
      box-shadow: none !important;
    }

    &.ant-select-lg .ant-select-selector {
      height: 56px !important;
    }

    .ant-select-selection-item {
      padding-left: ${({ theme: { spacing } }) => spacing.space_8};
      line-height: 54px !important;
    }
  }
`;
