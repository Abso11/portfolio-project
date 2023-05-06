import { css } from 'styled-components';

export const antdSearchbar = css`
  .ant-input {
    height: 36px;
    margin-left: ${({ theme }) => theme.spacing.space_8};
    color: ${({ theme }) => theme.colors.black};
    font-size: 16px;
    box-shadow: none;
    line-height: 3;

    &::placeholder {
      color: ${({ theme }) => theme.colors.grey02};
    }
  }

  .ant-input-group-addon {
    display: none;
  }

  .ant-input-affix-wrapper {
    border: 1px solid ${({ theme }) => theme.colors.grey03};
    border-radius: 4px !important;
    padding: ${({ theme }) => `0 ${theme.spacing.space_12}`};
  }

  .ant-input-affix-wrapper:not(.ant-input-affix-wrapper-disabled):hover {
    border-color: ${({ theme }) => theme.colors.grey03};
  }

  .ant-input-affix-wrapper .ant-input:focus {
    box-shadow: none !important;
  }

  .ant-input-affix-wrapper:focus,
  .ant-input-affix-wrapper-focused {
    border-color: ${({ theme }) => theme.colors.grey03};
    box-shadow: none !important;
  }
`;
