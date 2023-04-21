import { css } from 'styled-components';

export const antdTable = css`
  .ant-table-tbody {
    tr:nth-child(even) td {
      background-color: ${({ theme }) => theme.colors.greyTable};
    }
  }

  .ant-table-thead {
    .ant-table-cell {
      background-color: ${({ theme }) => theme.colors.white};
    }
  }

  .ant-table-cell {
    :before {
      display: none;
    }
  }

  .ant-table,
  .ant-table-thead > tr > th,
  .ant-pagination-options .ant-select,
  .ant-pagination-item a {
    color: ${({ theme }) => theme.colors.black};
  }

  .ant-pagination-item-active a {
    color: ${({ theme }) => theme.colors.blue01};
  }

  .ant-table a {
    color: ${({ theme }) => theme.colors.blue01};
    font-weight: 600;

    &:hover {
      color: ${({ theme }) => theme.colors.blue01};
      opacity: 0.6;
    }
  }

  .ant-table-tbody > tr.ant-table-row:hover > td,
  .ant-table-tbody > tr > td.ant-table-cell-row-hover {
    background: ${({ theme }) => theme.colors.transparent.blue.active};
  }
`;
